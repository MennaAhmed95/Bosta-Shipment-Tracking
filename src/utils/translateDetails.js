import { useTranslation } from "react-i18next";

const TranslateDetails = (detail) => {
  const { t } = useTranslation();
  let state;
  switch (detail) {
    case "TICKET_CREATED":
      state = t("shipmentCreated");
      break;
    case "PACKAGE_RECEIVED":
      state = t("deliveredDone");
      break;
    case "NOT_YET_SHIPPED":
      state = t("notDelivered");
      break;
    case "OUT_FOR_DELIVERY":
      state = t("outForDelivery");
      break;
    case "WAITING_FOR_CUSTOMER_ACTION":
      state = t("waitingForCustomerAction");
      break;
    case "DELIVERED":
      state = t("delivered");
      break;
    case "DELIVERED_TO_SENDER":
      state = t("deliveredToSender");
      break;
    case "RECEIVED_DELIVERY_LOCATION":
      state = t("deliveryAddress");
      break;
    case "IN_TRANSIT":
      state = t("inTransit");
      break;

    default:
      break;
  }
  return state;
};

export default TranslateDetails;
