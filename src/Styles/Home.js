
import {Button, Typography, TableRow, TableCell} from '@mui/material'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)
(
  ({ theme }) => `
    margin: 12px;
    background-color: #F8F8F8;
    color: ${theme.palette.primary.main};
    border-radius : 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-transform: capitalize;
    line-height: 81.5%;
    padding: 18px 30px
`,
);


const CustomizedBox = styled(Box)
  (
    ({ theme }) => `
     
    // color: ${theme.palette.primary.main};
    background: #FFFFFF;
    //  background: yellow;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.09);
    border-radius: 5px;
  `,
  );
  
const StatusBox = styled(CustomizedBox) (
    ({ theme }) => `
    // color: ${theme.palette.primary.main};
    padding : 16px;
    height: 100px;
    width: 238px;
    // border : 1px solid white;
    display : flex;
    flex-direction : row
    paadding :16px 23px;
    
  `,
  );

  export const PaginationText = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: '#747474',
    padding: '30px 10px',
}))


//Table
export const TableBox = styled(Box)(({ theme }) => ({
  borderRadius: '5px',
  background: '#FFFFFF',
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08) !important',
}))

export const TableHeadRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
}));

export const TableBodyRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
  },
}));

export const TableHeadCell = styled(TableCell)(({ theme }) => ({
  fontSize: '14px',
  color: '#444444',
  fontWeight: '400',
  lineHeight: '81%',
  fontStyle: 'normal',
  padding: '15px 10px',
  fontFamily: 'Poppins',
  [theme.breakpoints.down("sm")]: {
      fontSize: '12px',
      lineHeight: '100%',
      padding: '15px 8px',
  }
}))

export const TableBodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: '13px',
  color: '#747474',
  fontWeight: '400',
  lineHeight: '81%',
  fontStyle: 'normal',
  padding: '22px 10px',
  fontFamily: 'Poppins',
  [theme.breakpoints.down("sm")]: {
      fontSize: '11px',
      lineHeight: '100%',
      padding: '12px 8px',
  }
}))

//Status
export const Status = styled(Typography)(({ theme }) => ({
  width: '86px',
  height: '22px',
  display: 'flex',
  fontSize: '12px',
  borderRadius: '11px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down("sm")]: {
      width: '70px',
      height: '20px',
      fontSize: '11px',
  }
}))

  

export const MrnBox = styled(Box)(({ theme }) => ({
  gap: '11px',
  display: 'flex',
  [theme.breakpoints.down("sm")]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
  }
}))

export const MrnButton = styled(Button)(({ theme }) => ({
  width: '207px',
  height: '33px',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '17px',
  borderRadius: '3px',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  [theme.breakpoints.down("md")]: {
      width: '120px',
      height: '30px',
      fontSize: '12px',
  }
}))


//Top Fitness Box
export const TopFitnessBox = styled(Box)(({ theme }) => ({
  height: '65px',
  display: 'flex',
  padding: '0 16px',
  marginBottom: '40px',
  alignItems: 'center',
  background: '#1A97DC',
  justifyContent: 'space-between',
  borderRadius: '5px 5px 0px 0px',
}))


//Search Button
export const SearchButton = styled(Button)(({ theme }) => ({
  width: '81px',
  height: '33px',
  color: '#FFFFFF',
  marginRight: '5px',
  borderRadius: '3px',
  background: '#2196F3',
  border: '1px solid #2196F3',
}))

//Assessment Buttons
export const Assessment = styled(Button)(({ theme }) => ({
  height: '27px',
  fontWeight: 400,
  color: '#FFFFFF',
  fontSize: '12px',
  lineHeight: '9px',
  fontStyle: 'normal',
  borderRadius: '3px',
  fontFamily: 'Poppins',
  background: '#FBC02D',
  border: '1px solid #FBC02D',
}))

//Input Fields
export const inputStyle = {
  width: '150px',
  height: '35px',
  margin: '0 6px',
  outline: 'none',
  fontWeight: 400,
  padding: '0 5px',
  fontSize: '13px',
  color: '#C1C1C1',
  lineHeight: '17px',
  fontStyle: 'normal',
  borderRadius: '3px',
  fontFamily: 'Poppins',
  border: '1px solid #CED4DA',
}


export const selectStyle = {
  width: '150px',
  height: '35px',
  margin: '0 6px',
  outline: 'none',
  fontWeight: 400,
  padding: '0 5px',
  fontSize: '13px',
  color: '#444444',
  lineHeight: '17px',
  fontStyle: 'normal',
  borderRadius: '3px',
  fontFamily: 'Poppins',
  border: '1px solid #CED4DA',
}







export {
    CustomizedButton,
    CustomizedBox,
    StatusBox

}