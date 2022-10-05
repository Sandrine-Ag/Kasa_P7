import React from "react";
import { BrowserRouter as Routes, Route} from "react-router-dom";
import Apparts from "../pages/Apparts";
import Apropos from "../pages/Apropos";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

const routeur = (
  <Routes>
    <Route exact path = "/" element = {<Home />} />
    <Route exact path = "/apropos" element = {<Apropos />} />
    <Route exact path = "/apparts/:id" element = {<Apparts />} />
    <Route exact path = "*" element = {<Page404 />} />

  </Routes>
)

export default routeur;
