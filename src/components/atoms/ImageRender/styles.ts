import styled, { keyframes } from 'styled-components'

const animRenderImage = keyframes`
  from {
    height: 0;
    opacity: 0.1;
  }
  to {
    height: var(--height);
    opacity: 0.5;
  }
`

const animRenderBar = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0;
  }
`

interface IContainerProps {
  height?: number
}

export const Container = styled.div<IContainerProps>`
  --height: ${props => props.height || 0}px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  animation: ${animRenderImage} 2.5s linear forwards;

  &::after {
    content: '';
    display: inline-block;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 1;
    animation: ${animRenderBar} 0.5s 6 forwards;
  }
`
