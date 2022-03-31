import { Grid, TableContainer } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Steper from "../../components/Steper";
import useStyles from "./styleTracking";
import TrakingTable from "../../components/TrakingTable";
import AddressOrProblem from "../../components/AddressOrProblem";

const TrackingPage = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div
      style={{ marginTop: "2rem", width: "80%", padding: 0 }}
      className="container"
    >
      <TableContainer className={classes.cont}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div>{t("No")}</div>
            <div>display</div>
          </div>
          <div className={classes.col}>
            <div> {t("latestUpdate")}</div>
            <div>display</div>
          </div>
          <div className={classes.col}>
            <div> {t("merchantName")}</div>
            <div>SOUQ.COM</div>
          </div>
          <div className={classes.col}>
            <div> {t("deliveryDateWithin")}</div>
            <div>display</div>
          </div>
        </div>
        <Steper />
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
