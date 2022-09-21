import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.sec ? "80px" : "100%")};
  max-width: 300px;
  height: ${(props) => (props.sec ? "80px" : "40px")};
  background-color: ${(props) =>
    props.tec
      ? "tramparent"
      : props.green
      ? "var(--cl-green)"
      : "var(--cl-orange)"};
  color: ${(props) => (props.tec ? "var(--cl-black)" : "var(--cl-white0)")};
  border: ${(props) => (props.tec ? "2px solid var(--cl-black)" : "none")};
  font-size: 16px;
  font-weight: 600;
  ${(props) => props.sec && "border-radius: 50%"}
  ${(props) => props.tec && "border-radius: 2px"}
  ${(props) => props.disabled && "cursor: default"}
`;
