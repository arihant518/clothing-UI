import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Signupimg from "../assets/login.svg";

const SignUp = () => {

  const [data, setData] = useState({
    organisationName:"",
    email: "",
    password: "",
    confirmPass:"",
    workspace:"",
  });


  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Stack direction="row" height="100vh" sx={{ alignItems: "center" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
            marginBottom: "30px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Sign Up
          </Typography>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
            Soluta quia architecto debitis.
          </p>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: "20px",
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
            label="Organisation name"
            variant="outlined"
            size="small"
            name='organisationName'
            value={data.organisationName}
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            name='email'
            value={data.email}
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            name='password'
            value={data.password}
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            size="small"
            name='confirmPass'
            value={data.confirmPass}
            onChange={handleInput}
          />
          <TextField
            id="outlined-basic"
            label="Workspace URL"
            variant="outlined"
            size="small"
            name='workspace'
            value={data.workspace}
            onChange={handleInput}
          />
        </Box>
        <Box sx={{ margin: "20px 0 0 150px" }}>
          <Button
            variant="contained"
            sx={{ background: "black" }}
          >
            Login
          </Button>
          
        </Box>
      </Box>

      <img src={Signupimg} style={{ alignSelf: "end", marginLeft: "150px" }} alt="Login" />
    </Stack>
  )
}

export default SignUp

