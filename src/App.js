import "./App.css";
// import logo from "./logo.svg";
// import SimpleForm from "./Components/chatbot.jsx";
// import ChatbotNoBias from "./Components/ChatbotNoBias.jsx";
//import Result from "./result.jsx";
import 'semantic-ui-css/semantic.min.css';

import "bootstrap/dist/css/bootstrap.min.css";


// CHATBOT

import React, { useContext } from 'react';
import Chatbot from 'react-simple-chatbot';
import Link from './Components/Link';

// style-components
import { ThemeProvider } from 'styled-components';

// Importación de Contexto
import { ContextoBD } from './contexts/contextBD';

import "./Components/scss/ChatbotNoBias.scss";

// Questions
import GeneralQ from "./Components/questions/GeneralQ";
import AttributionQ from "./Components/questions/AttributionQ";
import PerformanceQ from "./Components/questions/PerformanceQ";
import UnconsciousQ from "./Components/questions/UnconsciousQ";

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

//CHATBOT
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          No Bias!
        </a> */}
        {/* <SimpleForm /> */}
        {/* <Result /> */}
        <ChatbotNoBias />
      </header>
    </div>
  );
}

export default App;
