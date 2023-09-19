import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SetPassimg from "../assets/setpass.svg";

const SetPass = () => {
  return (
    <Stack direction="row" height="100vh" sx={{ alignItems: "center" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Set new password
          </Typography>
          <p style={{ color: "grey" }}>Must be at atleast 6 character </p>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: "23px",
              width: "336px",
              display: "flex",
              height: "46px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
            size="small"
          />
        </Box>
        <Box sx={{ margin: "20px 0 0 20px" }}>
          <Button
            variant="contained"
            sx={{ background: "black", width: "95%" }}
          >
            Continue
          </Button>
        </Box>
      </Box>

      <img
        src={SetPassimg}
        style={{ alignSelf: "end", marginLeft: "150px" }}
        alt="Set password"
      />
    </Stack>
  );
};

export default SetPass;
