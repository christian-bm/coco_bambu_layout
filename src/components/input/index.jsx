import { StyledDiv } from "./styles";

const Input = ({ isSearch, iconImage, register, name, ...rest }) => {
  return (
    <StyledDiv isSearch={isSearch}>
      <img src={iconImage} alt='icon input' />
      <input {...register(name)} {...rest} />
    </StyledDiv>
  );
};

export default Input;
