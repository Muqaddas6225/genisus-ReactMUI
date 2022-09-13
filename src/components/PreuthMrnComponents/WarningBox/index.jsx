import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { warning2 } from 'assets/images'

// import { Image } from '../../../assets/style/index'
// import warning2 from '../../../assets/images/warning2.png'
// import { WarningBox } from '../style/index'

const WarningBoxes = () => {

    return (
        <>
           
            <Box display='flex' alignItems ='center'   gap={2} sx={{border:' 2px solid #FF6363', borderRadius:' 5px',pl:'20px', mt:'10px'}}>
                <Box width={20} height={17} sx={{objectFit:'contain' }}>
                    <img src={warning2} alt='warning2' />
                    {/* <Image alt='warning' src={warning2} component='img' /> */}
                </Box>
                <Divider orientation="vertical" sx={{border:' 1px solid #FF6363', borderRadius:' 5px',height:'71px'}}/>
                <Typography
                    sx={{
                        color: '#000000',
                        fontSize: { xs: '14px', sm: '18px' },
                    }}
                >
                    CPR : Yes
                </Typography>
            </Box>
            <Box display='flex' alignItems ='center'   gap={2} sx={{border:' 2px solid #FF6363', borderRadius:' 5px',pl:'20px', mt:'10px'}}>
                <Box width={20} height={17} sx={{objectFit:'contain'}}>
                <img src={warning2} alt='warning2' />
                    {/* <Image alt='warning' src={warning2} component='img' /> */}
                </Box>
                <Divider orientation="vertical" sx={{border:' 1px solid #FF6363', borderRadius:' 5px',height:'71px'}}/>
                <Typography
                    sx={{
                        color: '#000000',
                        fontSize: { xs: '14px', sm: '18px' },
                    }}
                >
                    Allergy : Pencilline
                </Typography>
            </Box>
        </>
    )
}

export default WarningBoxes