import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardSolicitation from "../../components/cardSolicitation";

import Header from "../../components/header";
import { useSolicitations } from "../../providers/solicitations";
import { useToken } from "../../providers/token";
import { StyledDiv, StyledMain } from "./styles";

const Solicitations = () => {
  const { token } = useToken();
  const { solicitations, getSolicitations, filterSolicitations } =
    useSolicitations();
  const navigate = useNavigate();

  const onChangeInput = (value) => {
    if (value) {
      filterSolicitations(value);
    } else {
      getSolicitations();
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <>
      <Header onChangeInput={onChangeInput} />
      <StyledMain>
        <StyledDiv>
          <h2>Últimos pedidos</h2>
          <ul>
            {solicitations.length !== 0 ? (
              solicitations.map((value) => (
                <CardSolicitation key={value._id} object={value} />
              ))
            ) : (
              <li className="li_not-found">
                <span>Nenhum pedido encontrado!</span>
              </li>
            )}
          </ul>
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default Solicitations;
