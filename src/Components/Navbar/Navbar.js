import React from 'react'
import {NavbarContainer,LeftWrapper,Logo,RightWrapper,UserName,LogoutButton,Image} from './style';
import image from '../../assets/agent1.png';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LeftWrapper>
            <Logo>WhatsApp</Logo>
        </LeftWrapper>         
         <RightWrapper>
             <Image src={image} alt=''/>
             <UserName>Nila</UserName>
             <LogoutButton>Logout</LogoutButton>
         </RightWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
