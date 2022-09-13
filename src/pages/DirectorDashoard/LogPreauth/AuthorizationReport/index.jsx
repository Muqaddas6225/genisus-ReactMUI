import React from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Container,Box } from "@mui/material"; 
import AuthRow1 from './authRow1';
import AuthRow from './AuthRow';

const AuthorizationReport = () => {
  return (
    <Box pt='21px' pb='55px' sx={{margin:'auto', maxWidth:'850px',marginTop:'30px', marginBottom:'100px'}}>
     <Paper sx={{ width: "100%"}}>
        <Container >
          <TableContainer maxWidth='850px' >
             <Table stickyHeader aria-label="sticky table" sx={{overflow: 'scroll', minWidth: '300px' }}>
               <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell colSpan={12} >
                       <AuthRow/>
                    </TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell colSpan={12} >
                        <AuthRow1
                            title1 ='Requsted Test:'
                            title2='Alternative:'
                            title3='Recomendation:'
                            text1= 'Glucagon (peptide-1 receptor agonists)'
                            decline='Decline'
                            item1='1. Thiazolidinediones'
                            item2='2. Sulfonylureas'
                        />
                    </TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell colSpan={12} >
                    <AuthRow1
                            title1 ='Requsted Test:'
                            title2='Alternative:'
                            title3='Recomendation:'
                            text1= 'Glucagon (peptide-1 receptor agonists)'
                            Approved='Approved'
                            item1='1. T Cells (5$)'         
                        />
                    </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
          </TableContainer>
       </Container>
     </Paper>
   </Box>
  )
}

export default AuthorizationReport