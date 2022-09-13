import React from 'react'
import { Container, Typography } from '@mui/material'
import Graph1 from './Graph/graph1'
import Graph2 from './Graph/graph2'
// import Graph1 from './Graph1'
// import Graph2 from './Graph2'

const LineGraph = () => {

    return (
        <Container>
            <Graph1/>
            <Typography
                variant='h6'
                component='h6'
                sx={{ fontSize: { xs: '18px', sm: '20px' }, margin: '30px 0' }}
            >
                SPAI Chess Machine - Precision Medicine
            </Typography>
            <Graph2/>
        </Container>
    )
}

export default LineGraph