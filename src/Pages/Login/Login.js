import React,{useEffect, useState} from 'react'
import { Container,Wrapper,Title,Form,InputWrapper,Label,Input,SignIn,Span,ErrorLabel } from './style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { NavLink } from 'react-router-dom';
const Login = () => {
  const {setUser}=useContext(AppContext)
  const navigate=useNavigate()
/*
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user)
      {
        setUser(user)       
      }
      else{
        setUser(null)
      }
    
    })
    },[])
    
*/



  const handleSubmit=async(event)=>{
    event.preventDefault()
    const email=event.target[0].value;
    const password=event.target[1].value;
    await signInWithEmailAndPassword(auth,email,password)
    .then((authUser)=>{    
      setUser(authUser.user)
      navigate('/')
  
    })

    .catch((error)=>toast.error(error.message))
    
  }
  return (

       <Container>           
         
                        <Wrapper>
                        <Title>Sign In</Title>
                        <Form onSubmit={handleSubmit}>
                                    <InputWrapper>
                                            <Label htmlFor='email'>Email</Label>
                                            <Input type='text' 
                                            placeholder='Email' 
                                            id='email' 
                                            />   
                                        <ToastContainer />   
                                    </InputWrapper>
                                    <InputWrapper>
                                            <Label html='password'>Password</Label>
                                            <Input type='password' 
                                            placeholder='Password'  
                                            id='password'  
                                            />
                                            <ToastContainer/>
                                    </InputWrapper>                            

                                    <SignIn>Login</SignIn>
                    
                                    <Span>
                                            <Label>New User?</Label>
                                            <NavLink to='/register'  style={{marginLeft:'10px', fontSize: '16px', color:'blue' , textDecoration:'none'}}>Create An Account</NavLink>
                                    </Span>
                      </Form>     
                                
                      </Wrapper>   
                              
        </Container> 
       
  )
}

export default Login
