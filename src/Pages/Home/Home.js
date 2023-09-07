import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Chatbar from '../../Components/Chatbar/Chatbar'
import {HomeContainer,Box} from './style'
const Home = () => {
  return (
    <>
    <HomeContainer>
        <Box>
            <Sidebar/>
            <Chatbar/>
       </Box>
    </HomeContainer>
    </>
  )
}

export default Home
