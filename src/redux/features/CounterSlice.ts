import { createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
