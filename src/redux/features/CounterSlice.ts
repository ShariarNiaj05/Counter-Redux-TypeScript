import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    incrementByValue: (state, { payload }: PayloadAction<number>) => {
      state.count += payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
