import React from 'react'
import { Line } from 'react-chartjs-2'
// import { Chart as ChartJS } from 'chart.js/auto'
import { Typography } from '@mui/material';
import { CustomizedBox } from 'Styles/Home'

const Visitorsdata =[
    {
        id : 0,
        month : "Jan",
        visitor : '60'
    },
    {
        id : 1,
        month : "feb",
        
    },
    {
        id : 2,
        month : "Mar",
    },
    {
        id : 3,
        month : "April",
        
    },
    {
        id : 4,
        month : "May",
    },
    {
        id : 5,
        month : "June",
      
    },
    {
        id : 6,
        month : "July",
        visitor : '65'
    },
    {
        id : 7,
        month : "Aug",
    
    },
    {
        id : 8,
        month : "Sep",
      
    },
    {
        id : 9,
        month : "Oct",
      
    },
    {
        id : 10,
        month : "Nov",
        visitor : '80'
    },

]

const LineChart = () => {
    // const [userData, setUserData] = useState({
    //     labels: Visitorsdata.map((data) => data.month),
    //     datasets: [
    //       {
    //         label: "Visitors",
    //         data: Visitorsdata.map((data) => data.visitor),
    //         backgroundColor: [
    //           "rgba(75,192,192,1)",
    //           "#ecf0f1",
    //           "#50AF95",
    //           "#f3ba2f",
    //           "#2a71d0",
    //         ],
    //         borderColor: "black",
    //         borderWidth: 2,
    //       },
    //     ],
        
    //   });
    // const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]
    // const yValues = [61, 65, 80]
    const data = {
        labels: Visitorsdata.map((data) => data.month),
        datasets: [
            {
                data:  Visitorsdata.map((data) => data.visitor),
                tension: 0.4,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2,
                pointBorderWidth: 2,
                // borderColor: 'black',
                pointBorderColor: '#1A97DC',
                pointBackgroundColor: '#1A97DC',
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                stepSize: 4,
                suggestedMin:50,
                suggestedMax:90,
            },
        },
    }

  
    return (
        <CustomizedBox sx={{ padding: '15px 10px' }}>
            <Typography
                mb={5}
                variant='h4'
                component='h4'
                sx={{ color: '#1A97DC', fontSize: { xs: '12px', sm: '14px' } }}
            >
                Graph of Visits/Admission
            </Typography>
            <Line
                data={data}
                options={options}
            />
        </CustomizedBox>
    )
}

export default LineChart