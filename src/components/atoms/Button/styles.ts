import styled, { keyframes } from 'styled-components'

const animButton = keyframes`
  0% {
    opacity: 0;
  }
  100% {   
    opacity: 1;
  }
`

export const Container = styled.span`
  grid-column: 1/3;
  text-align: center;
  border-style: solid;
  border-radius: 10px;
  border-left: 0;
  border-right: 0;
  padding: 10px 20px;
  border-width: 3px;
  font-size: 20px;
  overflow: hidden;
  animation: ${animButton} 8s forwards;
`
