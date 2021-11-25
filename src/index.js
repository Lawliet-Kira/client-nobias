import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./dashboard.jsx";

// Importación de Contexto
import { ProovedorBD } from "./contexts/contextBD";

ReactDOM.render(
  <ProovedorBD>
    <App />
  </ProovedorBD>,
  document.getElementById("root")
);
