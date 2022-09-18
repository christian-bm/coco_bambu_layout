import { StyledHeader, StyledButton, StyledDiv, DivButtons } from "./styles";
import logoMini from "../../assets/images/logo-coco-bambu-mini.png";
import iconSearch from "../../assets/images/icon-busca.png";
import ChefHatIcon from "../../assets/chefHat";
import { FaRegListAlt, FaRegUserCircle } from "react-icons/fa";

import Input from "../input";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

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
        />
        <DivButtons>
          <StyledButton
            selected={location.pathname === "/pedidos" ? true : false}>
            <ChefHatIcon />
            Pedidos
          </StyledButton>
          <StyledButton
            selected={location.pathname === "/receitas" ? true : false}>
            <FaRegListAlt />
            Receitas
          </StyledButton>
          <StyledButton>
            <FaRegUserCircle />
            Sair
          </StyledButton>
        </DivButtons>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
