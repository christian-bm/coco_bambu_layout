import { StyledHeader, StyledButton, StyledDiv, DivButtons } from "./styles";
import logoMini from "../../assets/images/logo-coco-bambu-mini.png";
import iconSearch from "../../assets/images/icon-busca.png";
import ChefHatIcon from "../../assets/chefHat";
import { FaRegListAlt, FaRegUserCircle } from "react-icons/fa";

import Input from "../input";
import { useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const logoof = () => {
    localStorage.clear();
    history.push("/");
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
        />
        <DivButtons>
          <StyledButton
            selected={location.pathname === "/pedidos" ? true : false}
            onClick={() => history.push("/pedidos")}>
            <ChefHatIcon />
            Pedidos
          </StyledButton>
          <StyledButton
            selected={location.pathname === "/receitas" ? true : false}
            onClick={() => history.push("/receitas")}>
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
