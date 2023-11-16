import { styled } from "styled-components";


const ChatContainer=styled.div`
  flex:2;
  width:100%;
  height:100%;
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

const Form=styled.form`
  
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

const ImageInput=styled.input`
display: none;

`
const ChatIcons=styled.div`
 flex:0.1;
 gap:15px;
 display:flex;
 justify-content: flex-start;
 align-items: center;

`
const Emoji=styled.div`
            position: relative;
            padding: 0px 100px 50px 100px;
            width: 100%;
            top: 20px;
            left: 100px;
            
        

`

const SendButton=styled.button`
  border:none;
  font-size:1.1rem;
  background-color:#3e3c51 ;
  padding: 8px;
  color:white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

`
export {ChatContainer,ChatNavContainer,Wrapper,Form,Input,ChatIcons,Emoji,SendButton,ImageInput}