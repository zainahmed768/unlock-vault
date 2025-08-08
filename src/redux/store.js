import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import AuthReducer from "./reducers/AuthReducer";
import AuthServices from "./services/AuthServices";

const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    [AuthServices.reducerPath]: AuthServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required to handle non-serializable actions from redux-persist
    }).concat([AuthServices.middleware]),
});

// Persist the store
export const persistor = persistStore(store);

export default store;
