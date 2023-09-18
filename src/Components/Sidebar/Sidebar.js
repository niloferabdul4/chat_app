import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Users from '../Users/Users'
import {SidebarContainer} from './style'


const Sidebar = () => {

  return (
    <>   
    <SidebarContainer>     
        <Navbar/>
        <Users/>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
