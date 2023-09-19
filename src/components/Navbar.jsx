import {
  AppBar,
  Toolbar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
// import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <AppBar   position="relative" sx={{ height: "80px", background: "black" }}>
      <StyledToolBar >
        <List className="list" sx={{   margin: '16px 0 0 300px'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" onClick={() => navigate("/home")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/blog")}  >
                <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/about")} >
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/contact")}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>

        <Button sx={{color:'white' , margin:'16px 0 0 130px' }}><SearchIcon /> </Button>

        <Box className="button responsive-btn" >
          <Button  sx={{ color: "black" , background:'transparent' }} onClick={() => navigate("/login")}>Log in</Button>
          <Button className="btn"  onClick={() => navigate("/signup")}>Sign up</Button>
        </Box>
      </StyledToolBar>
    </AppBar>

  );
};

export default Navbar;
