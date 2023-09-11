import { styled } from "styled-components";


const ChatContainer=styled.div`
  flex:2;
  width:100%;
 // border:1px solid grey;
  background-color:lavenderblush; 
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: space-between;
  overflow: hidden;
`


const ChatNavContainer=styled.div`
  height:60px;
  width:100%;
  background-color: #3e3c51;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        color: lightgray;
        position:sticky;

`

const Wrapper=styled.div`

display: flex;
flex-direction:row;
justify-content:space-between;
align-items: center;
color:white;
gap:15px;

`

const InputWrapper=styled.div`
  
  height:60px;
  width:100%;
  background-color:lightgrey;
        padding: 15px;
  display:flex;
  justify-content: space-between;
  gap:10px;
 

`
const Input=styled.input`
flex:0.9;
padding:15px;
border:none;
outline:none;
 padding:10px;
`

const ChatIcons=styled.div`
 flex:0.1;
 gap:15px;
 display:flex;
 justify-content: flex-start;


`

const Button=styled.button`
  border:none;
  background-color:#3e3c51 ;
  padding: 8px;
  color:white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

`
export {ChatContainer,ChatNavContainer,Wrapper,InputWrapper,Input,ChatIcons,Button}