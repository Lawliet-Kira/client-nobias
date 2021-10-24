import React from 'react';
import Chatbot from 'react-simple-chatbot';
import Link from './Link';

// style-components
import { ThemeProvider } from 'styled-components';

import "./scss/ChatbotNoBias.scss";

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

    // Handle para la base de datos y redirección al 
    const handleEnd = ({steps, values}) => {
        // console.log(steps);
        // console.log(values);
        alert(`Chat handleEnd callback! Number: ${values[0]}`);

        // Enviar datos a la base de datos
    }

    const steps = [
        {
            id: '1',
            message: 'Pick a number',
            trigger: '2',
        },
        {
            id: '2',
            options: [
                { value: '1', label: '1', trigger: '3' },
                { value: '2', label: '2', trigger: '3' },
                { value: '3', label: '3', trigger: '3' },
                { value: '4', label: '4', trigger: '3' },
                { value: '5', label: '5', trigger: '3' },
            ],
        },
        {  
            id: '3',
            message: 'A callback message was called',
            trigger: '4',
        },
        {
            id: '4',
            component: <Link />,
            end: true,
        },

    ];

    return ( 
        <ThemeProvider theme={theme}>
            <Chatbot
                handleEnd={handleEnd}
                width="1000px"
                hideHeader={true}
                hideSubmitButton="true"
                inputStyle={{ display: "none" }}
                botAvatar={"../logoNB.png"}
                steps={steps}
            />
        </ThemeProvider>
    );
}
 
export default ChatbotNoBias;