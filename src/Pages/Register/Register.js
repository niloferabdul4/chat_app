import React, { useState } from 'react'
import { RegisterContainer,Wrapper,Title,Form,InputWrapper,FileWrapper,Label,Input,Button,SignIn,UploadLabel} from './style';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const Register = () => {
    const [formData,setFormData]=useState({Name:'',Email:'',Password:'',Photo:''})
    const [error,setError]=useState(false)
    const navigate=useNavigate()


/*********   HandleChange Function   *********/

    const handleChange=(event)=>
    {
        const {name,value}=event.target;
        setFormData(prevData=>({...prevData,[name]:value}))
    }


/**********    HandleSubmit Function   *********/

    const handleSubmit=async(event)=>
    {
        event.preventDefault();
      await createUserWithEmailAndPassword(auth,formData.Email,formData.Password)
      .then((auth)=>{
        if(auth)
        {
            navigate('/')
        }
        })
       .catch((error)=>
       {
        setError(true)
        toast.error(error.message)
       })

}

/**********     File Upload Function    **********/

    const fileUpload=()=>
    {

    }
  return (
    <div>
        <RegisterContainer >           
           <Wrapper>
              <Title>Create Acccount</Title>
              <Form onSubmit={handleSubmit}>
                        <InputWrapper>
                               <Label htmlFor='name'>Name</Label>
                               <Input  required
                                       type='text' 
                                       id='name'
                                       value={formData.Name}
                                       name='Name'  
                                       placeholder='Name'
                                       onChange={handleChange}
                               />
                          <ToastContainer/>      
                       </InputWrapper>

                       <InputWrapper>
                               <Label htmlFor='email'>Email</Label>
                               <Input  required
                                       type='email'
                                       id='email'
                                       placeholder='Email'
                                       value={formData.Email}
                                       name='Email'
                                       onChange={handleChange}
                                />                                                                   
                              
                          <ToastContainer/>      
                       </InputWrapper>
                       <InputWrapper>
                               <Label htmlFor='pwd'>Password</Label>
                               <Input  required
                                       type='password' 
                                       id='pwd'
                                       placeholder='Password'
                                       value={formData.Password}
                                       name='Password'
                                       onChange={handleChange}
                               />                                                                  
                              
                           <ToastContainer/>   
                       </InputWrapper>
                       <FileWrapper>
                              
                               <Input  required
                                       type='file' 
                                       id='file'
                                       value={formData.Photo}
                                       style={{display:'none'}}
                               />
                               <UploadLabel htmlFor='file'>                             
                                 <AddAPhotoOutlinedIcon onClick={fileUpload} style={{color:'grey',cursor:'pointer'}}/>
                                 <span>Add an avatar</span>
                               </UploadLabel>
                          <ToastContainer/>      
                       </FileWrapper>

                       <Button type='submit'>Continue</Button>
                                            
                       <SignIn>Already have an account?  <Link to='/login'> Sign In </Link> </SignIn>
              </Form>

           </Wrapper>
                

                
       </RegisterContainer>
    </div>
  )
}

export default Register
