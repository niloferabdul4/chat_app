import React from 'react'
import { UsersContainer,Wrapper,Image,UserName,Message } from './style'
import image from '../../assets/agent10.png'
const Users = () => {
  return (
    <>
        <UsersContainer>
        <Wrapper>
             <Image src={image} alt=''/>
             <span style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                 <UserName>Nila</UserName>
                 <Message>Hai</Message>
             </span>
            
         </Wrapper>
        </UsersContainer>
    </>
  )
}

export default Users
