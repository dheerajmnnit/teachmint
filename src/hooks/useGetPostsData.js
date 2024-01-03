import { useDispatch, useSelector } from "react-redux";
import { addPostsData } from "../utils/usersSlice";
import { useEffect, useCallback } from "react";
import { POSTS_API } from "../utils/constants";

export const useGetPostsData = () => {
  const dispatch = useDispatch(); // Accessing the dispatch function from Redux

  // Selecting postsList from the Redux store state
  const postsList = useSelector((store) => store.usersData?.postsList);

  // useCallback to memoize the fetchPostsData function and avoid recreating it on every render
  const fetchPostsData = useCallback(async () => {
    try {
      // Fetching posts data from the API
      const response = await fetch(POSTS_API);

      // Handling the response and checking if the request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      // Parsing the response data
      const data = await response.json();

      // Dispatching an action to add posts data to the global state
      dispatch(addPostsData(data));
    } catch (error) {
      console.error("Error fetching posts data:", error);
    }
  }, [dispatch]); // Dependency array including dispatch to prevent unnecessary recreation of fetchPostsData

  // useEffect hook to fetch posts data when postsList is empty
  useEffect(() => {
    if (!postsList) {
      fetchPostsData();
    }
  }, [fetchPostsData, postsList]); // Dependency array including fetchPostsData and postsList to trigger re-fetch if needed
};
