import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import DrawerComp from "../Drower";
import StyledMenu from "../StyledMenu";
import { KeyboardArrowDown, Search } from "@material-ui/icons";
import { useStyles, languages } from "./headerStyle";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { getTransitEvent } from "../../redux/Tracking/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  const currentLanguageCode = localStorage.i18nextLng || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [langCode, setLangCode] = useState(currentLanguageCode);
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [track, setTrack] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const handleSearch = (track) => {
    console.log(track);
    dispatch(getTransitEvent(track));
    history.push("/trackingShipment");
  };
  const btnTracking = (
    <>
      <Button
        id="customized-button"
        aria-controls={open ? "customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        className={classes.font}
      >
        {t("track")}
      </Button>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          "aria-labelledby": "customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <h3
          style={{ color: "black", margin: ".7rem 0" }}
          className={classes.font2}
        >
          {t("track2")}
        </h3>
        <p style={{ color: "#5e5e5e" }} className={classes.font2}>
          {t("writeNoTracking")}
        </p>
        <Box
          className={`${classes.disp}`}
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ width: "25ch" }}>
            <OutlinedInput
              placeholder={t("No")}
              onChange={(e) => setTrack(e.target.value)}
            />
          </FormControl>
          <div
            className={`${classes.search} ${classes.disp}`}
            onClick={() => handleSearch(track)}
          >
            <Search style={{ color: "white" }} />
          </div>
        </Box>
      </StyledMenu>
    </>
  );
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, langCode, t]);
  const handleLanguageChange = (e) => {
    const selectedLang = e === "1" ? "en" : "ar";
    i18next.changeLanguage(selectedLang);
    setLangCode(selectedLang);
    window.location.reload();
  };
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar className={`${classes.flex} container`}>
          <img
            src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg"
            alt="logo"
            onClick={() => history.push("/")}
          />

          {isMatch ? (
            <DrawerComp btnTracking={btnTracking} />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  label={t("home")}
                  className={classes.font}
                  value={0}
                  onClick={() => history.push("/")}
                />
                <Tab label={t("price")} className={classes.font} value={1} />
                <Tab label={t("contact")} className={classes.font} value={2} />
                <Tab label={t("careers")} className={classes.font} value={3} />
              </Tabs>
              <div>
                {btnTracking}
                <Button
                  className={classes.btn + " " + classes.font}
                  sx={{ marginLeft: "10px" }}
                >
                  {t("singin")}
                </Button>
                {localStorage.i18nextLng !== "en" ? (
                  <Button
                    className={classes.btn + " " + classes.font}
                    style={{ color: "red" }}
                    sx={{ marginLeft: "auto" }}
                    onClick={() => handleLanguageChange("1")}
                  >
                    Eng
                  </Button>
                ) : (
                  <Button
                    className={classes.btn + " " + classes.font}
                    style={{ color: "red" }}
                    sx={{ marginLeft: "auto" }}
                    onClick={() => handleLanguageChange()}
                  >
                    عربي
                  </Button>
                )}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
