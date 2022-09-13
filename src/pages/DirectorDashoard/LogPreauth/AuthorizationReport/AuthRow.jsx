import React from 'react'
import {Box, Typography, Button } from "@mui/material"; 
const AuthRow = () => {
  return (
        <Box>
        <Box  display='flex'
        flexWrap= 'wrap'
        gap='20px'
        //  minWidth ='320px'
            justifyContent='space-between'>
            <Typography minWidth= '200px'
                variant='h3' 
                fontSize='20px'
                color='primary.main' 
            
            >Gynisus Prior Authorization Report</Typography>
            <Button variant='contained' fontSize='14px' minWidth='144px'>Export to CSV</Button>
        </Box>
        <Box dislay='flex' flexDirection='column' flexWrap='wrap' mt='49px' 
        //  minWidth ='320px'
         >
            <Box display='flex' flexDirection='row' justifyContent='space-between' mb='21px'>
                <Typography 
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main' 
                
                >Examination Dates:</Typography>
                <Typography 
                variant='h3' 
                fontSize='20px'
                color='secondary.main' 
            
            >May 8- 13</Typography>
            </Box>
            <Box display='flex' flexDirection='row'   justifyContent='space-between'  mb='21px'>
                <Typography 
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main' 
                
                >Insured Name:</Typography>
                <Typography 
                variant='h3' 
                fontSize='20px'
                color='secondary.main' 
            
            >Smith, Jessica</Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between'  mb='21px'>
                <Typography 
                    variant='h3' 
                    fontSize='20px'
                    color='secondary.main' 
                
                >MR No:</Typography>
                <Typography 
                variant='h3' 
                fontSize='20px'
                color='secondary.main' 
            
            >5500126</Typography>
            </Box>
        </Box>
       </Box>
  )
}

export default AuthRow