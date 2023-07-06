import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  pending: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    updateStart: (state) => {
      state.pending = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.error = null;
    },
    updateFailure: (state) => {
      state.pending = false;
      state.error = "Failed to update user.";
    },
  },
});

export const {
  setUser,
  clearUser,
  updateStart,
  updateSuccess,
  updateFailure,
} = userSlice.actions;

export default userSlice.reducer;
