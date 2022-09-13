import React from 'react'
import { Box, Typography } from '@mui/material'
import { CustomizedBox } from 'Styles/Home'


const Premium = () => {
    const premium = [
        {
            key: 'Current Coverage Type',
            value: 'Premium'
        },
        {
            key: 'Renewal Date',
            value: '20/2/2022'
        },
        {
            key: 'Previous Coverage Type',
            value: 'Premium'
        }
    ]


    return (
        <CustomizedBox mt={2.5}>
            {
                premium.map((data, index) => (
                    <Box
                        key={index}
                        p='15px 10px'
                        display='flex'
                        justifyContent='space-between'
                    >
                        <Typography
                            variant='h4'
                            component='p'
                            sx={{ fontSize: { xs: '12px', sm: '16px', color: ' #838383' } }}
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
        </CustomizedBox>
    )
}

export default Premium