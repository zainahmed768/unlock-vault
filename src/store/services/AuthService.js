import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/URL";

const AuthService = createApi({
	reducerPath: "Auth-Service",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const reducers = getState();
			const token = reducers?.AuthReducer?.userToken;
			headers.set("authorization", token ? `Bearer ${token}` : "");
			headers.set("Access-Control-Allow-Origin", "*");
			return headers;
		},
	}),
	endpoints: (builder) => ({
		registerContent: builder.mutation({
			query: (registerData) => {
				return {
					url: SIGNUP_URL,
					method: "POST",
					body: registerData,
				};
			},
		}),
		loginContent: builder.mutation({
			query: (loginData) => {
				return {
					url: LOGIN_URL,
					method: "POST",
					body: loginData,
				};
			},
		}),
		accountVerificationContent: builder.mutation({
			query: (objData) => {
				return {
					url: `${ACCOUNT_VERIFICATION_URL}?email=${objData?.email}`,
					method: "POST",
					body: objData?.otp,
				};
			},
		}),
		checkOtpContent: builder.mutation({
			query: (data) => {
				return {
					url: CHECK_OTP_URL,
					method: "POST",
					body: data,
				};
			},
		}),
		forgotPasswordContent: builder.mutation({
			query: (email) => {
				return {
					url: FORGOT_PASSWORD_URL,
					method: "POST",
					body: email,
				};
			},
		}),
		createPasswordContent: builder.mutation({
			query: (data) => {
				return {
					url: CREATE_PASSWORD_URL,
					method: "POST",
					body: data,
				};
			},
		}),
		resetOtpContent: builder.query({
			query: (email) => {
				return {
					url: `${RESET_OTP_URL}?email=${email}`,
					method: "GET",
				};
			},
		}),
	}),
});

export const {
	useRegisterContentMutation,
	useLoginContentMutation,
	useAccountVerificationContentMutation,
	useCheckOtpContentMutation,
	useLazyResetOtpContentQuery,
	useForgotPasswordContentMutation,
	useCreatePasswordContentMutation,
} = AuthService;
export default AuthService;
