import { styled } from "styled-components";


const ChatContainer = styled.div`
  width:100%;
  max-height:100vh;
  background-color:	#dcf8c6; 
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: space-between;
  position:relative;
  padding: 0px;

`

const IntroImage=styled.img`
width:100%;
margin-bottom: 20px;

`
const ChatNavContainer = styled.div`
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
  @media (min-width:320px)and (max-width: 600px) {
  height:60px;
  }


`
const ChatMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  width:100%;
  overflow-y:auto;
  padding:40px 0px;
   
            
  ::-webkit-scrollbar{
        width: 5px;
        
        }

`
const Wrapper = styled.div`

display: flex;
flex-direction:row;
justify-content:space-between;
align-items: center;
color:white;
gap:15px;
width:100%;
`


const ChatFooter = styled.div`
  bottom:0;
  left:0;
  height:60px;
  width:100%;
  position:absolute;
  background-color:lightgreen;
  display:flex;
  align-items:center;

`

const InputContainer = styled.div`
  width:100%;
  display: flex;
  align-items: center;

`

const InputWrapper = styled.form`
  height:60px;
  width:100%;
  background-color:golden;
  padding: 10px;
  display:flex;
  justify-content: space-between;
  gap:10px;
  @media (min-width:320px)and (max-width: 600px) {
   padding: 10px 6px;
  }


`
const Input = styled.input`
flex:0.9;
padding:20px;
border:none;
outline:none;
 font-size: 1rem;
 @media (min-width:320px)and (max-width: 600px) {
 padding:4px;
  }
  @media  (min-width:601px) and (max-width:820px){
padding: 6px;
  }
`

const ImageInput = styled.input`
display: none;

`
const ChatIcons = styled.div`
 flex:0.1;
 gap:15px;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 @media (min-width:320px)and (max-width: 600px) {
    gap:4px
  }
  @media  (min-width:601px) and (max-width:820px){
    gap:10px;
  }

`
const Emoji=styled.div`
            position: relative;
            width: 100%;
            top:-450px;
            right: -150px;
            transition:all 0.3s ease;
            @media (min-width:368px)and (max-width: 600px) {          
            right:420px;
            width: 80%;

            }
            @media (min-width:601px)and (max-width: 820px) {          
            right: 220px;
            width: 80%;

            }

`

const SendButton = styled.button`
  border:none;
  font-size:1.1rem;
  background-color:	#075E54;
  padding: 8px;
  color:white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

`
export { ChatContainer, ChatNavContainer, ChatMainContainer,IntroImage, Wrapper, ChatFooter, InputContainer, InputWrapper, Input,ChatIcons, Emoji, SendButton, ImageInput }