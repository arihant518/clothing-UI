import { Box, Typography } from '@mui/material'
import React from 'react'
import './Common.css';
import Pinkimg from './assets/pink.png'
import denim from './assets/denim.png'
import cloth from './assets/cloth.png'
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  return (
    <div>
    <Navbar />
    <Box className='Blog'>
        <Box className="image">
            <Box className='image-container'>
                <img src={Pinkimg} alt='pink' />
            </Box>
        </Box>

        <Box className='blog-box'>
            <Box className='printing'>
            <Typography variant='p'>May 29, 2023</Typography>
            <Typography variant='p' sx={{fontWeight: 700 , lineHeight:'6'}}>Lorem Ipsum is simply dummy text of the printing</Typography>
            <Typography variant='p' sx={{width:'773px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </Box>

            <Box sx={{width:'773px' ,padding: '36px 0 0 83px'}}>
            <Typography>Written by John Doe</Typography>

        </Box>
        </Box>

        <Box className='img'>
            <Box sx={{display:'flex' , flexDirection:'column',alignItems:'center'}}>
                <img src={denim} alt='denim' width='320px' />
                <Typography variant='p' className='font'>Lorem Ipsum is simply dummy<br></br> text of the printing</Typography>
            </Box>
            <Box sx={{display:'flex' , flexDirection:'column',alignItems:'center'}}>
                <img src={cloth} alt='denim' width='320px' />
                <Typography variant='p' className='font'>Lorem Ipsum is simply dummy<br></br> text of the printing</Typography>
            </Box>
            <Box sx={{display:'flex' , flexDirection:'column',alignItems:'center'}}>
                <img src={denim} alt='denim' width='320px' />
                <Typography variant='p' className='font'>Lorem Ipsum is simply dummy<br></br> text of the printing</Typography>
            </Box>
            
            
        </Box>
    </Box>
    <Footer />
    </div>
  )
}

export default Blog
