import styled from "styled-components";


 export const RegisterContainer=styled.div`    
    height:100vh;
    display :flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin:15px 0px;
    

`


export const Wrapper=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;  
    align-items:center;
    border:0.1px solid lightgrey;
    border-radius: 7px;  
    padding:30px;
    width:35%;
    background-color:white;
    @media (min-width:320px)and (max-width: 600px) {
    width:75%;
    padding:20px;
    }
    @media (min-width:601px)and (max-width: 820px) {
    width:50%;
    }
`


export const Title=styled.h2`
    font-weight: 600;
    @media (min-width:320px)and (max-width: 600px) {
   font-size: 20px;
    }
    @media (min-width:601px)and (max-width: 820px) {
    font-size:25px;
    }
`

export const Form =styled.form`
    background-color: white;
    display: flex;
    flex-wrap: wrap;

`
export const InputWrapper=styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: column;   
    @media (min-width:320px)and (max-width: 600px) {
    padding:8px;
    }
    @media (min-width:320px)and (max-width: 600px) {
    padding:10px;
    }
    

`

export const FileWrapper=styled.div`
    width:50%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-direction: row;
    margin-top: 10px;;
    @media (min-width:320px)and (max-width: 600px) {
    width:80%;
    }
    @media (min-width:601px)and (max-width: 820px) {
        width:80%;
    }
    

`
export const Label=styled.label`
    font-weight: 600;
    margin: 10px 0px;
    text-align: left;  
    @media (min-width:320px)and (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 8px;
    }
    @media (min-width:601px)and (max-width: 820px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
   
`
export const UploadLabel=styled.label`
    font-weight: 400;
    font-size: 15px;; 
    text-align: left;  
    color:grey;
    display: flex;
    align-items: center;
    gap:10px;
   
`
export const Input=styled.input`
    width:100%;   
    padding: 10px;
   
`


export const Button=styled.button`
    width:100%;
    background-color: #2874f0;
    height:46px;
    border-radius: 6px;
    font-size: 1.05rem;
    font-weight: 500;
    margin:16px 0px 20px 0px;
    padding: 4px;
    color: white;
    cursor: pointer;
    border:none;
    background: linear-gradient(right bottom rgba(0,0,1,2));
    @media (min-width:320px)and (max-width: 600px) {
    height:35px;
    font-size: 0.98rem;
    }
    @media (min-width:601px)and (max-width: 820px) {
        height:40px;
        font-size: 1rem;
    }

`

export const SignIn=styled.p`
    font-size:16px;
    margin:10px 0px;
    @media (min-width:320px)and (max-width: 600px) {
   font-size: 14px;
    }
  

`