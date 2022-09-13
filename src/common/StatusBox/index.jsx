import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { StatusBox } from 'Styles/Home';
const Statusbox = (props) => {
  return (
    <StatusBox sx ={{gap : "35px"}}>
        <Box>
            <Typography variant='h4' sx={{fontSize : '16px', color :'secondary.main'}}>{props.title}</Typography>
            <Typography variant='h3'  sx={{fontSize : '24.33px', color:'primary.main'}}>{props.subtitle}</Typography>
        </Box>
        <Box><img src={props.img} alt='plus sign'/></Box>
   </StatusBox>
  )
}

export default Statusbox