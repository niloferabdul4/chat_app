import React from 'react'
import { Image } from '../Users/style'
import image from '../../assets/agent5.png' 
import  {MessageContent,MessageInfo,MessagesContainer,Container}  from './style'
const Messages = () => {
  return (
    <>
     <Container id='owner'>
      <MessagesContainer id='owner'>
    
            <MessageInfo>
            <Image src={image} alt=''  />
            <p>just now</p>
        </MessageInfo>
        <MessageContent id='owner'>
             <p>How r u..</p>

        </MessageContent>
       
      </MessagesContainer>
      </Container>
    </>
  )
}

export default Messages
