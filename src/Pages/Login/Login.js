import React  from 'react'
import { Container,Wrapper,Title,Form,InputWrapper,Label,Input,SignIn,Span } from './style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContextProvider'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { NavLink } from 'react-router-dom';
const Login = () => {
  const {setLoggedUser}=useContext(AppContext)
  const navigate=useNavigate()

  const handleSubmit=async(event)=>{
    event.preventDefault()
    const email=event.target[0].value;
    const password=event.target[1].value;
    await signInWithEmailAndPassword(auth,email,password)
    .then((authUser)=>{    
      setLoggedUser(authUser.user)
      console.log(authUser.user)
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
