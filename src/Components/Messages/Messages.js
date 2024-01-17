import React, { useContext, useRef, useEffect } from 'react'
import { SenderMessageContent, ReceiverMessageContent, MessageContent, MessagesContainer, Container, Image, Wrapper } from './style'
import { AppContext } from '../../Context/AppContextProvider'
const Messages = ({ chat, index }) => {
  const { state: { loggedUser, selectedContact, chats} } = useContext(AppContext)
  const scrollRef = useRef(null)


  console.log(index)
  useEffect(() => {
    if (scrollRef.current && index === chats.length - 1) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

  }, [chats, index])


  /*******  convert time format  ********8*/
  const date = new Date((chat.data.timestamp) * 1000);

  // Format the date to a time string like "10:20 pm"
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div>
      <Container>
        <MessagesContainer id={chat.data.senderId === loggedUser.uid ? 'owner' : ''}>
          <Wrapper id={chat.data.senderId === loggedUser.uid ? 'owner' : ''}>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Image
                src={
                  chat.data.senderId === loggedUser.uid
                    ? loggedUser.photoURL
                    : selectedContact.photoURL
                }
                alt=""
              />
              <small>{formattedTime}</small>
            </span>
            <MessageContent id={chat.data.senderId === loggedUser.uid ? 'owner' : ''}>
              <p>{chat.data.text}</p>
              {chat.data.media && <img src={chat.data.media} alt="" />}
            </MessageContent>
          </Wrapper>
        
        </MessagesContainer>
 
      </Container>
      <div ref={scrollRef}></div>
     
    </div>

  )
}

export default Messages