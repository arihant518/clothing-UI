import { Article, Home } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./Common.css";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const SideBar = ({ check, change }) => {


  const navigate = useNavigate();
  return (
    <Box
      className="sidebar"
      flex={1}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box >
        <List sx={{width:'175px'}} >
          <ListItem  className="item"  disablePadding>
            <ListItemButton  component="a" href="#home" onClick={() => navigate("/filter")} >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText  primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem   className="item"  disablePadding>
            <ListItemButton component="a" href="#simple-list" onClick={() => navigate("/history")} >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Style" />
            </ListItemButton>
          </ListItem>
          <ListItem   className="item"  disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
          <ListItem   className="item"  disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{color:"red"}} className="item" disablePadding>
            <ListItemButton component="a" href="#simple-list" onClick={() => navigate("/login")} >
              <ListItemText primary="Logout" ></ListItemText>
              <ListItemIcon sx={{color:"red"}}>
                <LogoutIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;







