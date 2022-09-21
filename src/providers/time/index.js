import { createContext, useContext, useEffect, useState } from "react";
import { tranformTime } from "../../utils";

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [timeText, setTimeText] = useState("0 minuto(s)");

  const [idInterval, setIdInterval] = useState(0);

  const startTimer = () => {
    let newIdInterval = setInterval(
      () => setTimeSeconds((prevValue) => prevValue + 1),
      1000
    );
    setIdInterval(newIdInterval);
  };

  const stopTimer = () => {
    clearInterval(idInterval);
    setIdInterval(0);
  };

  useEffect(() => {
    setTimeText(tranformTime(timeSeconds));
  }, [timeSeconds]);

  return (
    <TimeContext.Provider
      value={{ timeText, setTimeText, startTimer, stopTimer }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);
