import React from 'react';
import { Stack, Pagination, PaginationItem } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { PaginationText } from 'Styles/Home';

const Paginations = (props) => {
 
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(8);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };


    return (
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
                Showing {props.page} to {props.rowsPerPageOptions} of {props.dataLength}
            </PaginationText>
            <Pagination
                count={3}
                rowsPerPageOptions = {props.rowsPerPageOptions}
                size='small'
               
                dataLength={props.dataLength}
               
                defaultPage={1}
                
                // showFirstButton
                // showLastButton
                renderItem={(item) => (
                    <PaginationItem
                        components={{ previous: KeyboardDoubleArrowLeftIcon, next: KeyboardDoubleArrowRightIcon }}
                        {...item}
                        rowsPerPage= {props.rowsPerPage}
                        page={props.page}
                        onPageChange ={props.onPageChange}
                        onRowsPerPageChange= {props.onRowsPerPageChange}
                    />
                )}
            />
        </Stack>
    );
}

export default Paginations