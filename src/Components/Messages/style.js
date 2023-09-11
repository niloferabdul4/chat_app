import styled from "styled-components";

const Container=styled.div`
  display: flex;
  width:100%;
  justify-content:  ${props=>props.id==='owner' ?  'flex-end':'flex-start'};
`

const MessagesContainer=styled.div`
  display:flex;
  flex-direction: ${props=>props.id==='owner' ?  'row-reverse':'row'};
  justify-content:flex-start;
  align-items:flex-start;
  gap:50px;

`

const MessageInfo=styled.div`
   margin-right: 30px;
   p{
    color:grey;
    font-size:14px;
   }

`


const MessageContent=styled.div`
     max-width: 100%;
            display: flex;
            flex-direction: column;
            
            gap: 10px;

            p {
              background-color: white;
              padding: 10px 20px;
              border-radius: ${props=>props.id==='owner' ?  '20px 0px 20px 20px' :'0px 20px 20px 20px'};
              max-width: max-content;
            }


`


export {MessageContent,MessageInfo,MessagesContainer,Container}