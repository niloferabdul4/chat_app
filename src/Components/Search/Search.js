import React, { useContext} from 'react'
import { Input,SearchContainer,UserName,Message,Image,Wrapper } from './style'
import { AppContext } from '../../Context/AppContextProvider'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../firebase'
import { ToastContainer } from 'react-toastify'


const Search = () => {
  const {searchText,setSearchText,setSelectedUser,selectedUser,setError,error}=useContext(AppContext)
 
  const handleChange=(event)=>{
    setSearchText(event.target.value)
  }

  const handleSearch=async()=>{
    
    try{
      const usersRef=collection(db,'users')
      const queryRef=query(usersRef,where('displayName','==',searchText))
      const querySnapshot=await getDocs(queryRef)
      querySnapshot.docs.map(doc=>{setSelectedUser(doc.data())})   
    
    }
    catch(error){
     setError(true)
    }
  
  }
  const handleKey=(event)=>{
    event.code==='Enter'  && handleSearch()
    
  }
  return (
    <>
      <SearchContainer>
           <Input type='text' value={searchText}  onChange={handleChange} onKeyDown={handleKey} placeholder='Search or start a new chat'/>
           { error && <span>User Not Found!</span>}

           {selectedUser!==null &&
            <>           
           <Wrapper>           
             <Image src={selectedUser.photoURL} alt=''/>
             <span style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'flex-start',marginLeft:'15px'}}>
                 <UserName>{selectedUser.displayName}</UserName>
                 <Message>{selectedUser.email}</Message>                 
             </span>  
         </Wrapper>
         </>
}
      </SearchContainer>
      
    </>
  )
}

export default Search
