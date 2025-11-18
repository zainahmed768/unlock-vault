import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/URL";
import { PAGES } from "../../utils/endpoints";

const HomeServices = createApi({
  reducerPath: "HomeServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const reducers = getState();
      const token = reducers?.AuthReducer?.userToken;
      headers.set("Accept", "application/json");
      // if (endpoint !== REGISTER_URL && token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
    //   headers.set("authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: ["editInfo", "quiz"],
  endpoints: (build) => ({
    Home: build.query({
      query: ({ id }) => ({
        url: `${PAGES}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export default HomeServices;

export const { useHomeQuery } = HomeServices;
