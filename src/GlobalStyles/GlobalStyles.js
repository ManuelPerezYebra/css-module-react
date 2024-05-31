import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: "Big Shoulders Display"
  }

  a{
    text-decoration: none;
    color: inherit;
    
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
  p{
    font-family: "Lexend Deca"
  }
`;
