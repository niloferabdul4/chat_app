
import { styled } from "styled-components"

const UsersContainer=styled.div`
    padding: 10px;
    width:100%;
    display:flex;
    flex-direction: column;
    flex-grow:1;
    height: calc(100% - 80px);
        position: sticky;
        top: 80px;
    overflow-y: scroll;
       
    
            
        ::-webkit-scrollbar{
        width: 0.5px;
        }

        ::-webkit-scrollbar-track{
        background-color: #FAFAFA;
        }

        ::-webkit-scrollbar-thumb{
        background-color: #FAFAFA;
        }
`


const Wrapper=styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    cursor: pointer;
    gap:10px;
    padding:20px;
    background: transparent;
        &:hover{
    background-color:whitesmoke;
    }
`

const UserName=styled.p`
   font-size:1.3rem;
   font-weight:500;
`

const Image=styled.img`
   border-radius: 50%;
    height:50px;
    width:50px;
    cursor:pointer;
    object-fit:cover;
   
`
export {UsersContainer,Wrapper,UserName,Image}