import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomizedBox } from 'Styles/Home';

export default function AssessmentPlan() {
  return (
    <>
   
    <CustomizedBox>
        <Typography variant='h4' p='16px 18px' color='primary.main'>Notes - Assessment Plan</Typography>
         {/* "//FirstAccordian" */}
        <Accordion>  
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant='h4'>2021-10-24</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* Second Accordian */}
                <Accordion >
                    <AccordionSummary sx={{backgroundColor:'#86CCE7',color:'#FFFFFF'}}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography variant='h4'>2021-10-24</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Third Accordian */}
                        <Accordion>
                            <AccordionSummary sx={{backgroundColor:'#86CCE7', color:'#FFFFFF'}}
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant='h4'>Admission Note Adult DZ2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {/* Fourth Accordian */}
                            <Accordion>
                                <AccordionSummary sx={{backgroundColor:'#86CCE7',color:'#FFFFFF'}}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography variant='h4'>Urinary Tract Infection; Bladder CA; Hematuria;
                                            abdominal pain; Anemia</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography variant= 'h4'>
                                        Urine analysis & Urine culture
                                </Typography>
                                <Typography variant='h4'>
                                Temprature maximum for last 24 hours is 97.8
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
            </AccordionDetails>
        </Accordion>
      </CustomizedBox>
      
    
     
    </>
  );
}
