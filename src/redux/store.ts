import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/CounterSlice";
import logger from "./middleware/logger";
// import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
