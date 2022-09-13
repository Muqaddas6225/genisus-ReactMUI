import React from 'react'
import { Container, Stack,Box } from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1

import PatientInfo from 'components/PatientInfo'
// import Premium from './Premium'
import Validation from 'components/SpaiDataComponents/Validation'
// import Report from './Report'
import PreauthReport from './PreauthReport';
import MRN from './MRN';
import WarningBoxes from 'components/PreuthMrnComponents/WarningBox';
import Fitness from 'components/PreuthMrnComponents/Fitness';
import ProfileAssesment from 'components/PreuthMrnComponents/ProfileAssesment';
import LineGraph from 'components/PreuthMrnComponents/LineGraph';

const PreauthMRN = () => {
 return(
    <>
      <MRN/>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            <Grid item lg={4} md= {12} sm={12} xs={12}>
            <Stack
            mt={10}
            mb={4}
            gap={4}
            direction='row'
            sx={{ flexWrap: { xs: 'wrap', lg: 'nowrap' } }}
            >
            <Box sx={{ width: '100%', maxWidth: '410px', margin: { xs: 'auto', md: 'none' } }}>
                <PatientInfo/>
                {/* <Premium/>    */}
                <WarningBoxes/>
            </Box>
            </Stack> 
            </Grid>
            <Grid item  mt={6} lg={8} md= {12} sm={12} xs={12}>
            <Validation />
            </Grid>   
        </Grid>
      </Container> 
      <PreauthReport/>
      <Fitness/>
      <ProfileAssesment/>
      <LineGraph/>
   
    </>
 )
}

export default PreauthMRN