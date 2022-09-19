import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const CheckboxContainer = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  margin-left: 20px;
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const IconCheckbox = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.checked ? "var(--cl-green)" : "var(--cl-white0)"};
  border: 0.5px solid var(--cl-grey0);
`;
