import { configureStore } from "@reduxjs/toolkit";
import appslice from "./SliceReduser";

const store = configureStore({
  reducer: {
    appstate: appslice,
  },
});

export default store;
