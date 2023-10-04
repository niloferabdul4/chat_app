import styled from "styled-components";

const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width:100%;
  height:calc(100%-150px);


`

const MessagesContainer=styled.div`
  display:flex;
  flex-direction: column;
  gap:10px;

`

const MessageContent=styled.div`
    
    gap: 10px;
    margin-bottom:10px;
    span {
        background-color: ${props=>props.id==='owner' ? 'lightgreen' :'white'};
        padding: 10px 20px;
        border-radius:${props=>props.id==='owner' ? '10px 0px 10px 10px' : '0px 10px 10px 10px'};
        max-width: max-content;
        font-size: 1.15rem;
        float:${props=>props.id==='owner' ? 'right' :'left'};
    
      }

`


export {MessageContent,MessagesContainer,Container}