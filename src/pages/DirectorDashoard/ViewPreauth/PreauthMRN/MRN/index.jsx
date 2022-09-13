import { Typography,Box, Container } from '@mui/material'
import React from 'react'
import { MrnBox, MrnButton } from 'Styles/Home';
// /import { MrnBox, MrnButton } from '../style'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const MRN= () => {

    return (
        <> 
        <Container>
        <Box mt={7} display="flex" gap={2}
        sx={{flexDirection:{xs:'column', md:'row'},
        justifyContent: {xs:'center',md:'space-between'}, alignItems:'center'
        }}>
            <Typography
                variant='h6'
                component='h6'
                sx={{ fontSize: { xs: '18px', sm: '20px' }, color: '#444444' }}
            >
                Spai Data Engine
            </Typography>
            <MrnBox>
                <MrnButton
                    sx={{
                        color: '#FFFFFF',
                        background: '#1D9BE0',
                        border: '2.5px solid #DADADA'
                    }}
                >
                    Patient MRN|
                </MrnButton>
                <MrnButton
                    sx={{
                        color: '#C1C1C1',
                        background: '#FFFFFF',
                        border: '2.5px solid #CED4DA;'
                    }}
                >
                    Provider MRN
                </MrnButton>
                <MrnButton
                    sx={{
                        width: { md: '80px', xs: '70px' },
                        height: '33px',
                        fontSize: '12px',
                        color: '#FFFFFF',
                        background: '#2196F3',
                        border: '2.5px solid #2196F3;'
                    }}
                >
                    Search
                </MrnButton>
                <ArrowDropUpIcon fontSize='large' />
            </MrnBox>
            </Box>
        </Container>
        </>
    )
}

export default MRN