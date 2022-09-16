import * as React from 'react';
import { Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';

import { Stack, Pagination,Box } from '@mui/material';
import { TableHeadCell, TableBodyCell, TableHeadRow, TableBodyRow, Status, CustomizedBox } from 'Styles/Home';
import { PaginationText } from 'Styles/Home';
import fileIcon from "../../../assets/images/file.png"

const ReportedClaims = (props) => {
    const [page, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const paginationHandler = (event, value) => {
        setPage(value);
        setRowsPerPage(value * 5);
      };
    

    function createData(detectedDiagnosis, icd10, drg, date, status, file) {
        return { detectedDiagnosis, icd10, drg, date, status, file };
    }

    const rows = [
        createData('Anemia', 'D64', '812', '2-20-2022', 'Active',fileIcon),
        createData('Live Cirrhosis', 'K74.60', '438', '3-20-2022', 'Inactive',fileIcon),
        createData('Type 2 Diabetes Mellitus', 'E11', '638', '2-10-2022', 'Active', fileIcon),
        createData('Anemia', 'D64', '812', '4-20-2022', 'Inactive', fileIcon),
        createData('Live Cirrhosis', 'K74.60', '438', '5-20-2022', 'Active', fileIcon),
        createData('Type 2 Diabetes Mellitus', 'E11', '638', '2-10-2022', 'Active', fileIcon),
        createData('Anemia', 'D64', '812', '4-20-2022', 'Inactive', fileIcon),
        createData('Live Cirrhosis', 'K74.60', '438', '5-20-2022', 'Active', fileIcon),
    ];

    return (
        <CustomizedBox>
        <TableContainer>
                <Box display="flex" sx={{padding: '15px 10px'}}> 
                <Typography
                    variant='h4'
                    component='h4'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' } }}>
                   {props.title}
                </Typography>
                <Typography color='#959595'  sx={{fontSize: { xs: '12px', sm: '14px' } }}>
                {props.desc}</Typography></Box>
               
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableHeadRow>
                            <TableHeadCell>Detected Diagnosis</TableHeadCell>
                            <TableHeadCell>ICD-10</TableHeadCell>
                            <TableHeadCell>DRG</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>File</TableHeadCell>
                        </TableHeadRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice((page - 1) * 5 , rowsPerPage)
                        .map((row, index) => (
                            <TableBodyRow key={index}>
                                <TableBodyCell variant='p' component="th" scope="row">
                                    {row.detectedDiagnosis}
                                </TableBodyCell>
                                <TableBodyCell>{row.icd10}</TableBodyCell>
                                <TableBodyCell>{row.drg}</TableBodyCell>
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
                                <TableBodyCell>
                                    <Box  width='24px' height='24px' sx={{objectFit:'contain'}}>
                                         <Box alt='logo' src={row.file} component='img' /> 
                                    </Box>
                                    {/* <FileBox> */}
                                        {/* */}
                                    {/* </FileBox> */}
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

export default ReportedClaims