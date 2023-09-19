import * as React from "react";
import Box from "@mui/material/Box";
import { Stack,  Typography } from "@mui/material";
import filterImg from "./assets/filter.svg";
import Tuser from "./assets/tuser.svg";
import Tshirt from "./assets/tshirt.svg";
import SideBar from "./SideBar";
import Footer from "./Footer";
import AuthNavbar from "./AuthNavbar";



const Filter = () => {
  return (
    <>
     <AuthNavbar />
    <div style={{display:'flex' , alignItems:'flex-start'}}>
     
      <SideBar />
    
      <Box px={4} py={4.5}>
        
        <Box>
          <Stack className="name-box"
            direction="row"
            justifyContent="space-between"  
          >
           
            <Stack direction="column">
              <Typography
                variant="h4"
                sx={{ fontWeight: "500", lineHeight: "2", paddingLeft: "25px" }}
              >
                Hello, Arihant
              </Typography>
              <Typography
                sx={{
                  width: "600px",
                  paddingLeft: "25px",
                  color: "rgba(0, 0, 0, 0.70)",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Typography>
            </Stack>
            <img src={filterImg} alt="filter" height={180} style={{alignSelf: "end"}}/>
          </Stack>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box className="t-user">
              <img src={Tuser} alt="users" />
              <Typography sx={{ paddingTop: "54px" }}>Total users</Typography>
            </Box>
            <Box className="t-user">
              <img src={Tshirt} alt="style" />
              <Typography sx={{ paddingTop: "54px" }}>Total Style</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
      <Footer />
    </>
  );
};

export default Filter;





// {/* <Container maxWidth="md" sx={{ mt: 20 }}>
// <TextField
// id="search"
// type="search"
// label="Search"
// // value={searchTerm}
// // onChange={handleChange}
// sx={{ width: 600 }}
// InputProps={{
// endAdornment: (
// <InputAdornment position="end">
// {/* <SearchIcon /> */}
// // </InputAdornment>
// // ),
// // }}
// // />
// // </Container> */}