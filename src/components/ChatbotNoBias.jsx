import React, { useState, useContext } from 'react';
import Chatbot from 'react-simple-chatbot';
import Link from './Link';

// style-components
import { ThemeProvider } from 'styled-components';

// Importación de Contexto
import { ContextoBD } from '../contexts/contextBD';

import "./scss/ChatbotNoBias.scss";

import { postToAPI } from '../Utils/API';

// Questions
import GeneralQ from "./questions/GeneralQ";
import AttributionQ from "./questions/AttributionQ";
import PerformanceQ from "./questions/PerformanceQ";
import UnconsciousQ from "./questions/UnconsciousQ";

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Poppins',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#5D5FEF',
    botFontColor: '#fff',
    userBubbleColor: '#9C9DFF',
    userFontColor: '#4a4a4a',
};

const ChatbotNoBias = () => {

    const { 
        resp, 
        setResp,
        code,
        setCode,  
        url,
        setUrl
    } = useContext(ContextoBD);
    
    const steps = [ 
        {
            id: "0", // Welcome Message
            message: "Bienvenido al chatbot de No Bias, por favor responda las siguientes preguntas con honestidad",
            trigger: "gq1", 
        },
        ...GeneralQ(),
        ...AttributionQ(),
        ...PerformanceQ(),
        ...UnconsciousQ(),
        {
            id: "simulation",
            message: "Ahora entraras a una simulación para ver como actuarias ante una situación de la vida real",
            trigger: "simulationLink"
        },
        {
            id: "simulationLink",
            component: <Link />,
            waitAction: true,
            asMessage: true,
            end: true,
        }
        
    ];

    return ( 
        <ThemeProvider theme={theme}>
            <Chatbot
                width="1000px"
                height="800px"
                hideHeader={true}
                hideSubmitButton={true}
                inputStyle={{ display: "none" }}
                botAvatar={"../logoNB.png"}
                steps={steps}
            />
        </ThemeProvider>
    );
}
 
export default ChatbotNoBias;