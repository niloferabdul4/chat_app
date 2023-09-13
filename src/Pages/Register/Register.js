import React, { useState } from 'react'
import { RegisterContainer,Wrapper,Title,Form,InputWrapper,FileWrapper,Label,Input,Button,SignIn,UploadLabel} from './style';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../firebase';
import { getDownloadURL } from 'firebase/storage';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, doc, setDoc } from '@firebase/firestore';


const Register = () => {
    const [formData,setFormData]=useState({name:'',email:'',password:'',file:''})
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

        /*
        try
        {
          const res=await createUserWithEmailAndPassword(auth,formData.email,formData.password)    

          //create a unique image name    
          const storageRef=ref(storage,formData.name)
   
         //Upload file to the object 'images/mountains.jpg'   
           uploadBytesResumable(storageRef, formData.file).then(()=>
              
                 {
                                                                                            // Handle successful uploads on complete    
                   getDownloadURL(storageRef).then(async(downloadURL) => {
                           await updateProfile(res.user,{
                                 displayName:res.user.name,
                                 photoURL:downloadURL
                             })                    //  update user profile 

                             setDoc(doc(db,'users',res.user.uid),{               // add user profile to users collection
                              uid:res.user.uid,
                              displayName:formData.name,
                              email:formData.email,
                               photoURL:downloadURL
                             })
                        
                   });  

                  
                 
                  }
                )

        }
        catch(error)
        {
           toast.error(error.message)
        }
*/


}

  return (
    <div>
        <RegisterContainer >           
           <Wrapper>
              <Title>Create Acccount</Title>
              <Form onSubmit={handleSubmit}>
                        <InputWrapper>
                               <Label htmlFor='name'>Name</Label>
                               <Input  
                                       type='text' 
                                       id='name'
                                       value={formData.name}
                                       name='name'  
                                       placeholder='Name'
                                       onChange={handleChange}
                               />
                          <ToastContainer/>      
                       </InputWrapper>

                       <InputWrapper>
                               <Label htmlFor='email'>Email</Label>
                               <Input 
                                       type='email'
                                       id='email'
                                       placeholder='Email'
                                       value={formData.email}
                                       name='email'
                                       onChange={handleChange}
                                />                                                                   
                              
                          <ToastContainer/>      
                       </InputWrapper>
                       <InputWrapper>
                               <Label htmlFor='pwd'>Password</Label>
                               <Input 
                                       type='password' 
                                       id='pwd'
                                       placeholder='Password'
                                       value={formData.password}
                                       name='password'
                                       onChange={handleChange}
                               />                                                                  
                              
                           <ToastContainer/>   
                       </InputWrapper>
                       <FileWrapper>
                              
                               <Input  
                                       type='file' 
                                       id='file'
                                       value={formData.file}
                                       onChange={handleChange}
                                       style={{display:'none'}}
                               />
                               <UploadLabel htmlFor='file'>                             
                                 <AddAPhotoOutlinedIcon  style={{color:'grey',cursor:'pointer'}}/>
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
