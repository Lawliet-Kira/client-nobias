import React from 'react';
import Chatbot from 'react-simple-chatbot';

const ChatbotNoBias = () => {

    const steps = [
        {
            id: 'hello-world',
            message: 'Hello World!',
            end: true,
        }
    ];

    return ( 
        <Chatbot
            width="1000px"
            headerTitle="No Bias"
            hideSubmitButton="true"
            botAvatar={"../assets/chatbot.png"}
            steps={steps}
        />
    );
}
 
export default ChatbotNoBias;