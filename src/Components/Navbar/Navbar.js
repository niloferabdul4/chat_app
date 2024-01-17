import React, { useContext } from 'react'
import { NavbarContainer, LeftWrapper, RightWrapper, UserName, LogoutButton,Logo } from './style';
import { UserImage } from '../Users/style';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AppContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LogoutIcon from '@mui/icons-material/Logout';
import { Logout } from '@mui/icons-material';

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
          <Logo>
          <WhatsAppIcon fontSize='large'/>
          </Logo>
        </LeftWrapper>
        <RightWrapper>
          <span style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '6px' }}>
            <UserImage src={loggedUser.photoURL} alt='' />
            <UserName>{loggedUser.displayName}</UserName>
          </span>
          <LogoutButton onClick={logoutFn}>
          <p>Logout</p>
          <Logout fontSize='30'/>
          </LogoutButton>
        </RightWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
