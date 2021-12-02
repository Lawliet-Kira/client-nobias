import { Settings } from "@mui/icons-material";
import React from "react";
import { Switch, Route } from "react-router-dom";

// Sistema de navegación
import ChatbotNoBias from "../Components/ChatbotNoBias";

const Routers = (props) => {
    return ( 
        <Switch>
            <Route path="/" exact>
                Home
            </Route>
            <Route path="/settings" exact>
                Settings
            </Route>
            <Route path="/chatbot/:id" exact>
                <ChatbotNoBias />
            </Route>
        </Switch>
    );
}
 
export default Routers;