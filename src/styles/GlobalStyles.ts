import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'himagsikan';
    src: url('/static/fonts/himagsikan.woff');
  }
  @font-face {
    font-family: 'Azonix';
    src: url('/static/fonts/Azonix.woff');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Azonix', monospace, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'himagsikan', monospace, sans-serif;
  }

  #__next {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: min(20px, 5vw);
  }

`
