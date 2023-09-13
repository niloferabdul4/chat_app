import React,{useContext} from 'react'
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

/**********    HandleSubmit Function   *********/

    const handleSubmit=async(event)=>
    {
        event.preventDefault();
        const name=event.target[0].value;
        const email=event.target[1].value;
        const password=event.target[2].value
        const file=event.target[3].files[0]
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
                                 displayName:res.user.name,
                                 photoURL:downloadURL
                             })                    

                             
                              // add user profile to users collection

                             setDoc(doc(db,'users',res.user.uid),{              
                              uid:res.user.uid,
                              displayName:name,
                              email:email,
                               photoURL:downloadURL
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
                               <Input type='text' id='name' placeholder='Name' />
                          <ToastContainer/>      
                       </InputWrapper>
                       <InputWrapper>
                               <Label htmlFor='email'>Email</Label>
                               <Input type='email'  id='email' placeholder='Email'  />                                                                                            
                          <ToastContainer/>      
                       </InputWrapper>
                       <InputWrapper>
                               <Label htmlFor='pwd'>Password</Label>
                               <Input type='password'  id='pwd' placeholder='Password'  />                                                                                   
                           <ToastContainer/>   
                       </InputWrapper>
                       <FileWrapper>                              
                               <Input  type='file'  id='file'   style={{display:'none'}}   />
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
