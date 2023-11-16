import React, { useContext, useEffect, useState } from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer,ChatNavContainer,Wrapper,Input, Form,ChatIcons,SendButton} from './style'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { AppContext } from '../../Context/AppContextProvider';
import { Timestamp,collection,addDoc } from '@firebase/firestore';
import { storage,db} from '../../firebase';
import { Label } from '../../Pages/Register/style';
import { Image } from '../Users/style';
import { LeftWrapper, RightWrapper } from '../Navbar/style';
import { ref,getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { ToastContainer,toast } from 'react-toastify';
import { useRef } from 'react';
import { IconButton } from '@mui/material';


const Chatbar = () => {
  const {state:{text,loggedUser,selectedContact,newImage,newImageUrl},dispatch}=useContext(AppContext)  

  const uploadFile=()=>{
    document.getElementById('file').click();         // click the file with id 'imageFile' ie) input choose file

}
 

  const sendMessage=async(event)=>
{
  
  event.preventDefault()
  const user1=loggedUser.uid;
  const user2=selectedContact.data.uid
 console.log(user1)
 console.log(user2)
  const combinedId= user1 > user2 ? (`${user1+user2}`) : (`${user2+user1}`)
  console.log(combinedId)


 /*******   Add Image   ************/

   if(newImage)
  {
       
       const storageRef=ref(storage,`/images/${newImage.name}`)         // create a reference to image    
       const uploadImage=uploadBytesResumable(storageRef,newImage)
       uploadImage.on('state_changed',(snapshot)=>{},
                         (error)=>console.log(error.message),
                         ()=>{
                             getDownloadURL(uploadImage.snapshot.ref)
                             .then((url)=>dispatch({type:'ADD_IMAGEURL',payload:url}))
                             .catch((error)=>console.log(error.message))
                         }
                       )
      
        
               
      }
     
      await addDoc(collection(db,'chats',combinedId,'messages'),{  
        displayName:loggedUser.displayName, 
        text:text,
        senderId:user1,
        receiverId:user2,
        media:newImageUrl || '',
        timestamp:Timestamp.now()               
  });

   
      

}

  
  return (
    <>
        <ChatContainer>
      <ChatNavContainer>
      { selectedContact!=='' && 
       
       ( 
     <Wrapper>
             <LeftWrapper>
                  <Image src={selectedContact.data.photoURL} alt=''/>
                  <p style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'20px',padding:'10px 0px'}}>{selectedContact.data.displayName}</p>
              </LeftWrapper>
              <RightWrapper>
                  <VideoCameraBackOutlinedIcon fontSize='large' />
                  <PersonAddAlt1OutlinedIcon fontSize='large'  />
                  <MoreHorizOutlinedIcon fontSize='large' />
              </RightWrapper>  
                    
            </Wrapper>  
       )}
      </ChatNavContainer>
      <span style={{display:'flex', height:'calc(100% - 130px)',overflowY:'scroll',width:'100%',padding:'30px'}} >
     <Messages />
     <ToastContainer/>
  
      </span>
      { selectedContact!=='' && 
       
       ( 
   <Form onSubmit={sendMessage}>        
            <Input type='text' 
                  placeholder='Type a message'
                  value={text}
                  onChange={(event)=>{ dispatch({type:'ADD_INPUT', payload:event.target.value})}}
               />
            <ChatIcons>
                 <Input type="file"  
                        style={{ display: "none" }}  
                        accept='image/*'
                        id="file" 
                        onChange={(event)=>{   
                                              const image=event.target.files[0];
                                              dispatch({type:'ADD_IMAGE',payload:image})
                                            }}/>
                <IconButton onClick={uploadFile}>
                      <AttachFileOutlinedIcon fontSize='large'/>                     
                 </IconButton>
                 <SentimentSatisfiedOutlinedIcon fontSize='large' />
                 <SendButton type='submit' >Send</SendButton>
            </ChatIcons>
        </Form>   
       )}
      </ChatContainer>
  </>
  )}
export default Chatbar;