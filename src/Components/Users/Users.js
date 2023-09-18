import React, { useContext,useEffect } from 'react'
import { UsersContainer} from './style'
import { AppContext } from '../../Context/AppContextProvider'
import { Wrapper,UserName,Image } from '../Search/style'
import { onSnapshot,collection, addDoc,query,orderBy,where, doc } from '@firebase/firestore'
import { db } from '../../firebase'
import { serverTimestamp } from '@firebase/firestore'
import { v4 as uuidv4 } from 'uuid';

const Users = () => {
  
  const {usersList,setUsersList,loggedUser,setSelectedProfile}=useContext(AppContext)

  useEffect(()=>{
    const usersRef=collection(db,'users')
    const q=query(usersRef,where("email","not-in",[loggedUser.email]))
    const unSub=onSnapshot(q,(snapshot)=>{
          const res=snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
          }))
          setUsersList(res)
          console.log(res)
          })

      return ()=>unSub()
  },[])

  const selectUser=(user)=>{
     setSelectedProfile(user)
  }

  return (
    <>
      <UsersContainer>
        <p style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Group Members</p>
    {usersList.map(user=>{return   <>
    
        <Wrapper role='button' key={user.id}  onClick={()=>selectUser(user)}>           
             <Image src={user.data.photoURL} alt=''/>
             <span style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'flex-start',marginLeft:'15px'}}>
                 <UserName>{user.data.displayName}</UserName> 
                 <p></p>            
             </span>  
         </Wrapper>
       

    </>
    
    })}
        </UsersContainer>
    </>
  )
}

export default Users
