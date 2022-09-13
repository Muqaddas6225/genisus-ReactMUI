import * as React from 'react';
import { Container, Grid } from '@mui/material';
import ReportedClaims from 'components/SpaiDataComponents/ReportedClaims';
import Medications from 'components/SpaiDataComponents/Medications';
import LabTrend from 'components/SpaiDataComponents/LabTrend';
// import { Assessment } from '@mui/icons-material';
// import LineChart from '../../../components/lineChart/LineChart';

import AssessmentPlan from 'components/PreuthMrnComponents/AssesmentPlan';

const PreauthReport = () => {

    return (
        <Container>
            <Grid mb={2} mt={2} container spacing={4}>
                <Grid item xs={12} lg={6}>
                    <ReportedClaims
                      title='Reported Claims'
                     />
                </Grid>
                <Grid item xs={12} lg={6}>
                 {/* <ClinicalNotes /> */}
                  <ReportedClaims
                      title='Clinical Notes'
                      desc='- Medical Condition Detection'
                     />
                   
                </Grid>
                <Grid item xs={12} lg={6}>
                    {/* <Medications /> */}
                    <Medications title= 'Medication'/>
                </Grid>
                <Grid item xs={12} lg={6}> 
                    <AssessmentPlan/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    {/* <LabTrend /> */}
                     <LabTrend title='Lab Test Trends'/>
                   
                </Grid>
                <Grid item xs={12} lg={6}>
                    {/* <VitalTrend /> */}
                    <LabTrend title='Vital Trend'/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    {/* <LineChart /> */}
                </Grid>
                <Grid item xs={12} lg={6}>
                    {/* <LineChart /> */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default PreauthReport