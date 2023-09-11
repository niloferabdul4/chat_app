import React, { useContext } from 'react'
import {NavbarContainer,LeftWrapper,Logo,RightWrapper,UserName,LogoutButton,Image} from './style';
import image from '../../assets/agent1.png';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AppContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {state:{user},dispatch}=useContext(AppContext)

  const navigate=useNavigate()
  const logoutFn=()=>{
     signOut(auth)
     .then((authUser)=>{
         dispatch({type:'SET_USER',payload:null})
         navigate('/login')
     })
     .catch(error=>console.log(error.message))
  }
  return (
    <>
      <NavbarContainer>
        <LeftWrapper>
            <Logo>WhatsApp</Logo>
        </LeftWrapper>         
         <RightWrapper>
             <Image src={image} alt=''/>
             <UserName>{user.displayName}</UserName>
             <LogoutButton onClick={logoutFn}>Logout</LogoutButton>
         </RightWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
