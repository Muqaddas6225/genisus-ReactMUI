import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Container,Box, Typography } from "@mui/material"; 

import rows from "./taskdata";



function CreateData(props) {
  
  return (
    <Box>
    <Typography variant="h4"  
        sx={{color :"primary.main", lineHeight: '82.5%', mb:'11px'}}>
        {props.title}
    </Typography>
    <Typography variant="h4" 
        sx={{color :"secondary.light" , fontSize: '14px',lineHeight: '82.5%'}}>
        {props.text}
    </Typography>
    <Typography variant="body1" 
        sx={{color :"secondary.light" , fontSize: '14px'}} >
        <span style={{display: 'flex',alignItems :'center' , gap :'11px' , marginTop:'12px'}}>
        <img src= {props.img} alt ='accepted'/> {props.approval}
        </span>
    </Typography>
    
    
    </Box>
  );
}

export default function TaskTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    
    <Paper sx={{ width: "100%"}}>
      {/* <TableContainer sx={{ maxHeight: 440 }}> */}
      <Container >
      <TableContainer maxWidth='850px'  >
        <Table stickyHeader aria-label="sticky table"
          sx={{overflow: 'scroll', minWidth: '300px' }}>
          <TableHead>
            <TableRow>
              <TableCell align="start" colSpan={6} sx={{
                color :'primary.main'
                  }}>
                  <Typography variant="h3" > Tasks</Typography>
                 
                  </TableCell>
              <TableCell align="end" colSpan={6}>
                <TablePagination
                        rowsPerPageOptions={5}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
              </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell colSpan={12}  >
                      <CreateData
                        title = {row.title}
                        text= {row.text}
                        approval = {row.approval}
                        img = {row.img}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
     
      </Container>
    </Paper>
   
  );
}
