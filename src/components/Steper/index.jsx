import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Save, LocalShipping, Check } from "@material-ui/icons";
import StepConnector from "@material-ui/core/StepConnector";
import { useTranslation } from "react-i18next";

let color = localStorage.getItem("color");
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: color,
    },
  },
  completed: {
    "& $line": {
      borderColor: color,
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: color,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: color,
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed, icon } = props;
  console.log(props);
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : icon === 3 ? (
        <LocalShipping style={{ transform: "rotateY(180deg)" }} />
      ) : icon === 4 ? (
        <Save />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

function getSteps(t) {
  return [
    t("TICKET_CREATED"),
    t("shipmentHasBeenReceived"),
    t("OUT_FOR_DELIVERY"),
    t("PACKAGE_RECEIVED"),
  ];
}

export default function Steper({ state }) {
  let activeStep = 2;
  const { t } = useTranslation();
  const steps = getSteps(t);

  if (state === "DELIVERED") {
    activeStep = 4;
  }
  if (state === "DELIVERED_TO_SENDER") {
    activeStep = 2;
  }
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<QontoConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
