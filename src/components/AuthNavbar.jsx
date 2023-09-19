import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    styled,
    Avatar,
  } from "@mui/material";
  import "./Navbar.css";
  import { useNavigate } from "react-router-dom";
  
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  
  const AuthNavbar = () => {
  
    const navigate = useNavigate();
  
    return (
      <AppBar position="relative" sx={{ height: "80px", background: "black" }}>
        <StyledToolBar>
          <List className="list" sx={{   margin: '16px 0 0 250px'}}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/home")}>
                <ListItemText primary="Home"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton  onClick={() => navigate("/filter")}>
                  <ListItemText primary="Search,filter and export"  />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/history")} >
                <ListItemText primary="export by style number"  />
              </ListItemButton>
            </ListItem>
          </List>   
  
        
          <Avatar alt="Remy Sharp" src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
        </StyledToolBar>
      </AppBar>
  
    );
  };
  
  export default AuthNavbar;
  