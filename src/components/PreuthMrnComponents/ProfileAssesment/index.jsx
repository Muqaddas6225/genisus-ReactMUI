import * as React from 'react';
import { Badge, Box, Container, Stack, Table, TableBody, TableHead, Typography } from '@mui/material';
import {Pagination, PaginationItem} from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { TableBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow,Assessment, SearchButton, inputStyle } from 'Styles/Home';
import { PaginationText } from 'Styles/Home';


export default function ProfileAssesment(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
   
    function createData(mrn, fName, lName, condition, prediction, estRisk, updatedPrediction, result, location) {
        return { mrn, fName, lName, condition, prediction, estRisk, updatedPrediction, result, location };
    }

    const rows = [
        createData(3555255, 'Jessica', 'Smith', 'CKD', '.88.0', 'Medium High', '2022/01/25 20:01:00', 'Positive', 'Oncology'),
        createData(3555255, 'Jessica', 'Smith', 'CKD', '.88.0', 'Medium High', '2022/01/25 20:01:00', 'Positive', 'Oncology'),
        createData(3555255, 'Jessica', 'Smith', 'CKD', '.88.0', 'Medium High', '2022/01/25 20:01:00', 'Positive', 'Oncology'),
        createData(3555255, 'Jessica', 'Smith', 'CKD', '.88.0', 'Medium High', '2022/01/25 20:01:00', 'Positive', 'Oncology'),
        createData(3555255, 'Jessica', 'Smith', 'CKD', '.88.0', 'Medium High', '2022/01/25 20:01:00', 'Positive', 'Oncology'),
    ];

    return (
        <Container>
            <TableBox sx={{ overflow: 'auto' }}>
                <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Typography
                        variant='p'
                        component='p'
                        sx={{ fontSize: '13px', padding: '16px 10px', color: '#1A97DC' }}
                    >
                        Profile Assessment Driven by SPAI
                    </Typography>
                    <Box
                        component='form'
                        autoComplete='off'
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <select style={inputStyle}>
                            <option value="Acute/Primary Care (All),Arthiritis (All)">Acute/Primary Care (All),Arthiritis (All)</option>
                        </select>
                        <input type="text" placeholder='Date Range - From' style={inputStyle} />
                        <input type="text" placeholder='Date Range - To' style={inputStyle} />
                        <input type="text" placeholder='Choose Department' style={inputStyle} />
                        <SearchButton>Search</SearchButton>
                    </Box>
                </Stack>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell sx={{ fontSize: '12px' }}>Patient MRN</TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>First Name</TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>Last Name</TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>Condition Type</TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>Prediction (0-100%)</TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>
                                Est Risk Scale
                                <Badge sx={{ right: '-15px' }} badgeContent={2} color="primary" size='large'></Badge>
                            </TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>
                                Updated Prediction Date
                                <Badge sx={{ right: '-15px' }} badgeContent={2} color="primary" size='large'></Badge>
                            </TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>Actual Result</TableHeadCell>
                            <TableHeadCell sx={{ fontSize: '12px' }}>Location</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {row.mrn}
                                </TableBodyCell>
                                <TableBodyCell>{row.fName}</TableBodyCell>
                                <TableBodyCell>{row.lName}</TableBodyCell>
                                <TableBodyCell>{row.condition}</TableBodyCell>
                                <TableBodyCell>{row.prediction}</TableBodyCell>
                                <TableBodyCell>
                                    <Assessment>
                                        {row.estRisk}
                                    </Assessment>
                                </TableBodyCell>
                                <TableBodyCell>{row.updatedPrediction}</TableBodyCell>
                                <TableBodyCell>
                                    <Assessment>
                                        {row.result}
                                    </Assessment>
                                </TableBodyCell>
                                <TableBodyCell>{row.location}</TableBodyCell>
                            </TableBodyRow>
                        ))}
                    </TableBody>
                </Table> 
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
              rowsPerPageOptions={5}
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
            </TableBox>
           
        </Container>
    );
}
