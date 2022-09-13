import React from 'react'
import { Divider, Typography } from '@mui/material'
import { CustomizedBox } from 'Styles/Home'
import PatientData from './patientData'


const PatientInfo = () => {

    return (
        <CustomizedBox sx={{ marginBottom: { xs: '16px', lg: '0px' } }}>
            <Typography
                variant='h4'
                component='h4'
                sx={{ color: '#1A97DC', fontSize: { xs: '14px', sm: '16px' }, padding: '15px 10px' }}
            >
                Patient Information
            </Typography>
            <Divider />
           <PatientData/>
        </CustomizedBox>
    )
}

export default PatientInfo