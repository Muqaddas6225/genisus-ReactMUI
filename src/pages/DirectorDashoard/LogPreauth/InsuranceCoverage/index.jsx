import React from 'react'
import { FormControl, MenuItem, Container, TextField, FormLabel} from '@mui/material';

import { CustomizedBox } from 'Styles/Home';


const InsuranceCoverage = () => {
  const [option, setOptions] = React.useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <Container >
        <CustomizedBox  maxWidth='530px' minHeight='347px'  m ='auto' mt = '30px' p ="30px" >
            <FormControl fullWidth>
              <FormLabel id="select-label"  sx={{color:'secondary.main', pb:'13px'}} >Insurance Coverage</FormLabel>
              <TextField id="select"  placeholder='select optons' value={option}  onChange={handleChange} select>
                  <MenuItem value="Anthem">Anthem</MenuItem>
                  <MenuItem value="Ciga">Cigna</MenuItem>
                  <MenuItem value="UHG">Uhg</MenuItem>
              </TextField>
              <FormLabel id=""  sx={{color:'secondary.main', pb:'13px', pt:'19px'}} >Email</FormLabel>
              <TextField placeholder='Tyle here' type ='email' sx={{minHeight:'48px'}}></TextField>
            </FormControl>   
        </CustomizedBox>
   </Container>
  )
}

export default InsuranceCoverage