import { createSlice } from "@reduxjs/toolkit";


//Creating the slice with reducer object having the actions.
const usersSlice = createSlice({
  name: "usersData",
  initialState: {
    usersList: null,
    postsList: null,
  },
  reducers: {
    addUsersData: (state, action) => {  //The action is used to add the users data list to the state.
      state.usersList = action.payload;
    },
    addPostsData: (state, action) => { //The action is used to add the posts data list to the state.
      state.postsList = action.payload;
    },
  },
});

export const { addUsersData, addPostsData } = usersSlice.actions; //Exporting the actions
export default usersSlice.reducer; //Exporting the reducer
