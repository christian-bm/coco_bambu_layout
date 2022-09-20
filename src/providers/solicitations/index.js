import { createContext, useState, useEffect, useContext } from "react";
import api from "../../services/api";

const SolicitationsContext = createContext();

export const SolicitationProvider = ({ children }) => {
  const [solicitations, setSolicitations] = useState([]);
  const [numberNewSolicitations, setNumberNewSolicitations] = useState(0);

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
