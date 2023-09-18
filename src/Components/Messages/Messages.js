import React, { useContext, useEffect } from 'react'
import  {MessageContent,MessagesContainer,Container}  from './style'
import { AppContext } from '../../Context/AppContextProvider'
import { collection, onSnapshot, orderBy, query, where } from '@firebase/firestore'
import { db } from '../../firebase'

const Messages = () => {

const {loggedUser,chats,setChats,selectedProfile}=useContext(AppContext)

useEffect(()=>{

  const unSub=onSnapshot(collection(db,'chats'),snapshot=>{
    const res=snapshot.docs.map(doc=>({id:doc.id,data:doc.data()}))
    setChats(res)
  })
  return ()=>{
    unSub()
  }
},[])

/*
useEffect(()=>{
  
  //reference to the firestore collectn where chats are stored
     const chatRef=collection(db,'userChats')
  
  //  query chats for selectedProfile and loggedUser
     const q=query(chatRef,where('senderId','in',[selectedProfile.uid,loggedUser.uid]),   //
                      where('receiverId','in',[selectedProfile.uid,loggedUser.uid]),
                      orderBy('timestamp','asc'))   

  
  // Subscribe to changes in chats collection
     const unSub=onSnapshot(q,snapshot=>{
      const res=snapshot.docs.map(doc=>({id:doc.id,data:doc.data()}))
      console.log(res)
      setUserChats(res)
     })
 return ()=>{
  unSub()
 }
},[selectedProfile.uid,loggedUser.uid])
*/
  return (
    <>
      <Container>     
        <MessagesContainer> 
          {selectedProfile ==='' && ( <p>Select a user to start a conversation</p> )}
          
        { chats?.map(item=>{return <> 
          <MessageContent key={item.uid} id={item.data.uid===loggedUser.uid? ('owner') :''}>
              
              <span style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'10px'}}>
                <b style={{color:'orangered',fontSize:'1.2rem'}}>{item.data.displayName}</b>
                <p style={{fontSize:'1.2rem'}}>{item.data.message}</p>
              </span>
          </MessageContent>        
    </>})
   
   
      }
         </MessagesContainer> 
      
      </Container>
    </>
     
      
  )
}

export default Messages
