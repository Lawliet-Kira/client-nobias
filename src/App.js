import React from 'react';

import "./App.css";
import '@fontsource/roboto/400.css';

import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Result from "./views/Result/Result";
import Capsulas from "./views/Capsulas/Capsulas";
import Inicio from "./views/Inicio/Inicio";
import InicioPersona from "./views/Inicio/Inicio-persona";
import Login from "./views/Login";
import Chatbot from "./Components/ChatbotNoBias";

import {Outlet, Routes, Route, BrowserRouter} from "react-router-dom"


const LayoutsWithNavbar = () => {
  return(
    <>
    <Outlet/>
    </>
  );
}

function App() {
  return (

    <div className="App-header">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LayoutsWithNavbar/>}>
              <Route exact index element={<Inicio/>}/>
              <Route exact element={<Login/>} path="Empresa" />
              <Route exact element={<Chatbot/>} path="Chatbot" />
              <Route exact element={<InicioPersona/>} path="Persona" />
              <Route exact element={<Capsulas/>} path="Capsulas" />
              <Route exact element={<Result/>} path="Resultados" />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
      
  );

}

export default App;
