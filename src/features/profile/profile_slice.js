import { createSlice } from "@reduxjs/toolkit";
import { PROFILE_DATA } from "../DUMMY_DATA";

// const initialState = {
//   bio: {},
//   skills: [],
//   education: [],
//   experience: [],
//   certificate: [],
// };
const initialState = PROFILE_DATA;
const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addBio: (state, action) => {
      state.bio = { ...state.bio, ...action.payload };
    },
    addSkills: (state, action) => {
      state.skills = [...action.payload];
    },

    addEducation: (state, action) => {
      state.education = [...action.payload];
    },

    addExperience: (state, action) => {
      state.experience = [...action.payload];
    },

    addCertificate: (state, action) => {
      state.certificate = [...action.payload];
    },
  },
  extraReducers: {},
});

export const {
  addBio,
  addSkills,
  addEducation,
  addExperience,
  addCertificate,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;
