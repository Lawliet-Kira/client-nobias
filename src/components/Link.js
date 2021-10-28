import React, { useEffect, useState, useContext } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import Chatbot, { Loading } from "react-simple-chatbot";

import { postToAPI } from "../utils/API";

// Importación de Contexto
import { ContextoBD } from '../contexts/contextBD';

const Link = (props) => {
    
    const [ loading, setLoading ] = useState(true);
    const [ idSim, setidSim ] = useState("");

    const { 
        code,
        setCode,  
        url,
        setUrl
    } = useContext(ContextoBD);

    const triggerNext = () => {
        props.triggerNextStep();
    }

    useEffect(() => {

        if( code == "1" ){    // Perfomance
            
            // Enviar respuestas a la base de datos
            postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "1",
                r1: props.steps.ga1.value, 
                r2: props.steps.ga2.value,      
                r3: props.steps.ga3.value,
                r4: props.steps.pa1.value,
                r5: props.steps.pa2.value,
                r6: props.steps.pa3.value
            }).then( (res) => {
                setidSim(res.id);
                setLoading(false);
                triggerNext();
            })

        }else if ( code == "2" ){ // Attribution

            // Enviar respuestas a la base de datos
            postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "2",
                r1: props.steps.ga1.value, 
                r2: props.steps.ga2.value,      
                r3: props.steps.ga3.value,
                r4: props.steps.aa1.value,
                r5: props.steps.aa2.value,
                r6: props.steps.aa3.value 
            }).then( (res) => {
                setidSim(res.id);
                setLoading(false);
                triggerNext();
            })

        }else if ( code == "3" ){ // Unconscious

            // Enviar respuestas a la base de datos
            postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "3",
                r1: props.steps.ga1.value, 
                r2: props.steps.ga2.value,      
                r3: props.steps.ga3.value,
                r4: props.steps.ua1.value,
                r5: props.steps.ua2.value,
                r6: props.steps.ua3.value
            }).then( (res) => {
                setidSim(res.id);
                setLoading(false);
                triggerNext();
            })

        } else {    // Attribution
            // Enviar respuestas a la base de datos
            postToAPI("https://api-nobias.herokuapp.com/chatresp", {    
                type: "2",
                r1: props.steps.ga1.value, 
                r2: props.steps.ga2.value,      
                r3: props.steps.ga3.value,
                r4: props.steps.aa1.value,
                r5: props.steps.aa2.value,
                r6: props.steps.aa3.value 
            }).then( (res) => {
                setidSim(res.id);
                setLoading(false);
                triggerNext();
            })

        }
        
    }, []); 

    return (
        <div>
        { loading ? 
            <Loading />
            :
            <Button size={'large'} as='a' href={url.concat(idSim)} icon labelPosition='right'>
                Ir a la Simulación
                <Icon name='right arrow' />
            </Button>
        }
        </div>
    );
}
 
export default Link;