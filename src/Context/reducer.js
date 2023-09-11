const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'SET_USER':
            return {...state,user:action.payload};

        case 'LOAD_CHATS':
            return {...state}
        
        default:
                return {...state}

        }

}
export default reducer;