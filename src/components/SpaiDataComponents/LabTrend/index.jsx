import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import { Stack, Pagination, PaginationItem, Box } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

// import { TableBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status  } from 'Styles/Home';
import { TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, CustomizedBox } from 'Styles/Home';
import { PaginationText } from 'Styles/Home';
import warning from '../../../assets/images/warning.png'

const LabTrend = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


   
    function createData(description, result, date, warning) {
        return { description, result, date, warning };
    }

    const rows = [
        createData('Weight', '205 Pounds^5 pounds', '2-20-2022 10:10', warning),
        createData('Blood Pressure', '140/90 mmhg', '3-20-2022 10:10', warning),
        createData('Blood Sugar (Fasting)', '100mg/dl', '2-10-2022 10:10', warning),
        createData('Weight', '140/90 mmhg', '3-20-2022 10:10', warning),
        createData('Blood Pressure', '100mg/dl', '2-10-2022 10:10', warning),
    ];

    return (
        <CustomizedBox>
            <TableContainer>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' }, padding: '15px 10px' }}
                >
                    {props.title}
                </Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Test Description</TableHeadCell>
                            <TableHeadCell>Test Result</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {row.description}
                                </TableBodyCell>
                                <TableBodyCell>{row.result}</TableBodyCell>
                                <TableBodyCell>{row.date}</TableBodyCell>
                                <TableBodyCell>
                                <Box  width='24px' height='24px' sx={{objectFit:'contain'}}>
                                         <Box alt='logo' src={row.warning} component='img' /> 
                                    </Box>
                                    {/* <WarningBox>
                                        <Image alt='logo' src={test.warning} component='img' />
                                    </WarningBox> */}
                                </TableBodyCell>
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
            </TableContainer>
        </CustomizedBox>
    )
}

export default LabTrend