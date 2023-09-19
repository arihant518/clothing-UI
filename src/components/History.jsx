// import { Box } from '@mui/material'
import React, { useState } from "react";
import "./Common.css";
import TextField from "@mui/material/TextField";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AuthNavbar from "./AuthNavbar";
import SideBar from "./SideBar";
import { Box, Button, Typography } from "@mui/material";
import Footer from "./Footer";

const History = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectDate, setSelectDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleNewDateChange = (date) => {
    setSelectDate(date);
  };
  return (
    <>
      <AuthNavbar />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <SideBar />

        <Box className="history-box" px={4} py={4.5}>
          <Typography variant="h6">Download export history</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="date-picker"
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="date-picker"
              label="Select Date"
              value={selectDate}
              onChange={handleNewDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            sx={{
              background: "black !important",
              width: "130px",
              alignSelf: "end",
            }}
            variant="contained"
          >
            Download
          </Button>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default History;
