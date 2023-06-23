import { createGlobalStyle } from 'styled-components';

import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;  
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }

  input[type=number] {
    -moz-appearance:textfield; 
  }
`;

export default GlobalStyles;
