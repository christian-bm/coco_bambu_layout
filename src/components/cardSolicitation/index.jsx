import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CardContainer,
  CardContent,
  DivDetails,
  DivCircles,
  DivTime,
  DivFinish,
} from "./styles";
import Button from "../button";
import { useSolicitations } from "../../providers/solicitations";

const CardSolicitation = ({ object }) => {
  const [now] = useState(new Date().toLocaleDateString());
  const [date] = useState(object.time.split(" "));
  const { setCurrentSolicitation } = useSolicitations();
  const navigate = useNavigate();

  const onClickFunction = () => {
    setCurrentSolicitation(object);
    navigate(`/pedidos/${object._id}`);
  };

  return (
    <>
      <CardContainer>
        <CardContent>
          <img src={object.recipe.images[1].url} alt='imagem da receita' />
          <DivDetails>
            <h3>{object.recipe.name}</h3>
            <p>{object.recipe.description}</p>
          </DivDetails>
          <DivCircles>
            {object.finished && (
              <DivFinish>
                <span>Prato Finalizado</span>
              </DivFinish>
            )}
            <DivTime>
              <span>{date[0] === now ? "Hoje" : date[0].slice(0, 5)} </span>
              <span>{date[1].slice(0, 5)}</span>
            </DivTime>
            <Button sec onClick={onClickFunction}>
              Ver receita
            </Button>
          </DivCircles>
        </CardContent>
      </CardContainer>
    </>
  );
};

export default CardSolicitation;
