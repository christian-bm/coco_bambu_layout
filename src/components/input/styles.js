import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  border: 1px solid var(--cl-black);
  ${props => props.isSearch && "flex-direction: row-reverse"};
  ${props => props.isSearch && "padding-left: 8px"};

  input {
    border: none;
    width: 100%;

    ::placeholder {
      font-style: italic;
    }
  }
`;
