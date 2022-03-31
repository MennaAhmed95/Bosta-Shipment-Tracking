import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    padding: "12px 0",
    justifyContent: "space-around",
    borderBottom: "1px solid lightgray",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    padding: "0 6px",
  },
  cont: {
    border: "1px solid lightgray",
    borderRadius: "6px",
    padding: "24px 0",
    boxShadow: "none",
    overflowY: "hidden",
  },
  paper: {
    margin: "1rem 0",
    padding: "1rem",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "1px solid lightgray",
  },
  g1: {
    maxWidth: "70%",
    flex: "1 0 auto",
    ["@media (max-width: 600px)"]: {
      maxWidth: "100%",
    },
  },
  g2: {
    maxWidth: "28%",
    flex: "1 0 auto",
    ["@media (max-width: 600px)"]: {
      maxWidth: "100%",
    },
  },
  btn: {
    background: "red",
    color: "white",
    margin: ".5rem 0",
    padding: "0.5rem 3rem",
  },
}));
export default useStyles;
