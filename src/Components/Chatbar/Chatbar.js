import React, { useContext, useEffect, useState } from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer,ChatNavContainer,Wrapper,Input, InputWrapper,ChatIcons,Button} from './style'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { AppContext } from '../../Context/AppContextProvider';
import { Timestamp, addDoc, collection, doc, orderBy, serverTimestamp, setDoc, updateDoc } from '@firebase/firestore';
import { db, storage } from '../../firebase';
import { Label } from '../../Pages/Register/style';
import { Image } from '../Users/style';
import { LeftWrapper, RightWrapper } from '../Navbar/style';
import { ref,getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { ToastContainer,toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';


const Chatbar = () => {
  const {state:{newMessage,loggedUser,selectedContact,newImage},dispatch}=useContext(AppContext)  
     

 const handleFile=(event)=>{
  
    dispatch({type:'ADD_IMAGE' ,payload:event.target.files[0]})

 }
 

  const sendMessage=async(event)=>
  {
     event.preventDefault()
     const user1=loggedUser.uid;
     console.log(loggedUser.uid)
     const user2=selectedContact.data.uid
     const combinedId= user1 > user2 ? `${user1+user2}` : `${user2+user1}`
   const chatsRef=collection(db,'chats',combinedId,'messages')
 
    /*******   Add Image   ************/
    let url;
    if(newImage==='')    
    {
      await addDoc(chatsRef,{
        displayName:loggedUser.displayName,
        message:newMessage,
        senderId:user1,
        receiverId:user2,
        timestamp:Timestamp.now()
      
      })
    }
    else
    {

      const storageRef=ref(storage,`images/${newImage}`)           // create a reference to image      
      const uploadTask=uploadBytesResumable(storageRef,newImage)
      uploadTask.on(
         error=>{
         toast.error(error.message)
         },
         ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
             url=downloadUrl;
             dispatch({type:'ADD_IMAGE',payload:downloadUrl})
            addDoc(chatsRef,{   
              message:newMessage,
              senderId:user1,
              receiverId:user2,
              media:url,
              timestamp:Timestamp.now()
            
            })
            
          }
          )
         }        
      )
        dispatch({type:'ADD_IMAGE',payload:''})
    }
    
    
    /******  If no input entered ******* */

    if (newMessage.trim()==='' && !newImage)
    {
      alert('Please enter a valid message')
      return;
    }

    
    dispatch({type:'ADD_MESSAGE',payload:''})
  
    
  }

 

 
     
  return (
    <>
      <ChatContainer>
      <ChatNavContainer>
            <Wrapper>
             {selectedContact!=='' &&  <LeftWrapper>
                  <Image src={selectedContact.data.photoURL} alt=''/>
                  <p style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'20px',padding:'10px 0px'}}>{selectedContact.data.displayName}</p>
              </LeftWrapper>
}
              <RightWrapper>
                  <VideoCameraBackOutlinedIcon fontSize='large' />
                  <PersonAddAlt1OutlinedIcon fontSize='large'  />
                  <MoreHorizOutlinedIcon fontSize='large' />
              </RightWrapper>
                
            </Wrapper>           
      </ChatNavContainer>
      <span style={{display:'flex', height:'calc(100% - 130px)',overflowY:'scroll',width:'100%',padding:'30px'}} >
    <Messages />
     <ToastContainer/>
      </span>
        <InputWrapper>        
            <Input type='text' placeholder='Type a message' onChange={(event)=>{dispatch({type:'ADD_MESSAGE',payload:event.target.value})}} value={newMessage} />
            <ChatIcons>
                 <Input type="file"  style={{ display: "none" }}  id="file"  onChange={handleFile}/>
                 <Label htmlFor='file'>
                      <AttachFileOutlinedIcon fontSize='large'/>
                 </Label>
                 <SentimentSatisfiedOutlinedIcon fontSize='large' />
                 <Button onClick={sendMessage}>Send</Button>
            </ChatIcons>
        </InputWrapper>        
      </ChatContainer>
     
    </>
  )
}

export default Chatbar
