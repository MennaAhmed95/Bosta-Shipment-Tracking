import { GET_Transit_Events } from "../actionTypes";
import { getAllTransitEventsAsync } from "./api";

export const getTransitEvent = (trackNo) => {
  return async (dispatch) => {
    const result = await getAllTransitEventsAsync(trackNo);
    console.log(result, "action");
    dispatch({ type: GET_Transit_Events, payload: trackNo });
  };
};
