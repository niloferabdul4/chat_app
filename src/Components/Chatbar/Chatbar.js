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
import { Image } from '../Users/style';
import { LeftWrapper, RightWrapper } from '../Navbar/style';


const Chatbar = () => {
  const {newMessage,setNewMessage,loggedUser,selectedProfile}=useContext(AppContext)  

  const handleChange=(event)=>
  {
    setNewMessage(event.target.value)
    
  }

  const sendMessage=async()=>
  {
     const user1=loggedUser.uid;
     const user2=selectedProfile.data.uid
     const combinedId= user1 > user2 ? `${user1+user2}` : `${user2+user1}`
      //console.log(user1)
      //console.log(user2)
      await addDoc(collection(db,'chats',combinedId,'messages'),{
      displayName:loggedUser.displayName,
      message:newMessage,
      senderId:user1,
      receiverId:user2,
      timestamp:Timestamp.fromDate(new Date())
      
      
    })

   
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
             {selectedProfile!=='' &&  <LeftWrapper>
                  <Image src={selectedProfile.data.photoURL} alt=''/>
                  <p style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'20px',padding:'10px 0px'}}>{selectedProfile.data.displayName}</p>
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
