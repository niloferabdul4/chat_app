import { styled } from "styled-components";

const LoginContainer=styled.div`

    height:100vh;
    width:100vw;
    display :flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto; 
    background-color:green;

`

const Form=styled.form`
    background-color:white;
    width:30%;
    padding:40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius:8px;
    gap:10px;

`

const Input=styled.input`
   width: 100%;
   border: 0.2px solid lightgrey;
   padding: 10px;;

`

const Button=styled.button`
    background-color: green;;
    width:100%;
    color:white;
    height:40px;
    border-radius: 6px;
    font-size: 1.07rem;
    margin:18px 0px;
    padding: 6px;
    cursor: pointer;
    border:none;
`
export {LoginContainer,Form,Input,Button}