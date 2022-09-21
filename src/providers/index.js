import { SolicitationsProvider } from "./solicitations";
import { CurrentSolicitationProvider } from "./currentSolicitation";
import { TokenProvider } from "./token";
import { ModalProvider } from "./modal";
import { TimeProvider } from "./time";

const Providers = ({ children }) => (
  <SolicitationsProvider>
    <CurrentSolicitationProvider>
      <ModalProvider>
        <TimeProvider>
          <TokenProvider>{children}</TokenProvider>
        </TimeProvider>
      </ModalProvider>
    </CurrentSolicitationProvider>
  </SolicitationsProvider>
);

export default Providers;
