
import React,{createContext,useState} from 'react'

export const AppContext=createContext()

const AppContextProvider = ({children}) => { 
 const [chats,setChats]=useState([])
 const [newMessage,setNewMessage]=useState('')
 const [user,setUser]=useState('')
 


  return (
    <>
      <AppContext.Provider value={{user,setUser,chats,setChats,newMessage,setNewMessage}}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider
