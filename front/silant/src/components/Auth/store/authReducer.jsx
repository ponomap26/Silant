import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { login, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
