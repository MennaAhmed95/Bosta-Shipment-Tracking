import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import TranslateDetails from "../../utils/translateDetails";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TrakingTable = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const TransitEvents = [
    {
      state: "TICKET_CREATED",
      timestamp: "2020-07-20T10:18:20.790Z",
    },
    {
      state: "PACKAGE_RECEIVED",
      timestamp: "2020-07-20T15:07:17.915Z",
      hub: "Mohandseen Hub",
    },
    {
      state: "NOT_YET_SHIPPED",
      timestamp: "2020-07-21T08:00:09.499Z",
    },
    {
      state: "OUT_FOR_DELIVERY",
      timestamp: "2020-07-21T08:01:35.862Z",
    },
    {
      state: "WAITING_FOR_CUSTOMER_ACTION",
      timestamp: "2020-07-21T10:17:31.663Z",
      reason: "تأجيل - العميل طلب التاجيل ليوم اخر",
    },
    {
      state: "PACKAGE_RECEIVED",
      timestamp: "2020-07-21T15:54:10.971Z",
      hub: "Mohandseen Hub",
    },
    {
      state: "NOT_YET_SHIPPED",
      timestamp: "2020-07-21T15:54:46.945Z",
    },
    {
      state: "OUT_FOR_DELIVERY",
      timestamp: "2020-07-21T15:54:47.007Z",
    },
    {
      state: "DELIVERED",
      timestamp: "2020-07-21T16:11:56.913Z",
    },
    {
      state: "DELIVERED_TO_SENDER",
      timestamp: "2020-07-21T16:11:56.966Z",
    },
  ];
  function getCurrentDate() {
    const t = new Date();
    const date = ("0" + t.getDate()).slice(-2);
    const month = ("0" + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`;
  }
  return (
    <TableContainer component={Paper} style={{ margin: "1rem 0" }}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead style={{ background: "#f5f5f5" }}>
          <TableRow>
            <TableCell style={{ color: "gray" }}>{t("hub")}</TableCell>
            <TableCell style={{ color: "gray" }}>{t("date")}</TableCell>
            <TableCell style={{ color: "gray" }}>{t("time")}</TableCell>
            <TableCell style={{ color: "gray" }}>{t("details")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TransitEvents.map((row) => {
            return (
              <TableRow key={row.timestamp}>
                <TableCell>{row.hub}</TableCell>
                <TableCell>{getCurrentDate(row.timestamp)}</TableCell>
                <TableCell>
                  {new Date(row.timestamp).toLocaleTimeString()}
                </TableCell>
                <TableCell>
                  {TranslateDetails(row.state)}
                  <br />
                  {row.reason}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TrakingTable;
