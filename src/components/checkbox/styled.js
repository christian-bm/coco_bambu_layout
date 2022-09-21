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
  padding-top: 8px;
  margin-left: 20px;
  width: 83%;
`;

export const IconCheckbox = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.checked ? "var(--cl-green)" : "var(--cl-white0)"};
  border: 0.5px solid var(--cl-white1);
`;
