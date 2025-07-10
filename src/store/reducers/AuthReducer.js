import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem("userData")
	? JSON.parse(localStorage.getItem("userData"))
	: null;
const userToken = localStorage.getItem("userToken")
	? JSON.parse(localStorage.getItem("userToken"))
	: null;

const AuthReducer = createSlice({
	name: "auth",
	initialState: {
		userToken: userToken,
		userData: userData,
	},
	reducers: {
		setUserDetail: (state, action) => {
			console.log(action, "action");
			state.userData = action.payload.user;
			state.userToken = action.payload.token;
			localStorage.setItem("userData", JSON.stringify(action.payload.user));
			localStorage.setItem("userToken", JSON.stringify(action.payload.token));
		},
		setVerifyUser: (state, action) => {
			state.userData = action.payload;
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		setLogoOutUser: (state, action) => {
			state.userData = null;
			state.userToken = null;
			localStorage.removeItem("userData");
			localStorage.removeItem("userToken");
		},
	},
});

export const { setUserDetail, setLogoOutUser, setVerifyUser } =
	AuthReducer.actions;
export default AuthReducer.reducer;
