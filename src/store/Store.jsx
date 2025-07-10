import { configureStore } from "@reduxjs/toolkit";
import AuthService from "./services/AuthService";
import AuthReducer from "./reducers/AuthReducer";

const Store = configureStore({
	reducer: {
		[AuthService.reducerPath]: AuthService.reducer,
		AuthReducer: AuthReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([AuthService.middleware]),
});

export default Store;
