
import { styled } from "styled-components"

const UsersContainer=styled.div`
    padding: 10px;
    width:100%;

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
    background-color:grey;
    }
`

const UserName=styled.p`
   font-size:1.1rem;
   font-weight:500;
`

const Message=styled.p`
   font-size:0.96rem;
   
`
const Image=styled.img`
   border-radius: 50%;
    height:40px;
    width:40px;
    cursor:pointer;
    object-fit:cover;
   
`
export {Wrapper,UsersContainer,Image,UserName,Message}