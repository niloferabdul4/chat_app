const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'LOAD_CHATS':
             return {...state,chats:action.payload}

        case 'LOAD_USERS':
             return {...state,usersList:action.payload}

        case 'ADD_MESSAGE':
             return {...state,newMessage:action.payload}

        case 'ADD_IMAGE':
               return {...state,newImage:action.payload}
  
        case 'SEARCH_TEXT':
             return {...state,searchText:action.payload}

        case 'SET_LOGGED_USER':
             return {...state,loggedUser:action.payload}

        case 'SELECTED_CONTACT':
             return {...state,selectedContact:action.payload}

        case 'default':
          return {...state}
    }
}
export default reducer;