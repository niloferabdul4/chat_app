
import { styled } from "styled-components"

const UsersContainer=styled.div`
  padding: 10px;
  width:100%;
  display:flex;
  flex-direction: column;
  flex-grow:1;
  height: calc(100% - 80px);
  position: sticky;
  top: 80px;
  overflow-y:auto;

             
  ::-webkit-scrollbar{
        width: 2px;
        background-color: lightgreen;
        }

    @media (min-width:368px)and (max-width: 600px) {
       padding:5px;
       }
  
  @media (min-width:601px)and (max-width: 820px) {
       padding: 8px;
       }
       
`


const Wrapper=styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    cursor: pointer;
    gap:10px;
    padding:20px;
    background: ${props=>props.id==='selected' ? 'lightgrey' : 'transparent'};
        &:hover{
              background-color:lightgrey;
    }
    @media (min-width:368px)and (max-width: 600px) {
    padding:10px 5px;
  }
  
  @media (min-width:601px)and (max-width: 820px) {
    padding:10px 8px;
  }
    
`

const UsersTitle=styled.h3`
  font-family:sans-serif;
  font-weight:500;
  padding: 20px 0px;
  border-bottom: 1px solid grey;
  @media (min-width:368px)and (max-width: 600px) {
   font-size: 17px;
  }
  
  @media (min-width:601px)and (max-width: 820px) {
    font-size:19px;
  }

`
const UserName=styled.p`
   font-size:1.2rem;
   @media (min-width:368px)and (max-width: 600px) {
   display: none;
  }
  
  @media (min-width:601px)and (max-width: 820px) {
    display: none;
  }
   
`

const UserImage=styled.img`
   border-radius: 50%;
    height:40px;
    width:40px;
    cursor:pointer;
    object-fit:cover;
    @media (min-width:320px)and (max-width: 600px) {
      height:35px;
    width:35px;
    
  }
  @media (min-width:601px)and (max-width: 820px) {
 display: none;
  }

`
export {UsersContainer,Wrapper,UserName,UsersTitle,UserImage}