import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfPepsi: number;
};

const initialState: InitialState = {
  numOfPepsi: 20,
};

const pepsiSlice = createSlice({
  name: "pepsi",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfPepsi--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfPepsi += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numOfPepsi--;
  //   });
  // },
});

export default pepsiSlice.reducer;
export const { ordered, restocked } = pepsiSlice.actions;
