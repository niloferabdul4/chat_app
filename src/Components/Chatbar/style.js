import { styled } from "styled-components";


const ChatContainer=styled.div`
  flex:2;
  width:100%;
 // border:1px solid grey;
  background-color:#ECFFDC; 
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: space-between;


`


const ChatNavContainer=styled.div`
  height:80px;
  width:100%;
  background-color: #075E54;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        color: lightgray;
        position:sticky;
        border-left:2px solid grey;

`

const Wrapper=styled.div`

display: flex;
flex-direction:row;
justify-content:space-between;
align-items: center;
color:white;
gap:15px;
width:100%;
`

const InputWrapper=styled.div`
  
  height:60px;
  width:100%;
  background-color:lightgreen;
  padding: 10px;
  display:flex;
  justify-content: space-between;
  gap:10px;
 

`
const Input=styled.input`
flex:0.9;
padding:20px;
border:none;
outline:none;

 font-size: 1.1rem;
`

const ChatIcons=styled.div`
 flex:0.1;
 gap:15px;
 display:flex;
 justify-content: flex-start;
 align-items: center;

`

const Button=styled.button`
  border:none;
  font-size:1.1rem;
  background-color:#3e3c51 ;
  padding: 8px;
  color:white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

`
export {ChatContainer,ChatNavContainer,Wrapper,InputWrapper,Input,ChatIcons,Button}