import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    --cl-black: #242424;
    --cl-orange: #F5791F;
    --cl-grey0: #F9F9F9;
    --cl-grey1: #393939;
    --cl-green: #66D30A;
    --cl-white0: #FFFFFF;
    --cl-white1: #F0F0F0;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;
