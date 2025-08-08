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
    tagTypes: ["editInfo", "quiz"],
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
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => {
        return {
          url: LOGIN_URL,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["editInfo"],
    }),
    authRegister: build.mutation({
      query: (data) => {
        return {
          url: REGISTER_URL,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["editInfo"],
    }),
    verifyAccount: build.mutation({
      query: (data) => {
        return {
          url: VERIFY_ACCOUNT,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["editInfo"],
    }),
    forgetPassword: build.mutation({
      query: (data) => {
        return {
          url: FORGET_PASSWORD,
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: build.mutation({
      query: (data) => {
        return {
          url: RESET_PASSWORD,
          method: "POST",
          body: data,
        };
      },
    }),
    changePassword: build.mutation({
      query: (data) => {
        return {
          url: CHANGE_PASSWORD,
          method: "POST",
          body: data,
        };
      },
    }),
    resendOtp: build.mutation({
      query: (data) => {
        return {
          url: RESEND_OTP,
          method: "POST",
          body: data,
        };
      },
    }),
    // resendVerifyOtp: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: RESEND_VERIFY_OTP,
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["editInfo"],
    // }),
    // forgetOtp: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: FORGET_OTP,
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),
    // UpdatePassword: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: UPDATE_NEW_PASSWORD,
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // }),
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
