
import { onAuthStateChanged } from 'firebase/auth'
import React,{createContext,useEffect,useState} from 'react'
import { auth } from '../firebase'


export const AppContext=createContext()

const AppContextProvider = ({children}) => { 
 const [chats,setChats]=useState([])
 const [newMessage,setNewMessage]=useState('')
 const [loggedUser,setLoggedUser]=useState({})
 const [selectedUser,setSelectedUser]=useState(null)
 const [userChats,setUserChats]=useState([])
 const [usersList,setUsersList]=useState([])
 const [searchText,setSearchText]=useState('')
 const [error,setError]=useState(false)
 const [selected,setSelected]=useState(false)
 const [selectedProfile,setSelectedProfile]=useState({})

 useEffect(()=>{
  const unSub=onAuthStateChanged(auth,(authUser)=>{   
    setLoggedUser(authUser)
      
 })

return ()=>{
  unSub()
}
},[])


  return (
    <>
      <AppContext.Provider value={{loggedUser,setLoggedUser,
                                    chats,setChats,
                                    newMessage,setNewMessage,
                                    selectedUser,setSelectedUser,
                                    searchText,setSearchText,
                                    error,setError,
                                    usersList,setUsersList,
                                    userChats,setUserChats,
                                    selected,setSelected,
                                    selectedProfile,setSelectedProfile
                                    }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider
