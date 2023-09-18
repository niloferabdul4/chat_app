
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

export {UsersContainer}