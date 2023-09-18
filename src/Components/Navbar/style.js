import { styled } from "styled-components";

const NavbarContainer=styled.div`
  height:70px;
  width:100%;
  border-bottom:1px solid lightgrey;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items: center;
  background-color: #075E54;
  color:white;;
  padding:10px;
  z-index: 100;

`

const LeftWrapper=styled.div`
  
 
`

const Logo=styled.p`
font-weight:600;
font-size:1.4rem;

`

const RightWrapper=styled.div`
   flex:1;
   display: flex;
   flex-direction:row;
   align-items: center;
   justify-content: flex-end;
   gap:15px;
   
`

const UserName=styled.p`
font-size: 1.3rem;

`

const Image=styled.img`
   border-radius: 50%;
    height:34px;
    width:34px;
    cursor:pointer;
    object-fit:cover;
   
`
const LogoutButton=styled.button`
 border:none;
 background: transparent;
 color:white;
 font-size: 1.2em;;
 padding:6px;
 cursor: pointer;
`

export {NavbarContainer,LeftWrapper,Logo,RightWrapper,UserName,LogoutButton,Image}