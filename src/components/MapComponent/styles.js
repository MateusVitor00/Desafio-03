import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const PopupContainer = styled.div`
  position: absolute;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const PopupContent = styled.div`
  font-size: 16px;
  color:white;
`;