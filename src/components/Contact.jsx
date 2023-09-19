import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./Common.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import NotifBox from "./assets/notifbox.svg";
import MsgBox from "./assets/msgbox.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="contact-box">
        <Box className="contact-info">
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Contact Info
          </Typography>
          <Typography variant="p" color="grey" sx={{ fontSize: "15px" }}>
            Lorem Ipsum is simply dummy text of the<br></br> printing and
            typesetting industry.<br></br> Lorem Ipsum has been the industry's
          </Typography>

          <Box className="company-name">
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                padding: "36px 0 0 0",
              }}
            >
              Company name
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: "36px 0 0 0",
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <EmailIcon />{" "}
                <Typography variant="p">example@gmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <PhoneIcon />{" "}
                <Typography variant="p">+91 1234567890</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocationOnIcon />{" "}
                <Typography variant="p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, padding: "160px 0 0 0" }}>
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
            <ShareIcon />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "50px 10px 0 40px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "600" }}>
              Contact Us
            </Typography>
            <Box>
              <img src={NotifBox} alt="notification" />
              <img src={MsgBox} alt="message" />
            </Box>
          </Box>

          <Box sx={{ padding: "80px 0 0 25px" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: "23px",
                  width: "336px",
                  display: "flex",
                  height: "46px",
                  width: "80%",
                  lineHeight: "3",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                name="name"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                name="email"
                type="email"
              />
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size="small"
                name="phone"
                type="phone"
              />
              <TextField
                id="full-width"
                label="Message"
                variant="outlined"
                size="extraLarge"
                name="message"
                fullWidth
              />
              <Button className="contact-btn" sx={{ background: "black", color: "#EDE2C5" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
