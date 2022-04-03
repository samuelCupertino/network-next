import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  background-image: url('https://i.pinimg.com/originals/c5/9a/d2/c59ad2bd4ad2fbacd04017debc679ddb.gif');
  background-size: max(50%, 500px);
  filter: hue-rotate(65deg) brightness(0.25);
  transition: filter 2.5s;
`

/* animations */
export const GlobalStyle = createGlobalStyle`
  .anim-error ${Container} {
    filter: hue-rotate(245deg) brightness(0.25);
  }
`
