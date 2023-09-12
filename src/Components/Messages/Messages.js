import React, { useContext, useEffect } from 'react'
import { Image } from '../Users/style'
import image from '../../assets/agent5.png' 
import  {MessageContent,MessageInfo,MessagesContainer,Container}  from './style'
import { AppContext } from '../../Context/AppContextProvider'
import { onSnapshot,collection } from '@firebase/firestore'
import { db } from '../../firebase'


const Messages = () => {
  const {chats,setChats}=useContext(AppContext)

  useEffect(()=>{
    const unSub=onSnapshot(collection(db,'chats'),snapshot=>{
    setChats(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    
    })
    return ()=> unSub();
    },[])
    console.log(chats)
  return (
    <>
     <Container id='owner'>
      <MessagesContainer id='owner'>
    
            <MessageInfo>
            <Image src={image} alt=''  />
            <p>just now</p>
        </MessageInfo>
        <MessageContent id='owner'>
             <p>hello</p>

        </MessageContent>
       
      </MessagesContainer>
      </Container>
    </>
  )
}

export default Messages
