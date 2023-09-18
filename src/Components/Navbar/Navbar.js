import React, { useContext } from 'react'
import {NavbarContainer,LeftWrapper,Logo,RightWrapper,UserName,LogoutButton} from './style';
import { Image } from '../Users/style';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AppContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const {loggedUser,setLoggedUser}=useContext(AppContext)
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
            <Logo>Messenger</Logo>
        </LeftWrapper>         
         <RightWrapper>
             <span style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:'10px'}}>
                <Image src={loggedUser.photoURL} alt=''/>
                <UserName>{loggedUser.displayName}</UserName>
             </span>            
             <LogoutButton onClick={logoutFn}>Logout</LogoutButton>
         </RightWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
