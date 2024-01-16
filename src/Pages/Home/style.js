import { styled } from "styled-components";

const HomeContainer = styled.div`
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ;

`
const Box = styled.div`
    width:90%;
    height:90%;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media (min-width:320px)and (max-width: 600px) {
    flex-direction: column;
    width:100%;
    height: 100vh;
  }
  @media  (min-width:601px) and (max-width:820px){
    width: 100%;
    height:100%;
  }
`

export { HomeContainer, Box }