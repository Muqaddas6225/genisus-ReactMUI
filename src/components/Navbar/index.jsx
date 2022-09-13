import * as React from 'react';
// import {styled} from '@mui/material/styles';
// import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link , useNavigate} from 'react-router-dom';

// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import AdbIcon from '@mui/icons-material/Adb';

import { logo } from 'assets/images';
// import AppbarStyles from 'Styles/AppbarStyle';

const pages = ['Home', 'Preauth', 'Members','Analytics'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

      const navigate = useNavigate()
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      // const [anchorElUser, setAnchorElUser] = React.useState(null);

      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

      // const handleOpenUserMenu = (event) => {
      //   setAnchorElUser(event.currentTarget);
      // };

      const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);

        // page === 'Home'? navigate(`/`):navigate(`${page}`)
        navigate(`/`)
      
      
      };


  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // const classes = AppbarStyles(){}
//     const MyAppBar = styled(AppBar)({
//         backgroundColor: '#FFFFFF',
//         boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08)',
// });
//     const MyButton = styled(Button)`

//       `
// ;
     




  return (
  
    <AppBar position="static"
         sx={{
          backgroundColor:" #FFFFFF",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",   
          }}
    >
      <Container maxWidth='1290px'>
        <Toolbar disableGutters >
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor : 'pointer' }} onClick={()=>navigate(`/`) }>
            <img src= {logo} alt='logo'/>
          </Box>
        
          <Box spacing= {10}  sx={{ display: { xs: 'none', md: 'flex', gap : '2' }, width:'100%' , justifyContent :'center'}}>
            {pages.map((page) => (
              <Button  
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                    sx={{ my: 2, color: 'secondary.main', display: 'block',  
                    ":hover": {
                    color : 'primary.main'
                      }, 
              }}
              > 
              {page}
               {/* <Link to={`/${page}`}
                 style={{ 
                  textDecoration: 'none',
                  fontFamily: 'Poppins',
                  // textTransform : 'uppercase',
                  // color : 'secondary.main'
                }}> {page}</Link>
                */}
                
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: 1  }} >
            <img src= {logo} alt='logo'/>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
           
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
              sx={{ color: 'primary.main'}}
               />
            </IconButton>
            
            <Menu
             
              right ='40px'
              // id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> 
                  <Link to={`/${page}`}
                    style={{ 
                      textDecoration: 'none',
                      fontFamily: 'Poppins',
                      // textTransform : 'uppercase',
                      // color : 'secondary.main'
                    }}> {page}
                  </Link>
               </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default ResponsiveAppBar;
