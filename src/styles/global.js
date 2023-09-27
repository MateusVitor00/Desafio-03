import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
   background-image: url(https://wallpapercave.com/wp/wp7248017.jpg);
   background-repeat: no-repeat;
   width: 100vw;
   height: 100vh;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }
`;