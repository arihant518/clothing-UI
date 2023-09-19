import React from "react";
import {  Typography, Box, Button } from "@mui/material";
import Pinkimg from './assets/pink.png'
import Navbar from "./Navbar";
import Footer from "./Footer";


const CardData = () => {
  return (
    <>
         <Box className='img'>
            <Box sx={{display:'flex' , flexDirection:'column',}}>
                <img src={Pinkimg} alt='denim' width='350px' height='219px' />
                <Typography variant='p' className='font'>Lorem Ipsum is simply dummy<br></br> text of the printing</Typography>
                <Typography variant='p' sx={{color:'grey',fontSize:'12px' , lineHeight:'48px'}}>Lorem Ipsum is simply dummy text of the printing</Typography>
                <Button sx={{justifySelf:'start' , width:'152px' , border:'1px solid black' , color:'black'}}>Read more</Button>
            </Box>
          </Box>
    </>
  );
};

const Home = () => {
  return (
    <>
    <Navbar/>
    <Box>
      
      <Box sx={{display:'flex' , justifyContent:'space-around', margin:'50px 0'}}>
        <CardData/> 
        <CardData/> 
        <CardData/> 
      </Box>
      <Box sx={{display:'flex' , justifyContent:'space-around'}}>
        <CardData/> 
        <CardData/> 
        <CardData/> 
      </Box>
      </Box>
      <Footer />
      </>
  );
};

export default Home;
