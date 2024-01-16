import React, { useContext, useState } from 'react'
import { RegisterContainer,Wrapper,Title,Form,InputWrapper,FileWrapper,Label,Input,Button,SignIn,UploadLabel} from './style';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../firebase';
import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from '@firebase/firestore';
import { AppContext } from '../../Context/AppContextProvider';


const Register = () => {

  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [file,setFile]=useState('')

/**********    HandleSubmit Function   *********/

    const handleSubmit=async(event)=>
    {
        event.preventDefault();
       console.log(name,email,password,file.name)

        try
        {
          const res=await createUserWithEmailAndPassword(auth,email,password)    
          
          //create a unique image name    
          const storageRef=ref(storage,name)
   
         //Upload file to the object 'images/mountains.jpg'   
           uploadBytesResumable(storageRef, file).then(()=>              
                 {
                                                                                            // Handle successful uploads on complete    
                   getDownloadURL(storageRef).then(async(downloadURL) => {
                           await updateProfile(res.user,{                      //  update user profile 
                                 displayName:name,
                                 photoURL:downloadURL
                             })                    

                             
                              // add user profile to users collection

                             setDoc(doc(db,'users',res.user.uid),{              
                              uid:res.user.uid,
                              displayName:name,
                              email:email,
                              photoURL:downloadURL,
                              
                             })

                           
                             navigate('/')
                            
                        
                   });  

                 
                 
                  }
                )

        }
        catch(error)
        {
           toast.error(error.message)
        }



}

  return (
    <div>
        <RegisterContainer >           
           <Wrapper>
              <Title>Create Acccount</Title>
              <Form onSubmit={handleSubmit}>
                        <InputWrapper>
                               <Label htmlFor='name'>Name</Label>
                               <Input type='text' id='name' placeholder='Name' onChange={(e)=>setName(e.target.value)} />
                          <ToastContainer/>      
                       </InputWrapper>
                       <InputWrapper>
                               <Label htmlFor='email'>Email</Label>
                               <Input type='email'  id='email' placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} />                                                                                            
                          <ToastContainer/>      
                       </InputWrapper>
                       <InputWrapper>
                               <Label htmlFor='pwd'>Password</Label>
                               <Input type='password'  id='pwd' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />                                                                                   
                           <ToastContainer/>   
                       </InputWrapper>
                       <FileWrapper>                              
                               <Input  type='file'  id='file'   style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}  />
                               <UploadLabel htmlFor='file'>                             
                                 <AddAPhotoOutlinedIcon  style={{color:'grey',cursor:'pointer'}}/>
                                 <span>Add an avatar</span>
                               </UploadLabel>
                          <ToastContainer/>      
                       </FileWrapper>
                       <Button type='submit'>Sign Up</Button>                                            
                       <SignIn>Already have an account?  <Link to='/login'> Sign In </Link> </SignIn>
              </Form>
           </Wrapper>                
       </RegisterContainer>
    </div>
  )
}

export default Register
