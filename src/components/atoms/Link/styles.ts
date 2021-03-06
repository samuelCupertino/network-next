import styled, { keyframes } from 'styled-components'

const animButton = keyframes`
  0% {
    opacity: 0;
  }
  100% {   
    opacity: 1;
  }
`

interface ILinkProps {
  gridArea?: string
}

export const LinkCustom = styled.a<ILinkProps>`
  grid-area: ${({ gridArea = 'unset' }) => gridArea};
  text-align: center;
  padding: min(10px, calc(10 * 0.228vw)) min(20px, calc(20 * 0.228vw));
  font-size: min(20px, calc(20 * 0.228vw));
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;

  border-width: min(3px, calc(3 * 0.228vw));
  border-color: ${props => props.theme.colors.secondary};
  border-style: solid;
  border-radius: min(10px, calc(10 * 0.228vw));
  border-left: 0;
  border-right: 0;

  animation: ${animButton} 8s forwards;
  transition: color 1s, border-color 1s, background-color 1s;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.tertiary};
  }
`
