import { StyledHeader, StyledButton, StyledDiv, DivButtons } from "./styles";
import logoMini from "../../assets/images/logo-coco-bambu-mini.png";
import iconSearch from "../../assets/images/icon-busca.png";
import ChefHatIcon from "../../assets/chefHat";
import Input from "../input";
import { useToken } from "../../providers/token";

import { FaRegListAlt, FaRegUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Header = ({ onChangeInput }) => {
  const { register } = useForm();
  const { setToken } = useToken();
  const location = useLocation();
  const navigate = useNavigate();

  const logoof = () => {
    setToken("");
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <StyledDiv>
        <figure>
          <img src={logoMini} alt='Logo coco bambu mini' />
        </figure>
        <Input
          iconImage={iconSearch}
          isSearch
          placeholder='Buscar receita...'
          register={register}
          name='search'
          autoComplete='off'
          onChange={(e) => onChangeInput(e.target.value)}
        />
        <DivButtons>
          <StyledButton
            selected={location.pathname === "/pedidos" ? true : false}
            onClick={() => navigate("/pedidos")}>
            <ChefHatIcon />
            Pedidos
          </StyledButton>
          <StyledButton
            selected={location.pathname === "/receitas" ? true : false}
            onClick={() => navigate("/receitas")}>
            <FaRegListAlt />
            Receitas
          </StyledButton>
          <StyledButton onClick={logoof}>
            <FaRegUserCircle />
            Sair
          </StyledButton>
        </DivButtons>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
