import React from 'react'
import Messages from '../Messages/Messages'
import { ChatContainer,ChatNavContainer,Wrapper,Input, InputWrapper,ChatIcons,Button} from './style'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';


const Chatbar = () => {
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
        <Messages/>
        <InputWrapper>        
            <Input type='text' placeholder='Type a message' />
            <ChatIcons>
                 <AttachFileOutlinedIcon />
                 <Input type="file"  style={{ display: "none" }}  id="file"  />
                 <AddPhotoAlternateOutlinedIcon />
                 <SentimentSatisfiedOutlinedIcon />
                 <Button>Send</Button>
            </ChatIcons>
        </InputWrapper>        
      </ChatContainer>
     
    </>
  )
}

export default Chatbar
