import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  z-index: 20;
  padding: 30px 20px;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 300px;
  background-color: var(--cl-white0);
  position: relative;

  img {
    width: 30px;
    position: absolute;
    top: -40px;
    right: 0;
  }
`;

export const DivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 30px 100px;

  button {
    width: 150px;
  }
`;
