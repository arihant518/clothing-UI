import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Forgotimg from "../assets/forgot.svg";

const ForgotPass = () => {
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
            Forgot Password?
          </Typography>
          <p style={{ color: "grey" }}>
            No worries, we’ll send you reset<br></br> instructions.
          </p>
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
            label="Email"
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
          <Button
            variant="text"
            sx={{ color: "black", width: "95%", marginTop: "20px" }}
          >
            Back to log in
          </Button>
        </Box>
      </Box>

      <img src={Forgotimg} style={{ alignSelf: "end", marginLeft: "150px" }} alt="Forgot password" />
    </Stack>
  );
};

export default ForgotPass;
