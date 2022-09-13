import React from 'react'
import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto'
import { Box, Stack, Typography } from '@mui/material';
import { CustomizedBox, inputStyle, selectStyle  } from 'Styles/Home';


const Graph2 = () => {
    const xValues = ['1/22 12:56', '1/22 12:56', '1/22 12:56', '1/22 12:56', '1/22 12:56', '1/22 12:56']
    const yValues1 = [55, 58, 48, 63]
    const yValues2 = [88, 72, 80, 84]
    const data = {
        labels: xValues,
        datasets: [
            {
                data: yValues1,
                borderWidth: 2,
                pointBorderWidth: 2,
                borderColor: '#747474',
                pointBorderColor: '#747474',
                pointBackgroundColor: '#747474',
            },
            {
                data: yValues2,
                borderWidth: 2,
                pointBorderWidth: 2,
                borderColor: '#1A97DC',
                pointBorderColor: '#1A97DC',
                pointBackgroundColor: '#1A97DC',
            },
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                stepSize: 5,
                suggestedMin: 50,
                suggestedMax: 90,
            },
        },
    }


    return (
        <CustomizedBox mt={4} sx={{ padding: '15px 10px' }}>
            <Stack
                mb={4}
                direction='row'
                alignItems='center'
                justifyContent='space-between'
            >
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' } }}
                >
                    Severity of illness over time (Per Condition-Patient)
                </Typography>
                <Box
                    component='form'
                    autoComplete='off'
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    <select style={selectStyle}>
                        <option value="Treatments">Treatments</option>
                    </select>
                    <select style={selectStyle}>
                        <option value="Care Area/Medical Conditon">Care Area/Medical Condition</option>
                    </select>
                    <input type="text" placeholder='Date Range - From' style={inputStyle} />
                    <input type="text" placeholder='Date Range - To' style={inputStyle} />
                </Box>
            </Stack>
            <Line
                data={data}
                options={options}
            />
        </CustomizedBox>
    )
}

export default Graph2