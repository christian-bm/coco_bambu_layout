import {
  CardContainer,
  CardContent,
  DivDetails,
  DivCircles,
  DivTime,
  DivFinish,
} from "./styles";
import Button from "../button";

const CardSolicitation = ({ object }) => {
  const now = new Date().toLocaleDateString();
  const date = object.time.split(" ");
  // const onClickFunction = () => {};

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
            <Button sec>Ver receita</Button>
          </DivCircles>
        </CardContent>
      </CardContainer>
    </>
  );
};

export default CardSolicitation;