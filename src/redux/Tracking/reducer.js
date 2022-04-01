import { GET_Transit_Events } from "../actionTypes";

const INITIAL_STATE = {
  CurrentStatus: {
    state: "",
    timestamp: "",
  },
  PromisedDate: "",
  TrackingNumber: "",
  TrackingURL: "",
  SupportPhoneNumbers: [],
  TransitEvents: [],
  CreateDate: "",
};
// {
//   CurrentStatus: {
//     state: "DELIVERED",
//     timestamp: "2020-07-22T13:22:56.383Z",
//   },
//   PromisedDate: "2020-07-22T19:07:50.883Z",
//   TrackingNumber: "1094442",
//   TrackingURL: "bosta.co/tracking-shipment/?track_num=1094442",
//   SupportPhoneNumbers: ["19043"],
//   TransitEvents: [
//     {
//       state: "TICKET_CREATED",
//       timestamp: "2020-07-21T17:37:31.116Z",
//     },
//     {
//       state: "PACKAGE_RECEIVED",
//       timestamp: "2020-07-21T19:07:50.931Z",
//       hub: "Alexandria Hub",
//     },
//     {
//       state: "IN_TRANSIT",
//       timestamp: "2020-07-21T19:19:44.202Z",
//     },
//     {
//       state: "PACKAGE_RECEIVED",
//       timestamp: "2020-07-21T22:51:12.385Z",
//       hub: "Cairo Sorting Facility",
//     },
//     {
//       state: "IN_TRANSIT",
//       timestamp: "2020-07-22T00:11:04.465Z",
//     },
//     {
//       state: "PACKAGE_RECEIVED",
//       timestamp: "2020-07-22T00:18:51.305Z",
//       hub: "Katamya Hub",
//     },
//     {
//       state: "NOT_YET_SHIPPED",
//       timestamp: "2020-07-22T07:21:24.498Z",
//     },
//     {
//       state: "OUT_FOR_DELIVERY",
//       timestamp: "2020-07-22T07:21:25.036Z",
//     },
//     {
//       state: "DELIVERED",
//       timestamp: "2020-07-22T13:22:56.383Z",
//     },
//   ],
//   CreateDate: "2020-07-21T17:37:31.147Z",
// };
const trackReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "IN reducer");
  switch (action.type) {
    case GET_Transit_Events:
      console.log({ ...action.payload });
      debugger;
      return { ...action.payload };

    default:
      return state;
  }
};

export default trackReducer;
