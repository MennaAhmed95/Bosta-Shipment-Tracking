const chosseColor = (state) => {
  let color;
  if (state === "DELIVERED") {
    color = "green";
  } else if (state === "DELIVERED_TO_SENDER") {
    color = "orange";
  } else color = "red";
  return color;
};

export default chosseColor;
