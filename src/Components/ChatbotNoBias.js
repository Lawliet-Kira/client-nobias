import React from 'react';
import Chatbot from 'react-simple-chatbot';
import Link from './Link';

// style-components
import { ThemeProvider } from 'styled-components';

import "./scss/ChatbotNoBias.scss";

// Questions
import GeneralQ from "./questions/GeneralQ";
import AttributionQ from "./questions/AttributionQ";
import PerformanceQ from "./questions/PerformanceQ";
import UnconsciousQ from "./questions/UnconsciousQ";
import MaternalQ from './questions/MaternalQ';

import Topbar from '../Components/NavBar/AppBar';

import FAB from "../Components/Fab/fab";


import logo from "../logoNB.png";


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

const chatbotStyle = {
    position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}

const ChatbotNoBias = (props) => {
    
    const { employee } = props;

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
        ...MaternalQ(),
        {
            id: "simulation",
            message: "Ahora entraras a una simulación para ver como actuarias ante una situación de la vida real",
            trigger: "simulationLink"
        },
        {
            id: "simulationLink",
            component: <Link employee={employee} />,
            waitAction: true,
            asMessage: true,
            end: true,
        }
        
    ];

    return ( 
        <ThemeProvider theme={theme}>
            <Topbar />
            <Chatbot
                width="1000px"
                height="700px"
                hideHeader={true}
                hideSubmitButton={true}
                inputStyle={{ display: "none" }}
                botAvatar={logo}
                steps={steps}
                style={chatbotStyle}
            />
            <FAB text_bold="¿No sabes que hacer?" text_normal="Responde las preguntas del chatbot"/>
        </ThemeProvider>
        
    );
}
 
export default ChatbotNoBias;