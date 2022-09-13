import React from 'react'
import { Box, Typography, Button } from "@mui/material"; 
const AuthRow1 = (props) => {
  return (
    <Box mt='32px'>   
        <Box dislay='flex' flexDirection='column' >
             <Box display='flex' flexDirection='row' justifyContent='space-between' mb='21px'  >
                <Typography 
                    minWidth='200px'
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main' 
                    sx={{textDecoration:'outlined'}}         
                >{props.title1}</Typography>
                <Typography 
                    minWidth='200px'
                    variant='h3' 
                    fontSize='20px'
                    color='primary.main'
                    sx={{Decoration:'outlined'}}             
                    >{props.text1}</Typography>
            </Box>
             <Box display='flex' flexDirection='row' justifyContent='space-between'  mb='21px' >
                  <Typography 
                    minWidth='200px'
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main'>
                    {props.title2}
                  </Typography>
                  <Typography 
                    minWidth='100px'
                    variant='h3' 
                    fontSize='20px'
                    color= { (props.Approved ==='Approved')? '#33C70E': '#ED0006'}
                   
                    >
                    {props.Approved}
                    {props.decline}
                  </Typography>
                  {/* <Typography 
                    minWidth='100px'
                    variant='h3' 
                    fontSize='20px'
                    color= '#ED0006'>
                    {props.declined}
                  </Typography> */}
            </Box>
             <Box display='flex' flexDirection='column'   mb='21px'>
               <Typography mb='21px'
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main' 
                    >
                    {props.title3}
                </Typography>
                <Typography 
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main' 
                >
                 <Box color='secondary.light' spacing={2}>
                    <li> {props.item1}</li>
                    <li>{props.item2}</li>
                </Box>
                </Typography>
            </Box>
            <Box mb='21px' display='flex'  gap='10px' >
               <Box>
                <Button variant="contained"sx={{ backgroundColor:'#33C70E'}} width='76px'>
                    Accept
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" width='76px' sx={{ backgroundColor:"#D32F2F"}}>
                    Decline
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" width='76px' sx={{ backgroundColor:"#FBBC04"}}>
                    Revised
                  </Button>
                </Box>  
            </Box>
        </Box>
     </Box>
  )
}

export default AuthRow1