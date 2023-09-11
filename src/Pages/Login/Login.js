import React from 'react'
import {LoginContainer,Wrapper,Button} from './style'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const Login = () => {
  const {dispatch}=useContext(AppContext)
  const navigate=useNavigate()
  const handleSubmit=async()=>{
    
    await signInWithPopup(auth,provider)
    .then((authUser)=>{
    
      dispatch({type:'SET_USER',payload:authUser.user})
      navigate('/')
  
    })

    .catch((error)=>toast.error(error.message))
    
  }
  return (
    <LoginContainer>  
        <h2 style={{margin:'20px 0px', color:'white'}}>Login</h2>  
          <ToastContainer/>
           <Wrapper>   
             <Button type='submit' onClick={handleSubmit}>Sign In With Google</Button>     
           </Wrapper>
          
    </LoginContainer>
  )
}

export default Login
