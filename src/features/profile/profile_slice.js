import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bio: {
    // surname: "DURU",
    // firstname: "CHIDI",
    // email: "tchidi4real@gmail.com",
    // phone: "0899516678",
  },
  skills: [],
  education: [],
  experience: [],
  certificate: [],
};
const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addBio: (state, action) => {
      state.bio = { ...state.bio, ...action.payload };
    },
    addSkills: (state, action) => {
      console.log(action);
      state.skills = [...state.skills, ...action.payload];
    },

    addEducation: (state, action) => {
      console.log(action);
      state.education = [...state.education, ...action.payload];
    },

    addExperience: (state, action) => {
      console.log(action);
      state.experience = [...state.experience, ...action.payload];
    },

    addCertificate: (state, action) => {
      console.log(action);
      state.certificate = [...state.certificate, ...action.payload];
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
