import React, { useContext } from 'react'
import { UsersContainer,Wrapper,Image,UserName,Message } from './style'
import image from '../../assets/agent10.png'
import { AppContext } from '../../Context/AppContextProvider'
const Users = () => {
  const {users}=useContext(AppContext)
  console.log(users)
  return (
    <>
        <UsersContainer>
        <Wrapper>
             <Image src={image} alt=''/>
             <span style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                 <UserName></UserName>
                 <Message>Hai</Message>
             </span>            
         </Wrapper>
        </UsersContainer>
    </>
  )
}

export default Users
