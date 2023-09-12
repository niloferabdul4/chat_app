import { styled } from "styled-components";

const Container=styled.div`
    height:100vh;
    width:100vw;
    display :flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto; 
    margin:15px 0px;
    
`

 const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;  
    align-items:center;
    border:0.1px solid lightgrey;
    border-radius: 7px;  
    padding:30px;
    width:25%;
    background-color:white;
    
    
`


 const Title=styled.h2`
    font-weight: 400;

`

 const Form =styled.form`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    

`
 const InputWrapper=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: column;   
    
    

`
  const Label=styled.label`
    font-weight: 400;
    font-size: 18px;
    margin: 10px 0px;
    text-align: left;  
    

`

 const Input=styled.input`   
    width:100%;   
    padding: 10px;
 
`

 const SignIn=styled.button`  
    width:100%;
    background-color: #2874f0;
    color:white;
    height:40px;
    border-radius: 6px;
    font-size: 1.07rem;
    margin:18px 0px;
    padding: 6px;
    cursor: pointer;
    border:none;
  

`
 const Span=styled.span`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin:10px 20px;

`

 const ErrorLabel=styled.label`

  font-size: 16px;
  color:red;
  margin-top: 10px;

`

export {Container,Wrapper,Title,Form,InputWrapper,Label,Input,SignIn,Span,ErrorLabel}