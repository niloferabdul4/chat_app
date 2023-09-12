import React, { useContext } from 'react'
import { UsersContainer,Wrapper,Image,UserName,Message } from './style'
import image from '../../assets/agent10.png'
import { AppContext } from '../../Context/AppContextProvider'
const Users = () => {

  const {user}=useContext(AppContext)
  return (
    <>
        <UsersContainer>
        <Wrapper>
             <Image src={image} alt=''/>
             <span style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                 <UserName>{user.displayName}</UserName>
                 <Message>Hai</Message>
             </span>            
         </Wrapper>
        </UsersContainer>
    </>
  )
}

export default Users
