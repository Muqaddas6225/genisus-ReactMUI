import React from 'react'
import { Container, Avatar,Typography} from '@mui/material';
import { Box } from '@mui/system';
import {useNavigate} from 'react-router-dom';

// custom styling
import './header.scss';


//images
import { profilePic } from 'assets/images';

import { CustomizedButton } from 'Styles/Home';

const Header = () => {
  const navigate = useNavigate()
  return (
   <section className='headerSection'>
    <Container maxWidth= '1290px '>
      <Box  className= 'headerBox'
         sx={{
            display : 'flex',
            flexDirection: { lg:'row' , md: 'column', xs: 'column'},
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems : 'center',
            backgroundColor : 'primary.main',
         }}
        > 
          <Box  className ="userProfile"
            sx={{  
              flexDirection: { lg:'row' , md: 'column', xs: 'column'},
          }}>
                <Avatar
                alt="Remy Sharp"
                src={profilePic}
                // sx={{ width: 188, height: 188 }}
              />
                <Box
                sx={{
                  display : 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign : 'center'
                }}
                >  
                    <Typography variant='h3' 
                    sx={{
                      lineHeight : 1.5,
                      color: 'white',
                    }}
                    > Welcome Jessica Smith </Typography>
                    <Typography variant='h4' 
                      sx={{
                      lineHeight : 1,
                      color: 'white',
                    }}
                      >Actuarial Service Director </Typography>
                    
               </Box>

          </Box>
           
           <Box 
             sx={{
              mt : { lg : 12, md: 8, sm : 5},
              mb : 1,
              textAlign : 'center'
             }}
           >
           <CustomizedButton  variant="contained" size = 'large' onClick={()=>navigate('/authorization')}>Log a Preauth</CustomizedButton>
           <CustomizedButton  variant="contained" size = 'large'  onClick={()=>navigate('/viewPreauth')}> View all Preauth</CustomizedButton>
          
            </Box>
        </Box>
    </Container>
   </section>
  )
}

export default Header