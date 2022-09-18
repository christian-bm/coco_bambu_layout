import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--cl-grey1);
  width: 100%;
  height: 70px;
`;

export const StyledDiv = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1440px;
  margin: 0px auto;
  gap: 16px;

  figure {
    margin-left: 16px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  width: 60px;
  height: 70px;
  border: none;
  background-color: ${(props) =>
    props.selected ? "var(--cl-white0)" : "var(--cl-grey1)"};
  color: ${(props) =>
    props.selected ? "var(--cl-orange)" : "var(--cl-white0)"};

  svg {
    width: 40px;
    height: 20px;
    margin-bottom: 4px;
    fill: ${(props) =>
      props.selected ? "var(--cl-orange)" : "var(--cl-white0)"};
  }
`;
