import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../assets/components/Types";

const initialState: IUser = { url: "", name: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      console.log(action.payload);

      state.name = action.payload.name;
      state.url = action.payload.url;
    },
    removeUser: (state) => {
      state.name = "";
      state.url = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
