import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Users from '../Users/Users'
import Search from '../Search/Search'
import {SidebarContainer} from './style'


const Sidebar = () => {

  return (
    <>   
    <SidebarContainer>     
        <Navbar/>
        <Search/>
        <Users/>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
