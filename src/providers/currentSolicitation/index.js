import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useJwt } from "react-jwt";

const CurrentSolicitationContext = createContext();

export const CurrentSolicitationProvider = ({ children }) => {
  const { decodedToken } = useJwt(localStorage.getItem("@COCOBAMBU:Token"));

  const [currentSolicitation, setCurrentSolicitation] = useState();
  const [preparation, setPreparation] = useState();
  const [totalIngredients, setTotalIngredients] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

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
    return await api.patch(`/solicitations/${currentSolicitation._id}`, {
      finished: true,
    });
  };

  const clearCurrentSolicitation = () => {
    setCurrentSolicitation();
    setPreparation();
  };

  return (
    <CurrentSolicitationContext.Provider
      value={{
        currentSolicitation,
        totalSteps,
        totalIngredients,
        preparation,
        finishedCurrentSolicitation,
        findCurrentSolicitation,
        clearCurrentSolicitation,
      }}>
      {children}
    </CurrentSolicitationContext.Provider>
  );
};

export const useCurrentSolicitation = () =>
  useContext(CurrentSolicitationContext);
