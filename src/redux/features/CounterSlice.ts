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
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByValue: (state, { payload }) => {
      state.count += payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
