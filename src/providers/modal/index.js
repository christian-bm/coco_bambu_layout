import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
  const [isOpenModalFinish, setIsOpenModalFinish] = useState(false);

  const handleModalConfirm = () => setIsOpenModalConfirm(!isOpenModalConfirm);
  const handleModalFinish = () => setIsOpenModalFinish(!isOpenModalFinish);

  return (
    <ModalContext.Provider
      value={{
        isOpenModalConfirm,
        isOpenModalFinish,
        handleModalConfirm,
        handleModalFinish,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
