import { SolicitationProvider } from "./solicitations";
import { TokenProvider } from "./token";

const Providers = ({ children }) => (
  <SolicitationProvider>
    <TokenProvider>{children}</TokenProvider>
  </SolicitationProvider>
);

export default Providers;
