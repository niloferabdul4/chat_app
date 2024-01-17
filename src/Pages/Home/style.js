import { styled } from "styled-components";

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`
const Box = styled.div`
    width:100%;
    height:100%;
    border-radius: 10px;
    overflow: hidden;
    justify-content: flex-start; 
    display: grid; 
    grid-template-columns: 1fr 3fr;
    @media (min-width:320px)and (max-width: 600px) {
    display: grid; 
    grid-template-columns: 1fr 5fr;

    }
    @media  (min-width:601px) and (max-width:820px){
      display: grid; 
      grid-template-columns: 1fr 5fr;
    }
`

export { HomeContainer, Box }