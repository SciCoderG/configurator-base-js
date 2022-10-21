import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Slide, useScrollTrigger } from "@mui/material";
import styled from "@emotion/styled";
import { navItems } from "../../Data/AppData";

const appName = "SciCode";
const drawerWidth = 240;
const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Displays the drawer version of the menu if the screen is too small
   */
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Button href="/" sx={{ width: "100%" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          {appName}
        </Typography>
      </Button>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.content} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.content} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <HideOnScroll>
        <AppBar enableColorOnDark>
          <Toolbar>
            {/* Display small screen menu button, which opens the drawer if clicked */}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "primary.contrastText",
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* Otherwise display the default menu  */}
            <Link
              href="/"
              sx={{
                flexGrow: 1,
                display: { sm: "block", textDecoration: "none" },
                color: "primary.contrastText",
              }}
            >
              <Typography variant="h6">{appName}</Typography>
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button href={item.link} key={item.content} variant="">
                  {item.content}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Offset />
      <Offset />

      {/** Mobile App bar */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
