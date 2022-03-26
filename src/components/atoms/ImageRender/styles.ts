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
  width?: string
  height?: string
}

export const Container = styled.div<IContainerProps>`
  --height: ${props => props.height || 0};
  width: ${props => props.width || 0};
  position: relative;
  overflow: hidden;
  animation: ${animRenderImage} 2.5s linear forwards;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 1;
    animation: ${animRenderBar} 0.5s 6 forwards;
  }

  > .image {
    width: ${props => props.width || 0};
    height: ${props => props.height || 0};
    object-fit: cover;
  }
`
