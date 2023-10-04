import React, { useContext, useEffect, useState } from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer,ChatNavContainer,Wrapper,Input, InputWrapper,ChatIcons,Button} from './style'
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


const Chatbar = () => {
  const {state:{newMessage,loggedUser,selectedContact,newImage},dispatch}=useContext(AppContext)  
  const inputRef = useRef();

  useEffect(() => {
    selectedContact!=='' && 
    inputRef.current.focus();
  }, []);



  const sendMessage=async()=>
{
  if(!newMessage && !newImage)
  {
    return;                                       // dont send messagres
  
  }
  try{
     const user1=loggedUser.uid;
     // console.log(loggedUser.uid)
     const user2=selectedContact.data.uid
     const combinedId= user1 > user2 ? `${user1+user2}` : `${user2+user1}`
     const chatsRef= collection(db,'chats',combinedId,'messages')
 
    /*******   Add Image   ************/
    if(newImage)
     {
     
      const storageRef=ref(storage,`images/${newImage.name}`)           // create a reference to image   
      //console.log(storageRef)   
      const uploadTask=uploadBytesResumable(storageRef,newImage)
      uploadTask.on('state_changed',
         error=>{
         toast.error(error.message)
         },
         ()=>{
              getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl)=>{
                dispatch({type:'ADD_IMAGE',payload:downloadUrl})
               console.log(downloadUrl)
              
                await addDoc(chatsRef,{   
                                  message:newMessage,
                                  senderId:user1,
                                  receiverId:user2,
                                  media:downloadUrl,
                                  timestamp:Timestamp.now()                
                            });
                
              });
              
                      
             }        
      )
   }
   else
   {
    await addDoc(chatsRef,{
                displayName:loggedUser.displayName,
                message:newMessage,
                senderId:user1,
                receiverId:user2,
                timestamp:Timestamp.now()             
                });
 
  }    
    
  dispatch({type:'ADD_INPUT',payload:''})
  //dispatch({type:'ADD_IMAGE',payload:null})    
  }
  catch (error)
  {
    toast.error('Error sending message')
  }
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
   <InputWrapper>        
            <Input type='text' 
                  placeholder='Type a message'
                  value={newMessage}
                  ref={inputRef}
                  onChange={(event)=>{ dispatch({type:'ADD_INPUT', payload:event.target.value})}}
               />
            <ChatIcons>
                 <Input type="file"  
                        style={{ display: "none" }}  
                        id="file" 
                        onChange={(event)=>{   
                                              const image=event.target.files[0];
                                              dispatch({type:'ADD_IMAGE',payload:image})
                                            }}/>
                 <Label htmlFor='file'>
                      <AttachFileOutlinedIcon fontSize='large'  src={newImage}/>
                     
                 </Label>
                 <SentimentSatisfiedOutlinedIcon fontSize='large' />
                 <Button onClick={sendMessage}>Send</Button>
            </ChatIcons>
        </InputWrapper>   
       )}
      </ChatContainer>
  </>
  )}
export default Chatbar;

