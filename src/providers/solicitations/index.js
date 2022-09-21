import { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";

const SolicitationsContext = createContext();

export const SolicitationsProvider = ({ children }) => {
  const [solicitations, setSolicitations] = useState([]);
  const [numberNewSolicitations, setNumberNewSolicitations] = useState();

  const getSolicitations = () => {
    api.get("/solicitations").then(({ data }) => {
      setSolicitations(data.reverse());
      setNumberNewSolicitations(
        data.filter((value) => value.finished === false).length
      );
    });
  };

  const filterSolicitations = async (value) => {
    api.get(`/solicitations?name=${value}`).then(({ data }) => {
      setSolicitations(data.reverse());
    });
  };

  useEffect(() => {
    getSolicitations();
  }, []);

  useEffect(() => {
    const ids = [
      "632a003998fc5c5c05aa5606",
      "632a01cf98fc5c5c05aa560e",
      "632a00af98fc5c5c05aa5608",
      "632a016e98fc5c5c05aa560c",
      "632a010f98fc5c5c05aa560a",
    ];
    const index = Math.floor(Math.random() * (5 - 0) + 0);

    if (numberNewSolicitations === 0) {
      api
        .post("/solicitations", {
          time: new Date().toLocaleString(),
          recipe_id: ids[index],
        })
        .then(() => getSolicitations());
    }
  }, [numberNewSolicitations]);

  return (
    <SolicitationsContext.Provider
      value={{
        solicitations,
        numberNewSolicitations,
        getSolicitations,
        filterSolicitations,
      }}>
      {children}
    </SolicitationsContext.Provider>
  );
};

export const useSolicitations = () => useContext(SolicitationsContext);
