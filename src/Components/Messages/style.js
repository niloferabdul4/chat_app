import styled from "styled-components";

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:100%;
  height:calc(100%-150px);
  margin-bottom: 40px;

`

const MessagesContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items: flex-end;
  justify-content: flex-end;
  gap:10px;
  padding: 14px 40px;  


`

const MessageContent=styled.div`
    background-color:${(props) => (props.id==='owner' ? 'lightgreen' : 'whitesmoke')};
    padding:12px;
    border-radius:${(props) => (props.id==='owner' ? '10px 0px 10px 10px' : '0px 10px 10px 10px')};
    max-width: max-content;
    font-size: 1.1rem;
    img{
        background-color:none;
    }
      
`

const Wrapper=styled.div`    
    display: flex;
    justify-content: center;
    align-self: ${(props) => (props.id==='owner' ? 'flex-end' : 'flex-start')};
    gap:10px;     
`


const Image=styled.img`
   border-radius: 50%;
    height:35px;
    width:35px;
    cursor:pointer;
    object-fit:cover;
   
`


export {Wrapper,MessageContent,MessagesContainer,Container,Image}