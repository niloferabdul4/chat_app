
import { onAuthStateChanged } from 'firebase/auth'
import React,{createContext,useEffect,useState} from 'react'
import { auth } from '../firebase'


export const AppContext=createContext()

const AppContextProvider = ({children}) => { 
 const [chats,setChats]=useState([])
 const [newMessage,setNewMessage]=useState('')
 const [loggedUser,setLoggedUser]=useState({})
 const [users,setUsers]=useState([])
 
 useEffect(()=>{
  const unSub=onAuthStateChanged(auth,(authUser)=>{   
    setLoggedUser(authUser)
    console.log(authUser)
  
 })

return ()=>{
  unSub()
}
},[])


  return (
    <>
      <AppContext.Provider value={{loggedUser,setLoggedUser,chats,setChats,newMessage,setNewMessage,users,setUsers}}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider
