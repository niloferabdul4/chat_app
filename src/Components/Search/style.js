
import { styled } from "styled-components"


const SearchContainer=styled.div`
padding: 20px;
width:100%;
z-index:50;
top:60px;
`

const Input=styled.input`
   width:100%;
   border: 1px solid grey;
   margin:15px 0px;
   padding: 10px;
   font-size: 1.1rem;
   background: transparent;
   outline:none;
  &:hover{
   color:grey;
  }
`


const Wrapper=styled.div`
    width:100%;
    padding: 10px;
    display: flex;
    flex-direction:row;
    align-items: center;
    cursor: pointer;
    gap:10px;
   
    background: transparent;
        &:hover{
    background-color:whitesmoke;
    }
`

const UserName=styled.p`
   font-size:1.2rem;
   font-weight:500;
`

const Message=styled.p`
   font-size:1.1rem;
   
`
const Image=styled.img`
   border-radius: 50%;
    height:50px;
    width:50px;
    cursor:pointer;
    object-fit:cover;
   
`
export {Input,SearchContainer,UserName,Message,Image,Wrapper}