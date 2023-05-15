import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Imodal } from "../assets/components/Types";

const initialState: Imodal = { state: false, content: "bookModelForm" };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    togelModalState: (state, action: PayloadAction<Imodal["content"]>) => {
      state.content = action.payload;
      state.state = !state.state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { togelModalState } = modalSlice.actions;

export default modalSlice.reducer;
