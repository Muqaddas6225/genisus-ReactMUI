import React from 'react';
// import ResponsiveAppBar from 'components/Navbar';
import Home from 'pages/Home';
import { Routes, Route} from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import LogPreauth from 'pages/DirectorDashoard/LogPreauth';
import ViewPreauth from 'pages/DirectorDashoard/ViewPreauth';


function App() {
  return (
    <>   
     <StyledEngineProvider injectFirst>
      {/* <ResponsiveAppBar/>   */}
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route to='/'>
                 <Route path='/authorization' element={<LogPreauth/>}/>
                 <Route path='/viewPreauth' element={<ViewPreauth/>}/>
              </Route>
          </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
