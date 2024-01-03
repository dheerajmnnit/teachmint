import { createSlice } from "@reduxjs/toolkit";

//Creating the slice with reducer object having the actions.
const timezoneSlice = createSlice({
  name: "timezone",
  initialState: {
    timezoneList: null,
  },
  reducers: {
    addTimeZone: (state, action) => {      //The action is used to add the timezone array to the state.
      state.timezoneList = action.payload;
    },
  },
});

export const { addTimeZone } = timezoneSlice.actions; //Exporting the actions
export default timezoneSlice.reducer; //Exporting the reducer
