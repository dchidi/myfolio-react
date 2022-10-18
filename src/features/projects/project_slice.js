import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
  },
  extraReducers: {},
});

export const { addProject } = ProjectSlice.actions;

export default ProjectSlice.reducer;
