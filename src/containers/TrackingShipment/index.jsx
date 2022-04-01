import { Grid, TableContainer } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Steper from "../../components/Steper";
import useStyles from "./styleTracking";
import TrakingTable from "../../components/TrakingTable";
import AddressOrProblem from "../../components/AddressOrProblem";
import { useSelector } from "react-redux";
import getCurrentDate from "./../../utils/getCurrentDate";
import translateDetails from "./../../utils/translateDetails";
import chosseColor from "./../../utils/chooseColor";

const TrackingPage = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    TrackingNumber,
    PromisedDate,
    CurrentStatus: { timestamp, state },
  } = useSelector((state) => state.data);
  let color = chosseColor(state);
  localStorage.setItem("color", color);
  return (
    <div
      style={{ marginTop: "2rem", width: "80%", padding: 0 }}
      className="container"
    >
      <TableContainer className={classes.cont}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div>
              {t("No")}:{TrackingNumber}
            </div>
            <h3 style={{ color: chosseColor(state) }}>
              {t(translateDetails(state))}
            </h3>
          </div>
          <div className={classes.col}>
            <div> {t("latestUpdate")}</div>
            <div>{getCurrentDate(timestamp)}</div>
          </div>
          <div className={classes.col}>
            <div> {t("merchantName")}</div>
            <div>SOUQ.COM</div>
          </div>
          <div className={classes.col}>
            <div> {t("deliveryDateWithin")}</div>
            <div>{getCurrentDate(PromisedDate)}</div>
          </div>
        </div>
        <Steper state={state} />
      </TableContainer>
      <div style={{ height: "2.5rem" }}></div>
      <TableContainer>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          style={{ margin: 0, width: "100%" }}
        >
          <Grid item sm={12} md={8} className={classes.g1}>
            <h3>{t("trackingDetails")}</h3>
            <TrakingTable />
          </Grid>
          <AddressOrProblem />
        </Grid>
      </TableContainer>
    </div>
  );
};

export default TrackingPage;
