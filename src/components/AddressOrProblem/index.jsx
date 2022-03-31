import useStyles from "../../containers/TrackingShipment/styleTracking";
import { Paper, Button, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
const AddressOrProblem = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Grid item sm={6} md={3} className={classes.g2}>
      <h3>{t("delivery")}</h3>
      <Paper className={classes.paper}>
        امبابة شارع طلعت حرب بجوار البرنس منزل 17
      </Paper>
      <Paper
        className={classes.paper}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <img src="/assets/img.png" alt="img" width="100" />
        <div>
          <h3>{t("problemWithShipment")}</h3>
          <Button variant="contained" className={classes.btn}>
            {t("reportProblem")}
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default AddressOrProblem;
