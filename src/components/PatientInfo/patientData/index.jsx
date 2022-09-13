import React from 'react'
import { Box, Typography } from '@mui/material'

const PatientData = () => {
    const patientData = [
        {
            key: 'Patient MRN',
            value: 3555255
        },
        {
            key: 'Patient First Name',
            value: 'Jessica'
        },
        {
            key: 'Patient Last Name',
            value: 'Smith'
        },
        {
            key: 'Gender',
            value: 'Female'
        },
        {
            key: 'Race',
            value: 'White'
        },
        {
            key: 'Language',
            value: 'English'
        },
        {
            key: 'Religion',
            value: 'Christian'
        },
    ]

    return (
        <>
            {
                patientData.map((data, index) => (
                    <Box
                        key={index}
                        p='15px 10px'
                        display='flex'
                        justifyContent='space-between'
                    >
                        <Typography
                            variant='h4'
                            component='p'
                            sx={{ fontSize: { xs: '12px', sm: '16px', color: '#838383' } }}
                        >
                            {data.key}
                        </Typography>
                        <Typography
                            variant='h4'
                            component='p'
                            sx={{ fontSize: { xs: '12px', sm: '16px', color: 'secondary.main' } }}
                        >
                            {data.value}
                        </Typography>
                    </Box>
                ))}
        </>
    )
}

export default PatientData