import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border: 4px solid;
    border-radius: 50em;
    border-top: 4px solid rgb(0, 0, 0, 0);
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
