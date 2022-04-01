const chosseColor = (state) => {
  let color;
  if (state === "DELIVERED") {
    color = "#1ac45e";
  } else if (state === "DELIVERED_TO_SENDER") {
    color = "orange";
  } else color = "red";
  return color;
};

export default chosseColor;
