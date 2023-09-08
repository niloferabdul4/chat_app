
import { styled } from "styled-components"


const SearchContainer=styled.div`

padding: 15px;
width:100%;

`

const Input=styled.input`
   width:100%;
   border: 1px solid grey;
   padding: 10px;
   background: transparent;
   color:darkgrey;
   outline:none;
  &:hover{
   color:grey;
  }
`
export {Input,SearchContainer}