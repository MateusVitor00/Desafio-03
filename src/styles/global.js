import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    text-color: black;
   background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  }


  body a{
    transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  text-decoration: none;
  }
  
  Container {
  width: 65%;
  height: 80vh;
  margin: 50px auto;
  background-color: rgba(0, 0, 0, 0.73);
}

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  p {
    color: white;
  }

  .ol-attribution a,
  .ol-attribution {
    font-size: 12px;
  }
`;