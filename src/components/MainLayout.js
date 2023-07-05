import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'

const MainLayout = () => {
  return (
    <div>
    
    <Title title = {"Show/Buzz"} sub_title = {"Explore ,  rate ,  and get hooked !"}/>
    <Nav/>
    <Outlet/>
    </div>
  )
}

export default MainLayout