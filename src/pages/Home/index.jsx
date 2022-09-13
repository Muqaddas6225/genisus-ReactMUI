import React from 'react'
import Header from './Header'
import Status from './Status'
import TaskPreauth from './TaskPreauth'
import ResponsiveAppBar from 'components/Navbar'
const Home = () => {
  return (
   <>
    <ResponsiveAppBar/>
    <Header/>
    <Status/>
    <TaskPreauth/>
   </>
  )
}

export default Home