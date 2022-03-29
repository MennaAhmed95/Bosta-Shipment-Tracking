import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    minHeight: "64px",
  },
  btn: {
    margin: ".5rem",
  },
  font: {
    fontWeight: "bold",
    fontSize: "large",
  },
  font2: {
    fontFamily: "Nunito, Helvetica, Arial, Lucida, sans-serif",
    // fontSize: "24px",
  },
  disp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem 0",
  },
  search: {
    height: "  34px",
    background: "  #ff0000",
    border: "  none",
    width: "  34px",
    borderRadius: "  50px",
    color: "  #fff",
    fontSize: "  14px",
    padding: "0.5rem",
    marginLeft: "0.5rem",
  },
  containImg: {
    width: "100%",
    zIndex: "0",
    overflow: "hidden",
  },
  mainImage: {
    background: "rgba(0,0,0,0.9)",
    minHeight: "590px",
    clipPath: "polygon(100% 0%, 100% 100%, 50% 90%, 100% 100%, 0 85%, 0 0)",
    width: " 100%",
    height: " 100%",
    objectFit: "cover",
  },
}));

export const languages = [
  {
    name: "Eng",
    dir: "ltr",
    code: "en",
  },
  {
    name: "عربي",
    code: "ar",
    dir: "rtl",
    textAlign: "right",
  },
];
