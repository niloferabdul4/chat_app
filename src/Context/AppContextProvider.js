import React, { useReducer } from 'react'
import { createContext } from 'react'
import reducer from './reducer'
export const AppContext=createContext()

const AppContextProvider = ({children}) => { 

const initialState={user:'',chats:[]}
const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <AppContext.Provider value={{state,dispatch}}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider
