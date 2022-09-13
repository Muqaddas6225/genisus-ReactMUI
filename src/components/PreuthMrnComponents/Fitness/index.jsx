import React from 'react'
import { Container, Grid } from '@mui/material'
// import FitnessGraph from '../../../components/fitnessGraph/FitnessGraph'
import FitnessGraph from '../FitnessGraph'
import { weight,heart } from 'assets/images'


const Fitness = () => {
    const fitnessData = [
        {
            icon: weight,
            title: 'Weight',
            quantity: '132 lbs',
            points: [10, 27, 10, 12, 0],
            type: 'Line',
        },
        {
            icon: heart,
            title: 'Heart Rate',
            quantity: '76 bpm',
            points: [27, 18, 70, 40, 12],
            type: 'Bar',
        },
        {
            icon: heart,
            title: 'B',
            quantity: '130/85 mmHg',
            points: [2, 12, 8, 6],
            points2: [25, 45, 65, 52],
            type: 'Line',
        },
    ]

    return (
        <Container>
            <Grid mb={4} container spacing={4}>
                {fitnessData.map((data, index) => (
                    <Grid key={index} item xs={12} lg={4}>
                        <FitnessGraph fitnessData={data} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Fitness