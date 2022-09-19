import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Solicitations from "../pages/Solicitations";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/pedidos' element={<Solicitations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
