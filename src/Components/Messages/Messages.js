import React, { useContext, useEffect } from 'react'
import  {MessageContent,MessagesContainer,Container}  from './style'
import { AppContext } from '../../Context/AppContextProvider'
import Moment from 'react-moment'

const Messages = () => {

const {state:{loggedUser,selectedContact,chats}}=useContext(AppContext)
console.log(chats)
//console.log(loggedUser.displayName,loggedUser.uid)
  return (
    <>
      <Container>     
        <MessagesContainer> 
          {selectedContact ==='' ? 
       ( <p style={{fontSize:'24px'}}>Select a user to start a conversation</p> )
          :
       ( 
       chats?.map(user=>{return <> 
            
          <MessageContent key={user.id} id={user.data.senderId===loggedUser.uid? ('owner') :''}>
              
              <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'10px'}}>
                <b style={{color:'orangered',fontSize:'1.2rem'}}>{user.data.displayName}</b>
                <p> {user.data.media? (<img src={user.data.media} alt=''/>) : ''}
                     {user.data.message}
                     
                </p>
                <small>
                  
                  <Moment fromNow>{user.data.timestamp}</Moment>
                </small>
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
