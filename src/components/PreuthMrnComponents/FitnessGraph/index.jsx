import React from 'react'
import { Box, Typography } from '@mui/material'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { CustomizedBox,TopFitnessBox } from 'Styles/Home';

const FitnessGraph = ({ fitnessData }) => {
    const xValues = ['5/6', '5/7', '5/8', '5/9', '5/10']
    const yValues = fitnessData.points
    const data = {
        labels: xValues,
        datasets: [
            {
                data: yValues,
                backgroundColor: [
                    '#6366F1',
                    '#6366F1',
                    '#6366F1',
                    '#6366F1',
                    '#6366F1',
                ],
                borderWidth: 1,
                barThickness: 20,
                pointBorderWidth: 2,
                borderColor: '#1A97DC',
                pointBorderColor: '#1A97DC',
                pointBackgroundColor: '#1A97DC',
            },
            {
                borderWidth: 1,
                barThickness: 20,
                pointBorderWidth: 2,
                borderColor: '#1A97DC',
                pointBorderColor: '#1A97DC',
                pointBackgroundColor: '#1A97DC',
                data: fitnessData.points2 && fitnessData.points2,
            }
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
                stepSize: 10,
                suggestedMin: 0,
                suggestedMax: 50,
            },
        },
        layout: {
            padding: {
                left: 16,
                right: 16,
                bottom: 10,
            }
        }
    }

    return (
        <CustomizedBox>
            <TopFitnessBox>
                <Box display='flex' alignItems='center' gap={2}>
                    <Box width={39} height={39} sx={{objectFit:'contain'}}>
                        <img src={fitnessData.icon} alt='fitness data icon'/>
                        {/* <Image alt='weight' src={fitnessData.icon} component='img' /> */}
                    </Box>
                    <Typography
                        variant='p'
                        component='p'
                        color='#FFFFFF'
                    >
                        {fitnessData.title}
                    </Typography>
                </Box>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ fontSize: { xs: '18px', sm: '22px' }, color: '#FFFFFF' }}
                >
                    {fitnessData.quantity}
                </Typography>
            </TopFitnessBox>
            {
                fitnessData.type === 'Line'
                    ? <Line
                        data={data}
                        options={options}
                    />
                    : <Bar
                        data={data}
                        options={options}
                    />
            }
        </CustomizedBox>
    )
}

export default FitnessGraph