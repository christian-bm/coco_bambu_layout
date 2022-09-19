import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--cl-black);
  ${(props) =>
    props.isSearch ? "flex-direction: row-reverse" : "flex-direction: row"};
  ${(props) => props.isSearch && "padding-left: 8px"};
  background-color: var(--cl-white0);
  width: 100%;
  max-width: 405px;
  height: 40px;

  input {
    border: none;
    width: 100%;

    ::placeholder {
      font-style: italic;
    }
  }

  img {
    width: 30px;
    height: 30px;
    margin: 5px;
  }
`;
