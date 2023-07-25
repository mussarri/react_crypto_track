import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { setMode } from "../../redux/themeSlice";
import { useDispatch } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AccountCircle } from "@mui/icons-material";

function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{
        color: theme.palette.grey[800],
        background: theme.palette.grey[50],
        boxShadow: theme.shadows[3],
        padding: "5px 20px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CurrencyBitcoinIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Crypto Tracker
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              position: "absolute",
              right: 0,
            }}
          >
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
            
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>My portfolio</MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
