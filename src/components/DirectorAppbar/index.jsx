import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import { logo } from 'assets/images';

const DirectorAppBar = (props) => {
const navigate = useNavigate()

return (
    <AppBar position="static"
         sx={{
          backgroundColor:" #FFFFFF",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",   
          }}
    >
      <Container maxWidth='1290px'>
        <Toolbar disableGutters >
          <Box 
          sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, cursor : 'pointer' }} 
          onClick={()=>navigate(`/`) }>
            <img src= {logo} alt='logo'/>
          </Box>
        
          <Box 
            spacing= {10} 
            onClick={()=>navigate(`/`) }
            sx={{ 
                display: { xs: 'flex', md: 'flex', gap : '2' },
                width:'100%' ,
                justifyContent :'flex-end'}}
            >
           <Box 
                sx={{ 
                    display: { xs: 'flex', md: 'flex' }, mr: 1,
                    cursor : 'pointer',justifyContent:'center',
                    alignItems:'center', gap : '12px' 
                }}>
                <img src={props.img} alt="director profile"/>
                <Typography variant='h4' fontSize={'13.5px'} color={'secondary.main'}
                sx={{ display: { xs: 'none', md: 'flex' }}}
                >{props.name}</Typography>
           </Box>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default DirectorAppBar;
