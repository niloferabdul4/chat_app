import { styled } from "styled-components";

const NavbarContainer=styled.div`
  height:56px;
  width:100%;
  border-bottom:1px solid lightgrey;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  background-color: #3e3c51;
  color:white;;
  padding:10px;

`

const LeftWrapper=styled.div`


`

const Logo=styled.p`
font-weight:600;

`

const RightWrapper=styled.div`
   display: flex;
   flex-direction:row;
   align-items: center;
   justify-content: center;
   gap:10px;
`

const UserName=styled.p`

font-weight:bold;
`

const Image=styled.img`
   border-radius: 50%;
    height:24px;
    width:24px;
    cursor:pointer;
    object-fit:cover;
   
`
const LogoutButton=styled.button`
 border:none;
 background: transparent;
 color:white;
 font-size: 1rem;;
 padding:6px;
`

export {NavbarContainer,LeftWrapper,Logo,RightWrapper,UserName,LogoutButton,Image}