import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import "./Common.css";
import "./Responsive.css"
import girlimg from './assets/girl.png'
import ourMission from './assets/ourmisson.svg'
import ourVission from './assets/ourvission.svg'
import Navbar from './Navbar';
import Footer from './Footer';


const About = () => {
  return (
    <>
        <Navbar />
        <Box>
        <Box className='about-us'>
            <Box className='responsive-box' sx={{width:'962px' , display:'flex' , alignItems:'center' , flexDirection:'column' , gap:3}}>
                <Typography variant='h3' sx={{alignSelf:'center'}} >About us</Typography>
                <Typography variant='p' sx={{textAlign:'center' , color:'rgba(0, 0, 0, 0.70)'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including </Typography>
            </Box>
        </Box>

        <Box className='dummy-text'>
            <Box className='image-girl'>
                <img src={girlimg} alt='Girl' height='auto' />
            </Box>

            <Box sx={{ width:'800px' ,display:'flex' , flexDirection:'column' , gap:3 , justifyContent:'center' , padding:'60px 0 60px 90px'   }}>
                <Typography variant='h4'>Lorem Ipsum is simply dummy text<br></br> of the printing</Typography>
                <Typography variant='p' sx={{  color:'rgba(0, 0, 0, 0.70)'}} >PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

            </Box>

        </Box>
        
        <Box sx={{display:'flex' , justifyContent:'space-between' , width:'1266px'}}>
        <Box className='our-mission'>
            <Box className='mission'>
                <Typography variant='h4' sx={{fontWeight:'600' , paddingBottom:'30px' }}>Our Mission</Typography>
                <Typography variant='p' sx={{color:'rgba(0, 0, 0, 0.70)'}}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
            </Box>

            <Box sx={{padding:'85px 0 0 100px'}}>
            <img src={ourMission} alt='our mission'  />
            </Box>

        </Box>
        <Box className='our-mission'>
        <Box className='mission'>
                <Typography variant='h4' sx={{fontWeight:'600' , paddingBottom:'30px' }}>Our Vission</Typography>
                <Typography variant='p' sx={{color:'rgba(0, 0, 0, 0.70)'}}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
            </Box>

            <Box sx={{padding:'85px 0 0 100px'}}>
            <img src={ourVission} alt='our vission'  />
            </Box>
                
         </Box>
         </Box>

         <Box sx={{display:'flex' , flexDirection:'column' , width:'1112px' , paddingTop:'72px' }}>
            <Typography variant='p' sx={{fontSize:'28px' , fontWeight:'700', paddingBottom:'16px'}}>Lorem Titles will be here</Typography>
            <Typography variant='p' sx={{color:'rgba(0, 0, 0, 0.70)'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
         </Box>

         <Box sx={{display:'flex' , flexDirection:'column' , width:'1112px' , paddingTop:'36px' }}>
            <Typography variant='p' sx={{fontSize:'28px' , fontWeight:'700', paddingBottom:'16px'}}>It is a long established fact that a reader will be distracted by </Typography>
            <Typography variant='p' sx={{color:'rgba(0, 0, 0, 0.70)'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
         </Box>

        <Box sx={{padding:'72px 0 20px 0'}}>
            <Typography variant='h5' fontWeight='500' >Our Client Speak</Typography>
        </Box>


        <Box sx={{width:'1266px' , display:'flex' , justifyContent:'space-between'}}>
            <Box className='client-box'>
                <Typography variant='p' sx={{fontSize:'24px' , fontWeight:'500' , paddingBottom:'21px'}} >Lorem Ipsum is simply dummy text</Typography>
                <Typography variant='p' sx={{width:'550px' , textAlign:'center' , color:'rgba(0, 0, 0, 0.70)'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages </Typography>
            </Box>
            <Box className='client-box'>
                <Typography variant='p' sx={{fontSize:'24px' , fontWeight:'500' , paddingBottom:'21px'}} >Lorem Ipsum is simply dummy text</Typography>
                <Typography variant='p' sx={{width:'550px' , textAlign:'center' , color:'rgba(0, 0, 0, 0.70)'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages </Typography>
            </Box>
        </Box>
        

        <Box sx={{display:'flex' , justifyContent:'space-around' , paddingTop:'32px'}}>
            <Box sx={{display:'flex', gap:2  , alignItems:'center'}}>
                <Box>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
                <Box sx={{display:'flex' , flexDirection:'column'}}>
                    <Typography variant='p' sx={{fontSize:'16px' , fontWeight:'600'}} >John Doe</Typography>
                    <Typography variant='p' sx={{fontSize:'12px' , color:"rgba(0, 0, 0, 0.70)"}} >Lorem Ipsum is simply</Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex', gap:2  , alignItems:'center'}}>
                <Box>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
                <Box sx={{display:'flex' , flexDirection:'column'}}>
                    <Typography variant='p' sx={{fontSize:'16px' , fontWeight:'600'}} >John Doe</Typography>
                    <Typography variant='p' sx={{fontSize:'12px' , color:"rgba(0, 0, 0, 0.70)"}} >Lorem Ipsum is simply</Typography>
                </Box>
            </Box>
        </Box>
        </Box>

        <Footer />
    </>
  )
}

export default About



// const [selectedId, setSelectedId] = useState(null)
 
// {items.map(item => (
//   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//     <motion.h5>{item.subtitle}</motion.h5>
//     <motion.h2>{item.title}</motion.h2>
//   </motion.div>
// ))}

// <AnimatePresence>
//   {selectedId && (
//     <motion.div layoutId={selectedId}>
//       <motion.h5>{item.subtitle}</motion.h5>
//       <motion.h2>{item.title}</motion.h2>
//       <motion.button onClick={() => setSelectedId(null)} />
//     </motion.div>
//   )}
// </AnimatePresence>


