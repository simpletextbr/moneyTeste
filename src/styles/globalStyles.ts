import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html, body{
  min-height: 100vh;
  }
  #root{
  min-height: 100vh;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export default GlobalStyles;
