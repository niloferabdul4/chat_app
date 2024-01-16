import { styled } from "styled-components";


const SidebarContainer=styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  background-color:lightgreen;
  overflow: hidden;
  min-height: 100vh;
  @media (min-width:368px)and (max-width: 600px) {
  order:1;
  }
  @media (min-width:601px)and (max-width: 820px) {
  flex:0.55;
  }
  
`

export {SidebarContainer}