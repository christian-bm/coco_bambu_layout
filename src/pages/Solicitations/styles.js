import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  margin: 0px 16px;

  h2 {
    font-size: 16px;
    border-bottom: 0.5px solid var(--cl-white1);
    padding: 20px 0px;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 1440px;

  .li_not-found {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
