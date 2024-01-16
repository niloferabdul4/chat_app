import React, { useContext } from 'react'
import { NavbarContainer, LeftWrapper, RightWrapper, UserName, LogoutButton } from './style';
import { Image } from '../Users/style';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AppContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
  const { state: { loggedUser }, dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  const logoutFn = () => {
    signOut(auth)
      .then((authUser) => {
        dispatch({ type: 'SET_LOGGED_USER', payload: authUser })
        navigate('/login')
      })
      .catch(error => console.log(error.message))
  }
  return (
    <>
      <NavbarContainer>
        <LeftWrapper>
          <WhatsAppIcon fontSize='large'/>
        </LeftWrapper>
        <RightWrapper>
          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
            <Image src={loggedUser.photoURL} alt='' />
            <UserName>{loggedUser.displayName}</UserName>
          </span>
          <LogoutButton onClick={logoutFn}>Logout</LogoutButton>
        </RightWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
