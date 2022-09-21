import {
  StyledDiv,
  CheckboxContainer,
  DivContent,
  IconCheckbox,
} from "./styled";
import icon from "../../assets/images/icon-check.png";
import { useState } from "react";

const Checkbox = ({
  children,
  isChecked = false,
  onClickFunction,
  disabled,
}) => {
  const [checked, setChecked] = useState(isChecked);
  const handleCheckbox = () => {
    setChecked(!checked);
    onClickFunction(!checked);
  };

  return (
    <StyledDiv onClick={!disabled ? handleCheckbox : undefined}>
      <CheckboxContainer checked={checked}>
        <IconCheckbox src={icon} alt='icon checkbox' checked={checked} />
      </CheckboxContainer>
      <DivContent>{children}</DivContent>
    </StyledDiv>
  );
};

export default Checkbox;
