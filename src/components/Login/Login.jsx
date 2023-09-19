import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Loginimg from "../assets/login.svg";
import { NavLink, useNavigate } from "react-router-dom";
import formValidation from "../Validation";
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const Navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors , setErrors] = useState({});
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    setErrors(formValidation(values));
    if (
      Object.keys(errors).length === 0 &&
      values.email !== "" &&
      values.password !== ""
    ) {
     Navigate("/filter")
     toast.success('welcome')
    
    }
  };

 
  return (
    <Stack direction="row" height="100vh" sx={{ alignItems: "center" }} >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h4">Log in</Typography>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
            Soluta quia architecto debitis{" "}
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
            name="email"
            value={values.email}
            onChange={handleInput}
          />
          {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
            )}
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            name="password"
            value={values.password}
            onChange={handleInput}
            type="password"
          />
           {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.password}
              </p>
            )}
        </Box>

        <span style={{marginLeft:'24px'}}>Don't have an account?</span><NavLink to={"/SignUp"} style={{color:"blue"}} > Register</NavLink>
        <Box sx={{ margin: "30px 0 0 130px" }}>
          <Button variant="contained" sx={{ background: "black" }} onClick={handleSubmit} >
            Continue
          </Button>
          <ToastContainer />
        </Box>
        
      </Box>

      <img src={Loginimg} style={{ alignSelf: "end", marginLeft: "150px" }} alt="Login" />
    </Stack>
  );
};

export default Login;
