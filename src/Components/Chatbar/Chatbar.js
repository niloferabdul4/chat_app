import React, { useContext } from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer,ChatNavContainer,Wrapper,Input, InputWrapper,ChatIcons,Button} from './style'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { AppContext } from '../../Context/AppContextProvider';
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { db } from '../../firebase';



const Chatbar = () => {
  const {newMessage,setNewMessage,user}=useContext(AppContext)
  const handleChange=(event)=>
  {
    setNewMessage(event.target.value)
    console.log(event.target.value)
  }

  const sendMessage=async()=>
  {
    await addDoc(collection(db,'chats'),{
      uid:user.uid,
      displayName:user.displayName,
      message:user.newMessage,
      timestamp:serverTimestamp()
    })
  }
  return (
    <>
      <ChatContainer>
      <ChatNavContainer>
            <Wrapper>
                <VideoCameraBackOutlinedIcon/>
                <PersonAddAlt1OutlinedIcon />
                <MoreHorizOutlinedIcon/>
            </Wrapper>           
      </ChatNavContainer>
      <span style={{display:'flex', height:'calc(100% - 150px)',overflowY:'scroll',width:'100%',padding:'20px'}} >
      <Messages/>
      </span>
        <InputWrapper>        
            <Input type='text' placeholder='Type a message' onChange={handleChange} value={newMessage} />
            <ChatIcons>
                 <AttachFileOutlinedIcon />
                 <Input type="file"  style={{ display: "none" }}  id="file"   />
                 <AddPhotoAlternateOutlinedIcon />
                 <SentimentSatisfiedOutlinedIcon />
                 <Button onClick={sendMessage}>Send</Button>
            </ChatIcons>
        </InputWrapper>        
      </ChatContainer>
     
    </>
  )
}

export default Chatbar
