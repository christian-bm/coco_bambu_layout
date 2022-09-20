import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  DivHeader,
  DivIngredients,
  DivPreparation,
  StyledMain,
} from "./styles";
import iconSetaBack from "../../assets/images/icon-back.png";
import iconTime from "../../assets/images/icon-time.png";
import Loader from "../../components/loader";
import api from "../../services/api";
import Checkbox from "../../components/checkbox";

const SolicitationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [solicitation, setSolicitation] = useState();

  useEffect(() => {
    api
      .get(`/solicitations/${location.pathname.split("/")[2]}`)
      .then(({ data }) => {
        setSolicitation(data);
        console.log(data);
      });
  }, [location.pathname]);

  return (
    <StyledMain>
      {solicitation ? (
        <>
          <DivHeader imgUrl={solicitation.recipe.images[0].url}>
            <button onClick={() => navigate("/pedidos")}>
              <img src={iconSetaBack} alt='seta voltar' /> Voltar
            </button>
            <div className='div_time'>
              <img src={iconTime} alt='icone relogio' />
              <div className='div_time-text'>
                <span className='span_time-text'>Tempo de preparo</span>
                <span className='span_time-time'>
                  {solicitation.recipe.preparation_time}
                </span>
              </div>
            </div>
            <div className='div_title'>
              <h3>{solicitation.recipe.name}</h3>
              <p>{solicitation.recipe.description}</p>
            </div>
          </DivHeader>
          <DivIngredients>
            <h3>Ingredientes</h3>
            <ul>
              {solicitation.recipe.ingredients.map((value, index) => (
                <Checkbox isChecked={solicitation.finished} key={index}>
                  <span>{value.ingredient}</span>
                </Checkbox>
              ))}
            </ul>
          </DivIngredients>
          <DivPreparation>
            <h3>Modo de preparo</h3>
            <ul>
              {solicitation.recipe.preparation_mode.map((value) => (
                <Checkbox
                  isChecked={solicitation.finished}
                  key={value.step.order}>
                  <h4>Passo {value.step.order}</h4>
                  <p>{value.step.description}</p>
                </Checkbox>
              ))}
            </ul>
          </DivPreparation>
        </>
      ) : (
        <Loader />
      )}
    </StyledMain>
  );
};

export default SolicitationDetails;
