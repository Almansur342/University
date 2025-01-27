import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  userId:string;
  role:string;
  iat:number;
  exp:number;
}

type TauthState = {
  user: null | TUser;
  token: null | TUser;
};


const initialState: TauthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.token = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const useCurrectToken = (state: RootState) => state.auth.token;
export const selectCurrectUser = (state: RootState) => state.auth.user;
