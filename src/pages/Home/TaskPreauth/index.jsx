import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1

import { CustomizedBox } from 'Styles/Home';
import ColumnGroupingTable from 'common/Preauth';
import TaskTable from 'common/Task';

import './taskPreauth.scss'

const TaskPreauth = () => {
  return (
    <section className='taskPreauth'>
      <Container maxWidth=' 1290px'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item lg={4} md= {12} sm={12} xs={12}>
                <CustomizedBox>
                    <TaskTable/>
                </CustomizedBox>
            </Grid>
            <Grid item lg={8} md= {12} sm={12} xs={12}>
                <CustomizedBox>
                    <ColumnGroupingTable/>
                </CustomizedBox>
            </Grid>
            
        </Grid>

        </Container>
    </section>
  )
}

export default TaskPreauth