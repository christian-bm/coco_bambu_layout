import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useJwt } from "react-jwt";

const CurrentSolicitationContext = createContext();

export const CurrentSolicitationProvider = ({ children }) => {
  const { decodedToken } = useJwt(localStorage.getItem("@COCOBAMBU:Token"));
  const [currentSolicitation, setCurrentSolicitation] = useState();
  const [totalIngredients, setTotalIngredients] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [preparation, setPreparation] = useState();

  const findCurrentSolicitation = (id) => {
    api.get(`/solicitations/${id}`).then(({ data }) => {
      setCurrentSolicitation(data);
      setTotalIngredients(data.recipe.ingredients.length);
      setTotalSteps(data.recipe.preparation_mode.length);
      if (data.finished) {
        api.get(`/preparations?solicitation=${data._id}`).then(({ data }) => {
          setPreparation(data);
        });
      }
    });
  };

  const finishedCurrentSolicitation = async (time) => {
    await api.post("/preparations", {
      name: decodedToken.name,
      elapsed_time: time,
      solicitation_id: currentSolicitation._id,
    });
    await api.patch(`/solicitations/${currentSolicitation._id}`, {
      finished: true,
    });
  };

  return (
    <CurrentSolicitationContext.Provider
      value={{
        currentSolicitation,
        setCurrentSolicitation,
        findCurrentSolicitation,
        totalSteps,
        totalIngredients,
        finishedCurrentSolicitation,
        preparation,
        setPreparation,
      }}>
      {children}
    </CurrentSolicitationContext.Provider>
  );
};

export const useCurrentSolicitation = () =>
  useContext(CurrentSolicitationContext);
