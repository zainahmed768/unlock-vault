import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/URL";
import {
  CHANGE_PASSWORD,
  FORGET_PASSWORD,
  LOGIN_URL,
  REGISTER_URL,
  RESEND_OTP,
  RESET_PASSWORD,
  VERIFY_ACCOUNT,
} from "../../utils/endpoints";

const AuthServices = createApi({
  reducerPath: "AuthServices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const reducers = getState();
      const token = reducers?.AuthReducer?.userToken;
      headers.set("Accept", "application/json");
      if (endpoint !== REGISTER_URL && token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["editInfo", "quiz"], // ✅ Moved here, not inside baseQuery
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: LOGIN_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["editInfo"],
    }),
    authRegister: build.mutation({
      query: (data) => ({
        url: REGISTER_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["editInfo"],
    }),
    verifyAccount: build.mutation({
      query: (data) => ({
        url: VERIFY_ACCOUNT,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["editInfo"],
    }),
    forgetPassword: build.mutation({
      query: (data) => ({
        url: FORGET_PASSWORD,
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: RESET_PASSWORD,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: CHANGE_PASSWORD,
        method: "POST",
        body: data,
      }),
    }),
    resendOtp: build.mutation({
      query: (data) => ({
        url: RESEND_OTP,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export default AuthServices;

export const {
  useAuthRegisterMutation,
  useLoginMutation,
  useVerifyAccountMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useResendOtpMutation,
} = AuthServices;
