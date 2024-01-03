import { useDispatch, useSelector } from "react-redux";
import { addTimeZone } from "../utils/timezoneSlice";
import { useEffect, useCallback } from "react";
import { TIMEZONES_API } from "../utils/constants";

export const useGetTimeZone = () => {
  const dispatch = useDispatch(); // Accessing the dispatch function from Redux

  // Selecting timezoneList from the Redux store state
  const timezoneList = useSelector((store) => store.timezone?.timezoneList);

  // useCallback to memoize the fetchTimeZoneData function and avoid recreating it on every render
  const fetchTimeZoneData = useCallback(async () => {
    try {
      // Fetching timezone data from the API
      const response = await fetch(TIMEZONES_API);

      // Handling the response and checking if the request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      // Parsing the response data
      const data = await response.json();

      // Dispatching an action to add timezone data to the global state
      dispatch(addTimeZone(data));
    } catch (error) {
      console.error("Error fetching timezone data:", error);
    }
  }, [dispatch]); // Dependency array including dispatch to prevent unnecessary recreation of fetchTimeZoneData

  // useEffect hook to fetch timezone data when timezoneList is empty
  useEffect(() => {
    if (!timezoneList) {
      fetchTimeZoneData();
    }
  }, [fetchTimeZoneData, timezoneList]); // Dependency array including fetchTimeZoneData and timezoneList to trigger re-fetch if needed
};
