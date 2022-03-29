import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

const DrawerComp = ({ btnTracking }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t } = useTranslation();
  const pages = [t("home"), t("price"), t("contact"), t("careers")];
  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem button>
              <ListItemIcon key={index}>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItem>
          ))}
          <ListItem button>{btnTracking}</ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
