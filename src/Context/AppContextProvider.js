
import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { auth } from '../firebase'
import reducer from './reducer'
export const AppContext = createContext()

const AppContextProvider = ({ children }) => {

  useEffect(() => {

    const unSub = onAuthStateChanged(auth, (authUser) => {
      dispatch({ type: 'SET_LOGGED_USER', payload: authUser })


    })
    return () => {
      unSub()
    }
  }, [])


  const initialState = {
    chats: [],
    usersList: [],
    loggedUser: null,
    searchText: '',
    selectedContact: null,
    error: false,
    selected: false,


  }
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider
