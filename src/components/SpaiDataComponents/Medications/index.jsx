import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';

import { Stack, Pagination} from '@mui/material';

// import { TableBox, TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status  } from 'Styles/Home';
import { TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status, CustomizedBox } from 'Styles/Home';
import { PaginationText } from 'Styles/Home';

const Medications = (props) => {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

        
    const paginationHandler = (event, value) => {
        setPage(value);
        setRowsPerPage(value * 5);
    };

    function createData(name, ndc, date, status) {
        return { name, ndc, date, status };
    }

    const rows = [
        createData('Glucogan', '0002-8031-01', '2-20-2022', 'Active'),
        createData('Prinivil Lisinopril', '0006-0207-57', '3-20-2022', 'Inactive'),
        createData('Vitamin D', '64380-737-06', '2-10-2022', 'Active'),
        createData('Prinivil Lisinopril', '0006-0207-57', '4-20-2022', 'Inactive'),
        createData('Vitamin D', '64380-737-06', '5-20-2022', 'Active'),
        createData('Vitamin D', '64380-737-06', '5-20-2022', 'Active'),
        createData('Vitamin D', '64380-737-06', '5-20-2022', 'Active'),
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
                            <TableHeadCell>Medication Name</TableHeadCell>
                            <TableHeadCell>NDC</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice((page - 1) * 5 , rowsPerPage)
                        .map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {row.name}
                                </TableBodyCell>
                                <TableBodyCell>{row.ndc}</TableBodyCell>
                                <TableBodyCell>{row.date}</TableBodyCell>
                                <TableBodyCell>
                                    <Status
                                        variant='p'
                                        component='p'
                                        sx={{
                                            color: `${row.status === 'Active' ? '#33C70E' : '#C70E0E'}`,
                                            background: `${row.status === 'Active' ? '#CBFFC2' : '#FFC2C2'}`,
                                        }}
                                    >
                                        {row.status}
                                    </Status>
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
                Showing {(page - 1) * 5} to {rowsPerPage > rows.length ? rows.length : rowsPerPage} of {rows.length}
            </PaginationText>
            <Pagination
              count = {Math.ceil(rows.length/5)}
              rowsPerPage={rowsPerPage}
              page={page}
              defaultPage={2}
              onChange={(event , value) => paginationHandler(event , value) }
            />
        </Stack>
            </TableContainer>
        </CustomizedBox>
    )
}

export default Medications