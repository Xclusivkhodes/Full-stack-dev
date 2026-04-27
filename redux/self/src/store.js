import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./app/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
