import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "../features/profile/profile_slice";
import ProjectReducer from "../features/projects/project_slice";

export const store = configureStore({
  reducer: { profile: ProfileReducer, projects: ProjectReducer },
});
