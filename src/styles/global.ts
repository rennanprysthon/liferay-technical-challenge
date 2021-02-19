import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background-color: var(--grey);
    font-family: 'PT Sans', sans-serif;
  }
  *, button, input {
    border: 0;
    outline: 0;
  }
  img {
    margin: 0 auto;
  }
  ul, li {
    list-style: none;
  }
  :root {
    --primary: #30313f ;
    --secondary: #4b9bff;
    --white: #ffffff;
    --grey: #f0f1f4;
  }
`;
