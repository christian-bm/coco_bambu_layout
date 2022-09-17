import {
  StyledDiv,
  CheckboxContainer,
  DivContent,
  InputCheckbox,
  IconCheckbox,
} from "./styled";
import icon from "../../assets/images/icon-check.png";
import { useState } from "react";

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => setChecked(!checked);

  return (
    <StyledDiv>
      <CheckboxContainer checked={checked} onClick={handleCheckbox}>
        <InputCheckbox type='checkbox' checked={checked} />
        <IconCheckbox src={icon} alt='icon checkbox' checked={checked} />
      </CheckboxContainer>
      <DivContent>{children}</DivContent>
    </StyledDiv>
  );
};

export default Checkbox;
