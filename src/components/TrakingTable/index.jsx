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
import translateDetails from "../../utils/translateDetails";
import getCurrentDate from "../../utils/getCurrentDate";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TrakingTable = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { TransitEvents } = useSelector((state) => state.data);
  console.log(TransitEvents);
  debugger;
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
        {TransitEvents?.length > 0 ? (
          <TableBody>
            {TransitEvents?.map((row, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{row?.hub ? row?.hub : ""}</TableCell>
                  <TableCell>{getCurrentDate(row?.timestamp)}</TableCell>
                  <TableCell>
                    {row?.timestamp
                      ? new Date(row?.timestamp).toLocaleTimeString()
                      : ""}
                  </TableCell>
                  <TableCell>
                    {t(translateDetails(row?.state))}
                    <br />
                    {row?.reason}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          ""
        )}
      </Table>
    </TableContainer>
  );
};

export default TrakingTable;
