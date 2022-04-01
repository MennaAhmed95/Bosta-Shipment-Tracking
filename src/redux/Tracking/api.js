import axios from "axios";

export const getAllTransitEventsAsync = async (trackNo) => {
  const response = await axios.get(
    `https://tracking.bosta.co/shipments/track/${trackNo}`
  );
  console.log(response.data, "from api cat");
  return response.data;
};
