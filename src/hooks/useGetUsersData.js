import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { addUsersData } from "../utils/usersSlice";
import { USERS_API } from "../utils/constants";

// Custom hook to fetch and store users data
export const useGetUsersData = () => {
  const dispatch = useDispatch(); // Accessing the dispatch function from Redux
  const usersList = useSelector((store) => store.usersData?.usersList); // Getting usersList from the Redux store state

  // Function to fetch users data from the API and dispatch the action to store it
  const fetchUsersData = useCallback(async () => {
    try {
      const response = await fetch(USERS_API); // Fetching data from USERS_API

      // Checking if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      // Parsing the response data
      const data = await response.json();

      // Dispatching an action to add users data to the global state
      dispatch(addUsersData(data));
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  }, [dispatch]); // Dependencies include the dispatch function

  // useEffect hook to fetch users data when usersList is empty
  useEffect(() => {
    if (!usersList) {
      fetchUsersData(); // Calling fetchUsersData function if usersList is empty
    }
  }, [fetchUsersData, usersList]); // Dependencies include fetchUsersData and usersList
};
