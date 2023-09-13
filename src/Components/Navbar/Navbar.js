import React, { useContext } from 'react'
import {NavbarContainer,LeftWrapper,Logo,RightWrapper,UserName,LogoutButton,Image} from './style';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AppContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {loggedUser,setLoggedUser}=useContext(AppContext)
  console.log(loggedUser)
  const navigate=useNavigate()
  const logoutFn=()=>{
     signOut(auth)
     .then((authUser)=>{
         setLoggedUser(authUser)
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
             <Image src={loggedUser.photoURL} alt=''/>
             <UserName>{loggedUser.displayName}</UserName>
             <LogoutButton onClick={logoutFn}>Logout</LogoutButton>
         </RightWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
