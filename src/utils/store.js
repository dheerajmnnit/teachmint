import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import timezoneSlice from "./timezoneSlice";

//Configuring the store and providing the logical slices created using createSlice

const store = configureStore({
  reducer: {
    usersData: usersSlice,
    timezone: timezoneSlice,
  },
});

export default store;
//Exporting the store, to wrap the root level component with it