import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/URL";

const SubscriptionServices = createApi({
  reducerPath: "SubscriptionServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.AuthReducer?.userToken;

      headers.set("Accept", "application/json");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["subscription"],

  endpoints: (build) => ({
    // GET subscription plans
    getAllSubscriptions: build.query({
      query: () => ({
        url: `/subscription-plans`,
        method: "GET",
      }),
      providesTags: ["subscription"],
    }),
    subscriptionPayment: build.mutation({
      query: ({ plan }) => ({
        url: `/auth/subscription-plans/${plan}/subscribe`,
        method: "POST",
      }),
      providesTags: ["subscription"],
    }),
  }),
});

export default SubscriptionServices;

export const { useGetAllSubscriptionsQuery, useSubscriptionPaymentMutation } =
  SubscriptionServices;
