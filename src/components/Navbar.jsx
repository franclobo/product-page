import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import { Basquet } from "./Basquet";

const pages = ["Collection", "Men", "Women", "About", "Contact"];

function ResponsiveAppBar() {
  const value = useContext(DataContext);
  const [cartItems] = value.cartItems;

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ flexDirection: { md: "row" } }}>
            <Typography
              variant="h1"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                fontFamily: "inter",
                fontWeight: 700,
                color: "hsl(240, 100%, 5%)",
                "&:hover": { color: "hsl(5, 85%, 63%)" },
                textDecoration: "none",
                fontSize: "24px",
              }}
            >
              sneakers
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "0",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  height: "100vh",
                  "& .MuiMenu-paper": {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    background: "hsl(0, 0%, 100%)",
                    color: "hsl(236, 13%, 42%)",
                    boxShadow: "none",
                    borderRadius: "0",
                    width: "50%",
                    height: "100vh",
                    padding: "0",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <IconButton
                    aria-label="Close"
                    onClick={handleCloseNavMenu}
                    color="inherit"
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      textTransform: "capitalize",
                      "&:hover": {
                        background: "none",
                      },
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "hsl(236, 13%, 42%)",
                        "&:hover": {
                          color: "hsl(5, 85%, 63%)",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          background: "none",
                          fontFamily: "inter",
                          fontWeight: "400",
                          textTransform: "capitalize",
                        },
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h1"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                position: "absolute",
                left: "50px",
                top: "10px",
                fontFamily: "inter",
                fontWeight: 700,
                color: "hsl(240, 100%, 5%)",
                "&:hover": { color: "hsl(5, 85%, 63%)" },
                textDecoration: "none",
                fontSize: "24px",
              }}
            >
              sneakers
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "hsl(236, 13%, 42%)",
                    display: "block",
                    "&:hover": {
                      color: "hsl(5, 85%, 63%)",
                      background: "none",
                    },
                    fontFamily: "inter",
                    fontWeight: 400,
                    textTransform: "capitalize",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <ul className="icons">
              <li className="icons__cart">
                { cartItems.length > 0 ? <span className="number">{cartItems.length}</span> : null }
                <img src={Cart} alt="cart" onClick={handleOpen}/>
                  {open ? <Basquet /> : null}
              </li>
              <li className="icons__avatar">
                <img src={Avatar} alt="avatar" />
              </li>
            </ul>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}

export default ResponsiveAppBar;
