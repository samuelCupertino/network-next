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
  border-width: min(3px, calc(3 * 0.228vw));
  border-style: solid;
  border-radius: min(10px, calc(10 * 0.228vw));
  border-left: 0;
  border-right: 0;
  padding: min(10px, calc(10 * 0.228vw)) min(20px, calc(20 * 0.228vw));
  font-size: min(20px, calc(20 * 0.228vw));
  overflow: hidden;
  animation: ${animButton} 8s forwards;
  transition: color 1s, border-color 1s, background-color 1s;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.tertiary};
  }
`
