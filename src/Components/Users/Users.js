import React, { useContext,useEffect, useState } from 'react'
import { UsersContainer,Wrapper,UserName,Image} from './style'
import { AppContext } from '../../Context/AppContextProvider'
import { onSnapshot,collection, addDoc,query,orderBy,where, doc, limit } from '@firebase/firestore'
import { db } from '../../firebase'


const Users = () => {
  
  const {state:{usersList,loggedUser,selectedContact,user},dispatch}=useContext(AppContext)
 //console.log(loggedUser)
 
  useEffect(()=>{

    const usersRef=collection(db,'users')
    const q=query(usersRef,where("email","not-in",[loggedUser.email]))       // display all users except logged user
    const unSub=onSnapshot(q,(snapshot)=>{
          const res=snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
          }))
          dispatch({type:'LOAD_USERS',payload:res})
        
        
          })

      return ()=>unSub()
  },[])
  
  const selectUser=(user)=>{
    
    dispatch({type:'SELECTED_CONTACT',payload:user})        
     const user1=loggedUser.uid;                                                //  logged user
     const user2=user.data.uid   
                           // selectedProfile
     const combinedId= user1 > user2 ? `${user1+user2}` : `${user2+user1}`      // combine both

      onSnapshot(collection(db,'chats',combinedId,'messages'),orderBy('timestamp','asc'),snapshot=>{
        const res=snapshot.docs.map(doc=>({id:doc.id,data:doc.data()}))
        dispatch({type:'LOAD_CHATS',payload:res})
      // console.log(res)
  })  


  }

  return (
    <>
      <UsersContainer>
        <p style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'24px',padding:'20px 0px',borderBottom:'1px solid grey'}}>Contacts</p>
    {usersList?.map(user=>{return   <>
    
        <Wrapper role='button' key={user.id}  onClick={()=>selectUser(user)}  id={selectedContact===user ? 'selected':''} >           
             <Image src={user.data.photoURL} alt=''/>
             <span style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'flex-start',marginLeft:'15px'}}>
                 <UserName>{user.data.displayName}</UserName>  
             </span>  
         </Wrapper>
      
    </>
    
    })}
        </UsersContainer>
    </>
  )
}

export default Users
