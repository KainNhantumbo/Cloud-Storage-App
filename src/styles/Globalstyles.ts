import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {    
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', Montserrat, Poppins, 'PT Sans';
    max-width: 100%;
  }

  span, label {
    user-select: none;
  }

  body {
    color: rgb(${({ theme }) => theme.font});
    background: rgb(${({ theme }) => theme.background});
  }

  input, textarea, select {
    background: rgb(${({ theme }) => theme.inner});
    color: rgb(${({ theme }) => theme.font});
  }

  html {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    scroll-behavior: smooth;
    width: 5px;
    background: none;
    background: rgba(${({ theme }) => theme.secondary}, .3);
    
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: rgba(${({ theme }) => theme.primary}, .5);
  }
`;
