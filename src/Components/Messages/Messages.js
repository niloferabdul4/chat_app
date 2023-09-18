import React, { useContext, useEffect } from 'react'
import  {MessageContent,MessagesContainer,Container}  from './style'
import { AppContext } from '../../Context/AppContextProvider'

const Messages = () => {

const {loggedUser,selectedProfile,setChats,chats,messages,setMessages}=useContext(AppContext)

  return (
    <>
      <Container>     
        <MessagesContainer> 
          {selectedProfile ==='' ? 
       ( <p style={{fontSize:'24px'}}>Select a user to start a conversation</p> )
          :
       ( 
       chats?.map(user=>{return <> 
            
          <MessageContent key={user.id} id={user.data.senderId===loggedUser.uid? ('owner') :''}>
              
              <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'10px'}}>
                <b style={{color:'orangered',fontSize:'1.2rem'}}>{user.data.displayName}</b>
                <p style={{fontSize:'1.2rem'}}>{user.data.message}</p>
              </span>
          </MessageContent>        
           </>})  
   
      )
    }
         </MessagesContainer> 
      
      </Container>
    </>
     
      
  )
}

export default Messages
