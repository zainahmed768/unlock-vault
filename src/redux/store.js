import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./reducers/AuthReducer";
import AuthServices from "./services/AuthServices";

const store = configureStore({
  reducer: {
    AuthReducer,
    [AuthServices.reducerPath]: AuthServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(AuthServices.middleware),
});

export const persistor = persistStore(store);
export default store;
