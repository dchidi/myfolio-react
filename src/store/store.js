import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profile_slice";

export const store = configureStore({
  reducer: { profile: ProfileReducer },
});
