import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  border-radius: 100px;
  padding-right: 10px;
  width: 300px;
  height: 1px;
  > input {
    display: inline-block;
    color: black;
    border: none;
    padding: 10px 25px;
    font-size: 1rem;
    border-radius: 20px;
    font-family: "Roboto", sans-serif;
    position: absolute;
    right: 125px;
    top: 1.5%;

    &::placeholder {
      color: black;
    }
  }
`;