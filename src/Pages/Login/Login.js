import React from 'react'
import {LoginContainer,Form,Input,Button} from './style'

const Login = () => {
  return (
    <LoginContainer>  
        <h2 style={{margin:'20px 0px', color:'white'}}>Login</h2>  
    <Form>
         
            
             <Input type='text' placeholder='Name' />
            
             <Input type='text' placeholder='Email' />
             <Button type='button'>Sign In</Button>
         
    </Form>
    </LoginContainer>
  )
}

export default Login
