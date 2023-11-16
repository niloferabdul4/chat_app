const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'LOAD_CHATS':
             return {...state,chats:action.payload}

        case 'LOAD_USERS':
             return {...state,usersList:action.payload}

        case 'ADD_TEXT':
             return {...state,text:action.payload}

        case 'ADD_IMAGE':
               return {...state,newImage:action.payload}

        case 'ADD_IMAGEURL':
                    return {...state,newImageUrl:action.payload}
     
        case 'SEARCH_TEXT':
             return {...state,searchText:action.payload}

        case 'SET_LOGGED_USER':
             return {...state,loggedUser:action.payload}

        case 'SELECTED_CONTACT':
             return {...state,selectedContact:action.payload}

         default:
          return state;
    }
}
export default reducer;