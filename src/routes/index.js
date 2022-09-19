import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Recipes from "../pages/Recipes";
import Solicitations from "../pages/Solicitations";
import SolicitationDetails from "../pages/SolicitationsDetails";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/pedidos' element={<Solicitations />} />
        <Route exact path='/pedidos/:id' element={<SolicitationDetails />} />
        <Route exact path='/receitas' element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
