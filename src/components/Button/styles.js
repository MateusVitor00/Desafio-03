import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  border-radius: 100px;
  padding-right: 10px;
  width: 300px;
  height: 1px;

  > button {
    display: inline-block;
  text-decoration: none;
  background: black;
  border: none;
  color: white;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  position: relative;
  margin-top: 30px;
  margin: 0px;
  position: absolute;
  right: 20px;
  top: 1.5%;
  }
  >button:hover{
    background-color: #0056b3;
  }
`;