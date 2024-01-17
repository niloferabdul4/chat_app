import { styled } from "styled-components";

const NavbarContainer=styled.div`
  height:80px;
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
  @media (min-width:320px)and (max-width: 600px) {
   height:60px;
  }


`
const Logo=styled.div`


@media (min-width:320px)and (max-width: 600px) {
  display:none;
  }
  @media (min-width:601px)and (max-width: 820px) {
  display: none;
  }
`
const LeftWrapper=styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap:10px;
 
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
  font-size: 1.2rem;
  @media (min-width:320px)and (max-width: 600px) {
    display:none;
    }
    @media (min-width:601px)and (max-width: 820px) {
  display: none;
    }
`

const Image=styled.img`
  border-radius: 50%;
  height:30px;
  width:30px;
  cursor:pointer;
  object-fit:contain;
  @media (min-width:320px)and (max-width: 600px) {
  display:none;
  }
  @media (min-width:601px)and (max-width: 820px) {
  display: none;
  }
   
`
const LogoutButton=styled.button`
 display: flex;
 border:none;
 background: transparent;
 color:white;
 font-size: 1.1em;
 padding: 6px;
 gap:2px;
 cursor: pointer;
 @media (min-width:320px)and (max-width: 600px) {
   padding:0px;
   p{
   display: none;
   }
  }
  @media (min-width:601px)and (max-width: 820px) {
   p{
   display: none;
   }
  }
`

export {NavbarContainer,LeftWrapper,RightWrapper,UserName,LogoutButton,Image,Logo}