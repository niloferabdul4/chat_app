import React, { useContext, useEffect, useState } from 'react'
import { UsersContainer, Wrapper, UserName, Image } from './style'
import { AppContext } from '../../Context/AppContextProvider'
import { onSnapshot, collection,query, orderBy, where, doc,getDocs } from '@firebase/firestore'
import { db } from '../../firebase'

const Users = () => {

  const { state: { usersList, loggedUser, selectedContact,lastMessage,chats}, dispatch } = useContext(AppContext)
  // console.log('lastMsg',lastMessage)
  const currentUserUId = loggedUser.uid
  const selectedUserId = selectedContact?.uid;
  // console.log('currentUserId',currentUserUId)
  // console.log('selectedUserId',selectedUserId)

  const combinedId = currentUserUId > selectedUserId ? 
  `${currentUserUId + selectedUserId}` : `${selectedUserId + currentUserUId}`;

  // console.log('combinedId',combinedId)
  /*********  SET LAST MESSAGE **************/

  // useEffect(()=>{

  //   const unSub=onSnapshot(doc(db,'lastMessage',combinedId),(doc)=>{
  //     dispatch({type:'LOAD_LAST_MESSAGE',payload:doc.data()})
      
  //   })
  //   return ()=>unSub()
  // },[])

  /**********  FETCH CONTACTS   ************/

  useEffect(()=>{
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users')
      const q = query(usersCollection, where('uid', '!=', currentUserUId));
      const querySnapshot = await getDocs(q);
  
      const contactsData = [];
      querySnapshot.forEach((doc) => {
        contactsData.push(doc.data());
       
      });
  
      dispatch({ type: 'LOAD_USERS', payload:contactsData })
    }
   
    fetchUsers()
 
  },[])

  /**********  SELECT USER  **************/
  
  const selectUser = (user) => {

    dispatch({ type: 'SELECTED_CONTACT', payload: user })
    const user1 = loggedUser.uid;                                                //  logged user
    const user2 = user.uid
    // selectedProfile
    const combinedId = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`      // combine both
    const unSub=onSnapshot(collection(db, 'chats', combinedId, 'messages'), orderBy('timestamp', 'desc'), snapshot => {
    const chats = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()  }))
           dispatch({ type: 'LOAD_CHATS', payload: chats })
         
    })
    return ()=>{
      unSub()
    }
  }
 
  return (
    <>
      <UsersContainer>
        <p style={{ fontFamily: 'sans-serif', fontWeight: 'semi-bold', fontSize: '20px', padding: '20px 0px', borderBottom: '1px solid grey' }}>Contacts</p>
        {usersList?.map(user => {
          return <>
            <Wrapper role='button' key={user.id} onClick={() => selectUser(user)} id={selectedContact === user ? 'selected' : ''} >
              <Image src={user.photoURL} alt='' />
              <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '15px' }}>
                <UserName>{user.displayName}</UserName>
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
