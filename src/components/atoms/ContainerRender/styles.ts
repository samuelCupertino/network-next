import styled, { keyframes } from 'styled-components'

const animRenderBar = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0;
  }
`
const animRight = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

interface IContainerProps {
  dirTo: 'right' | 'left' | 'top' | 'bottom'
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  /* flex-flow: wrap; */
  position: relative;
  overflow: hidden;
  animation: ${animRight} 2.5s linear forwards;

  &.right::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 2px;
    position: absolute;
    top: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 1;
    animation: ${animRenderBar} 0.5s 6 forwards;
  }
`
