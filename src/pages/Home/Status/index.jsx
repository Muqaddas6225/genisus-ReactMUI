import React from 'react'
import { Container} from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1
import Statusbox from 'common/StatusBox';

// custom style sheet
import './status.scss'

//images
import { PlusSign } from 'assets/images';

// import { CustomizedBox, StatusBox, ImgBox } from 'Styles/Home';



// const CustomizedBox = styled(Box)
//   (
//     ({ theme }) => `
     
//     // color: ${theme.palette.primary.main};
//     // background: #FFFFFF;
//      background: yellow;
//     box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.09);
//     border-radius: 5px;
//   `,
//   );
  
// const StatusBox = styled(CustomizedBox) (
//     ({ theme }) => `
//     // color: ${theme.palette.primary.main};
//     padding : 16px;
//     height: 100px;
//     // width: 238px;
//     // border : 1px solid white;
//     display : flex;
//     flex-direction : row
//     paadding :16px 23px;
//   `,
//   );
  

//   const ImgBox = styled(Box)
//   (
//     ({ theme }) => `
//      margin-left: 54px;
//    `,
//   );
  




const Status = () => {
  return (
    <section className='StatusSection'>
     <Container  maxWidth= '1290px '>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item lg={2.4}>
                <Statusbox
                    title = 'Weekly Total'
                    subtitle = '25'
                    img = {PlusSign}
                />
            </Grid>
            <Grid item lg={2.4}>
                <Statusbox
                    title = 'Avg Processing'
                    subtitle = '1 Days'
                    img = {PlusSign}
                />
            </Grid>
            <Grid item lg={2.4}>
                <Statusbox
                    title = 'Completed'
                    subtitle = '55%'
                    img = {PlusSign}
                />
            </Grid>
            <Grid item lg={2.4}>
                <Statusbox
                    title = 'Open Preauths'
                    subtitle = '10'
                    img = {PlusSign}
                />
            </Grid>
            <Grid item lg={2.4}>
                <Statusbox
                    title = 'Overdue'
                    subtitle = '0'
                    img = {PlusSign}
                />
            </Grid>    
        </Grid>
     </Container>
    </section>
  )
}

export default Status