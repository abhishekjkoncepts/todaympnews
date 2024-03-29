import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

// IMAGES
import AjKaSamachar from "../../assets/images/Header/ajkasam.png";

import "./Header.css";

const buttonHoverStyle = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const drawerWidth = 240;
// eslint-disable-next-line no-sparse-arrays
const navItems = [
  {
    to: "/breaking-news",
    name: "ब्रेकिंग न्यूज",
  },
  {
    to: "/elections",
    name: "चुनाव 2024",
  },
  {
    to: "/sports",
    name: "स्पोर्ट्स",
  },
  {
    to: "/education",
    name: "एजुकेशन",
  },
  ,
  {
    to: "/technology",
    name: "टेक्नोलॉजी",
  },
  {
    to: "/entertainment",
    name: "मनोरंजन",
  },
  {
    to: "/health",
    name: "हेल्थ",
  },
];

function Header(props) {
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#011e29", height: "100%" }}
    >
      <Box
        component="img"
        src={AjKaSamachar}
        sx={{
          width: {
            xs: "90px",
            sm: "90px",
            md: "110px",
            lg: "110px",
          },
          height: {
            xs: "40px",
            sm: "40px",
            md: "50px",
            lg: "50px",
          },
          marginLeft: {
            xs: "10px",
            sm: "10px",
            md: "40px",
            lg: "40px",
          },
          marginTop: {
            xs: "5px",
            sm: "5px",
            // md: "40px",
            // lg: "40px",
          },
          marginBottom: {
            xs: "5px",
            sm: "5px",
            // md: "40px",
            // lg: "40px",
          },
        }}
      />
      <Divider sx={{ backgroundColor: "#fff" }} />
      <List>
        {navItems.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => {
                  navigate(item?.to);
                }}
              >
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontFamily: " 'Mukta', sans-serif",
                      fontWeight: "700",
                      fontSize: "20px",
                      color: "#fff",
                    }}
                  >
                    {item?.name}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "#011e29" }}
        // style={{ backgroundColor: "#05445c" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to={"/"}
            style={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "#fff",
              ...buttonHoverStyle,
            }}
          >
            {/* <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: "25px", sm: "25px", md: "30px", lg: "30px" },
                fontFamily: "'Mukta', sans-serif",
                fontWeight: "600",
                marginLeft: { xs: "65px", sm: "65px", md: "43px", lg: "43px" },
              }}
            >
              आज का समाचार
            </Typography> */}
            <Box
              component="img"
              src={AjKaSamachar}
              sx={{
                width: {
                  xs: "100px",
                  sm: "100px",
                  md: "110px",
                  lg: "110px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "50px",
                  lg: "50px",
                },
                marginLeft: {
                  xs: "80px",
                  sm: "80px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            />
          </Link>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginRight: "35px" }}
          >
            {navItems.map(
              (item, index) =>
                index < 8 && (
                  <Button
                    key={index}
                    sx={{
                      color: "#fff",
                      fontSize: "17px",
                      fontFamily: " 'Mukta', sans-serif",
                      //  fontFamily: "Poppins",
                      fontWeight: "400",
                      ...buttonHoverStyle,
                    }}
                    onClick={() => {
                      navigate(item?.to);
                    }}
                  >
                    {item?.name}
                  </Button>
                )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
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
      </nav>
    </Box>
  );
}

export default Header;
