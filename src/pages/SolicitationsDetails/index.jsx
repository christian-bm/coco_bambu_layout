import {
  DivHeader,
  DivIngredients,
  DivPreparation,
  DivProgress,
  DivProgressBar,
  StyledMain,
} from "./styles";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useCurrentSolicitation } from "../../providers/currentSolicitation";
import { useModal } from "../../providers/modal";
import { useTime } from "../../providers/time";

import iconSetaBack from "../../assets/images/icon-back.png";
import iconTime from "../../assets/images/icon-time.png";
import Loader from "../../components/loader";
import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import Modal from "../../components/modal";

const SolicitationDetails = () => {
  const {
    currentSolicitation,
    findCurrentSolicitation,
    totalSteps,
    totalIngredients,
    finishedCurrentSolicitation,
    preparation,
    clearCurrentSolicitation,
  } = useCurrentSolicitation();
  const {
    isOpenModalConfirm,
    isOpenModalFinish,
    handleModalConfirm,
    handleModalFinish,
  } = useModal();
  const { timeText, setTimeSeconds, startTimer, stopTimer } = useTime();

  const [isDisableIngredients, setIsDisableIngredients] = useState(false);
  const [isDisabledSteps, setIsDisabledSteps] = useState(true);
  const [totalCheckedIngredients, setTotalCheckedIngredients] = useState(0);
  const [totalCheckedSteps, setTotalCheckedSteps] = useState(0);
  const [isStartedTime, setIsStartedTime] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleCheckIngredients = (check) =>
    setTotalCheckedIngredients(
      check ? totalCheckedIngredients + 1 : totalCheckedIngredients - 1
    );
  const handleCheckSteps = (check) =>
    setTotalCheckedSteps(check ? totalCheckedSteps + 1 : totalCheckedSteps - 1);

  const startAndStopTimePreparation = async () => {
    if (totalCheckedIngredients === totalIngredients) {
      if (isStartedTime) {
        if (totalCheckedSteps === totalSteps) {
          stopTimer();
          handleModalFinish();
          await finishedCurrentSolicitation(timeText);
          findCurrentSolicitation(location.pathname.split("/")[2]);
          setIsStartedTime(false);
        }
      } else {
        setIsStartedTime(true);
        startTimer();
        setIsDisableIngredients(!isDisableIngredients);
        setIsDisabledSteps(!isDisabledSteps);
      }
    } else {
      handleModalConfirm();
    }
  };

  const exitDetails = () => {
    navigate("/pedidos");
    clearCurrentSolicitation();
    stopTimer();
    setTimeSeconds(0);
  };

  useEffect(() => {
    findCurrentSolicitation(location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    if (currentSolicitation?.finished) {
      setIsDisableIngredients(true);
    }
  }, [currentSolicitation]);

  return (
    <>
      <StyledMain>
        {currentSolicitation ? (
          <>
            <DivHeader imgUrl={currentSolicitation.recipe.images[0].url}>
              <button onClick={exitDetails}>
                <img src={iconSetaBack} alt='seta voltar' /> Voltar
              </button>
              <div className='div_time'>
                <img src={iconTime} alt='icone relogio' />
                <div className='div_time-text'>
                  <span className='span_time-text'>Tempo de preparo</span>
                  <span className='span_time-time'>
                    {currentSolicitation.recipe.preparation_time}
                  </span>
                </div>
              </div>
              <div className='div_title'>
                <h3>{currentSolicitation.recipe.name}</h3>
                <p>{currentSolicitation.recipe.description}</p>
              </div>
            </DivHeader>
            <DivIngredients>
              <h3>Ingredientes</h3>
              <ul>
                {currentSolicitation.recipe.ingredients.map((value, index) => (
                  <Checkbox
                    isChecked={currentSolicitation.finished}
                    key={index}
                    onClickFunction={handleCheckIngredients}
                    disabled={isDisableIngredients}>
                    <span>{value.ingredient}</span>
                  </Checkbox>
                ))}
              </ul>
            </DivIngredients>
            <DivPreparation>
              <h3>Modo de preparo</h3>
              <ul>
                {currentSolicitation.recipe.preparation_mode.map((value) => (
                  <Checkbox
                    isChecked={currentSolicitation.finished}
                    key={value.step.order}
                    onClickFunction={handleCheckSteps}
                    disabled={isDisabledSteps}>
                    <h4>Passo {value.step.order}</h4>
                    <p>{value.step.description}</p>
                  </Checkbox>
                ))}
              </ul>
            </DivPreparation>
            <DivProgress>
              <div>
                <span>
                  Status{" "}
                  <b>
                    {preparation
                      ? "100"
                      : ((totalCheckedSteps / totalSteps) * 100).toFixed(0)}
                    %
                  </b>{" "}
                  pronto e {preparation ? preparation.elapsed_time : timeText}{" "}
                  utilizado(s)
                </span>
                <DivProgressBar
                  max={totalSteps}
                  barProgress={preparation ? totalSteps : totalCheckedSteps}>
                  <div className='div_color-green'></div>
                  <div className='div_color-orange'></div>
                </DivProgressBar>
              </div>
              <Button
                green={isStartedTime ? true : preparation ? true : false}
                onClick={() => startAndStopTimePreparation()}
                disabled={preparation ? true : false}>
                {isStartedTime
                  ? "Finalizar"
                  : preparation
                  ? "Finalizado"
                  : "Iniciar preparação"}
              </Button>
            </DivProgress>
          </>
        ) : (
          <Loader />
        )}
      </StyledMain>
      {isOpenModalConfirm && (
        <Modal closeFunction={handleModalConfirm}>
          <p>
            Para iniciar a preparação, certifique-se de que você tem todos os
            ingredientes selecionados!
          </p>
          <Button onClick={handleModalConfirm} tec>
            Entendi
          </Button>
        </Modal>
      )}
      {isOpenModalFinish && (
        <Modal closeFunction={handleModalFinish}>
          <h3>OBRIGADO</h3>
          <p>Prato finalizado com sucesso em {timeText}!</p>
          <Button onClick={handleModalFinish} tec>
            OK
          </Button>
        </Modal>
      )}
    </>
  );
};

export default SolicitationDetails;
