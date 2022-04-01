const translateDetails = (detail) => {
  let state;
  switch (detail) {
    case "TICKET_CREATED":
      state = detail;
      break;
    case "PACKAGE_RECEIVED":
      state = detail;
      break;
    case "NOT_YET_SHIPPED":
      state = detail;
      break;
    case "OUT_FOR_DELIVERY":
      state = detail;
      break;
    case "WAITING_FOR_CUSTOMER_ACTION":
      state = detail;
      break;
    case "DELIVERED":
      state = detail;
      break;
    case "DELIVERED_TO_SENDER":
      state = detail;
      break;
    case "RECEIVED_DELIVERY_LOCATION":
      state = detail;
      break;
    case "IN_TRANSIT":
      state = detail;
      break;

    default:
      break;
  }
  return state;
};

export default translateDetails;
