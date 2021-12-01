import "./App.css";
import Result from "./pages/Result/Result.js";
import Capsulas from "./pages/Capsulas/Capsulas.js";
import Inicio from "./pages/Inicio/Inicio.js";
import InicioPersona from "./pages/Inicio/Inicio-persona";

import "bootstrap/dist/css/bootstrap.min.css";

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
            <Route path="/" element={<LayoutsWithNavbar/>}>
              <Route index element={<Inicio/>}/>
              <Route path="Persona" element={<InicioPersona/>}/>
              <Route element={<Capsulas/>} path="Capsulas" />
              <Route element={<Result/>} path="Resultados" />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
