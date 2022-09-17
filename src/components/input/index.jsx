import { StyledDiv } from "./styles";

const Input = ({ isSearch, iconImage, ...rest }) => {
  return (
    <StyledDiv isSearch>
      <img src={iconImage} alt='icon input' />
      <input {...rest} />
    </StyledDiv>
  );
};

export default Input;
