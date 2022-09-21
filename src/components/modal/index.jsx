import { DivContent, ModalContainer, ModalContent } from "./styles";
import iconClose from "../../assets/images/icon-close.png";

const Modal = ({ children, closeFunction }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <button onClick={closeFunction}>
          <img src={iconClose} alt='icone fechar modal' />
        </button>
        <DivContent>{children}</DivContent>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
