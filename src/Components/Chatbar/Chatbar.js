import React, { useContext, useEffect } from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer,ChatNavContainer,Wrapper,Input, InputWrapper,ChatIcons,Button} from './style'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { AppContext } from '../../Context/AppContextProvider';
import { Timestamp, addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { db } from '../../firebase';
import { Label } from '../../Pages/Register/style';



const Chatbar = () => {
  const {newMessage,setNewMessage,loggedUser,selectedProfile}=useContext(AppContext)  

  const handleChange=(event)=>
  {
    setNewMessage(event.target.value)
    
  }

  const sendMessage=async()=>
  {
      await addDoc(collection(db,'chats'),{
      uid:loggedUser.uid,
      displayName:loggedUser.displayName,
      message:newMessage,
      senderId:loggedUser.uid,
      receiverId:selectedProfile.uid,
      timestamp:Timestamp.now()
    })

   console.log(selectedProfile)
    /******  If no input entered ******* */

    if (newMessage.trim()==='')
    {
      alert('Please enter a valid message')
      return;
    }
    setNewMessage('')
    
    
  }
  return (
    <>
      <ChatContainer>
      <ChatNavContainer>
            <Wrapper>
                <VideoCameraBackOutlinedIcon fontSize='large' />
                <PersonAddAlt1OutlinedIcon fontSize='large'  />
                <MoreHorizOutlinedIcon fontSize='large' />
            </Wrapper>           
      </ChatNavContainer>
      <span style={{display:'flex', height:'calc(100% - 130px)',overflowY:'scroll',width:'100%',padding:'30px'}} >
    <Messages />

      </span>
        <InputWrapper>        
            <Input type='text' placeholder='Type a message' onChange={handleChange} value={newMessage} />
            <ChatIcons>
                 <Input type="file"  style={{ display: "none" }}  id="file"  />
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
