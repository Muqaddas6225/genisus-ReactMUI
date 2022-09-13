import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Typography } from "@mui/material"; 
import { Stack, Pagination, PaginationItem } from '@mui/material';
// import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { PaginationText } from 'Styles/Home';

const columns = [
  { id: "Requested", label: "Requested #", minWidth: 120 },
  { id: "Type", label: "Type", minWidth: 320 },
  { id: "Urgency", label: "Urgency", minWidth: 170 },
  { id: "Status", label: "Status", minWidth: 120 },
  { id: "Created", label: "Created on", minWidth: 300 },
 
];

function createData(Requested , Type, Urgency, Status,Created) {
  return { Requested , Type, Urgency, Status,Created};
}

const rows = [
  createData("#2247", "Inpatient Transplant", "Elective","", "11/12/2018 6:56PM EST"),
  createData("#2265", "Home Health aid social worker ", "Elective","", "11/12/2018 6:56PM EST"),
  createData("#2265", "Home Health aid social worker ","Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2265", "Home hospice","Elective", "", "11/12/2018 6:56PM EST"),
  createData("#2265", "Home hemodialysis", "Elective","", "11/12/2018 6:56PM EST"),
  createData("#2265", "Home durable medical equipment", "Emergency","",  "11/12/2018 6:56PM EST"),
  createData("#2265", "Home hemodialysis", "Emergency","",  "11/12/2018 6:56PM EST"),
  createData("#2265", "Home hemodialysis","Emergency","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis", "Emergency","", "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis", "Emergency","", "11/12/2018 6:56PM EST"),
  createData("#2247","Home hemodialysis", "Elective","", "11/12/2018 6:56PM EST"),
  createData("#2247","Home hemodialysis", "Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis","Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis","Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis", "Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis","Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis","Elective","",  "11/12/2018 6:56PM EST"),
  createData("#2247", "Home hemodialysis", "Elective","",  "11/12/2018 6:56PM EST")
];



// const StyledTableRow = styled(TableRow)(({ theme }) => `
//   :nth-of-type(odd){
//     backgroundColor : #F9F9F9;
//   },
// `);

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    
    <Paper sx={{ width: "100%"}} >
      {/* <TableContainer sx={{ maxHeight: 440 }}> */}
      <Container >
      <TableContainer maxWidth='850px' >
        <Table stickyHeader aria-label="sticky table"
        sx={{overflow: 'scroll', minWidth: '700px' }}>
          <TableHead>
            <TableRow>
              <TableCell align="start" colSpan={12} >
              <Typography variant="h3" sx={{color:'primary.main'}}> My Preauths</Typography>
             
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell 
                  sx={{background: '#F9F9F9'}}
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                <Typography variant="h4" sx={{fontSize:"14px" ,color:"secondary.light"}}> {column.label}</Typography>
                 
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}
                      sx={
                        {'&:nth-of-type(even)':{
                        backgroundColor :' #F9F9F9',
                      }}
                      }
                   >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                         <Typography variant="h4" sx={{fontSize:"13px", color :'secondary.light'}}> {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}</Typography>
                         
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        // showFirstButton 
        // showLastButton  
        rowsPerPageOptions={8}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx = {{display :'flex',
        justifyContent : 'space-between'
        }}
      />  */}
      {/* <Paginations
        rowsPerPageOptions={8}
        component="div"s
        dataLength={rows.length}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            flexWrap ='wrap'
            display='flex'
            sx={{ padding: { xs: '20px 0', sm: '0' } }}>
            <PaginationText
                variant='h4'
                component='h4'
            >
                Showing {page} to {rowsPerPage} of {rows.length}
            </PaginationText>
            <Pagination
              // count={3}
              rowsPerPageOptions={8}
              // component="div"
              dataLength = {rows.length}
              count = {Math.ceil(rows.length/rowsPerPage)}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              defaultPage={2}
                renderItem={(page) => (
                    <PaginationItem onClick={handleChangeRowsPerPage}
                        components={{ previous: KeyboardDoubleArrowLeftIcon, next: KeyboardDoubleArrowRightIcon }}
                        {...page}
                    />
                )}
            />
        </Stack>

      </Container>
    </Paper>
   
  );
}
