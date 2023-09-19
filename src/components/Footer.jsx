import { Box, Button, Typography } from "@mui/material";
import React from "react";
import fbimg from "./assets/social (3).svg";
import telimg from "./assets/social (2).svg";
import instaimg from "./assets/social (1).svg";
import twitterimg from "./assets/social.svg";

const Footer = () => {
  return (
    <Box className="footer" sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "40px 20px" }}>
      <Box sx={{ width: "300px" }}>
        <Typography variant="body1" color="white">
          High level experience in web design and development knowledge, producing quality work.
        </Typography>
        <hr style={{ margin: "20px 0", borderColor: "rgba(255, 255, 255, 0.1)" }} />
        <Typography variant="body1" color="white">
          &copy; All Right Reserved
        </Typography>
      </Box>
      <Box sx={{ width: "170px" }}>
          <Typography variant="h6" color="white">
            Follow us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <img src={fbimg} alt="Login" />
            <img src={telimg} alt="Login" />
            <img src={instaimg} alt="Login" />
            <img src={twitterimg} alt="Login" />
          </Box>
          <Typography variant="h6" color="white">
            Call us<br></br> +1 800 854-36-80
          </Typography>
        </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
        <Typography variant="h6" color="white">
          Products
        </Typography>
        <Button sx={{ color: "white", textTransform: "none" }}>Landing page</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Popup builder</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Web design</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Content</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Integration</Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
        <Typography variant="h6" color="white">
          Use cases
        </Typography>
        <Button sx={{ color: "white", textTransform: "none" }}>Web Designer</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Marketers</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Small Business</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Website Builder</Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
        <Typography variant="h6" color="white">
          Company
        </Typography>
        <Button sx={{ color: "white", textTransform: "none" }}>About Us</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Careers</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>FAQs</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Teams</Button>
        <Button sx={{ color: "white", textTransform: "none" }}>Contact Us</Button>
      </Box>
    </Box>
  );
};

export default Footer;





