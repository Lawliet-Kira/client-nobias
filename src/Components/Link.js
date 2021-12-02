import React, { useEffect, useState, useContext } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import { Loading } from "react-simple-chatbot";

import { postToAPI } from "../Utils/API";

// Importación de Contexto
import { ContextoBD } from '../contexts/contextBD';

const Link = (props) => {

    const { triggerNextStep, steps, employee } = props;

    const [ loading, setLoading ] = useState(true);
    const [ idSim, setidSim ] = useState();
    
    const { 
        code,
        url,
    } = useContext(ContextoBD);

    useEffect(async () => {

        let ID;

        function SetID(id){
            ID = id;
        }

        if( code === "1" ){    // Perfomance
            
            // Enviar respuestas a la base de datos
            await postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "1",
                r1: steps.ga1.value, 
                r2: steps.ga2.value,      
                r3: steps.ga3.value,
                r4: steps.pa1.value,
                r5: steps.pa2.value,
                r6: steps.pa3.value
            }).then( (res) => {
                SetID(res.id);
                setidSim(res.id);
            })

        }else if ( code === "2" ){ // Attribution

            // Enviar respuestas a la base de datos
            await postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "2",
                r1: steps.ga1.value, 
                r2: steps.ga2.value,      
                r3: steps.ga3.value,
                r4: steps.aa1.value,
                r5: steps.aa2.value,
                r6: steps.aa3.value 
            }).then( (res) => {
            
                SetID(res.id);
                setidSim(res.id);

            })

        }else if ( code === "3" ){ // Unconscious

            // Enviar respuestas a la base de datos
            await postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "3",
                r1: steps.ga1.value, 
                r2: steps.ga2.value,      
                r3: steps.ga3.value,
                r4: steps.ua1.value,
                r5: steps.ua2.value,
                r6: steps.ua3.value
            }).then( (res) => {
               
                SetID(res.id);
                setidSim(res.id);

            })

        } else if ( code === "4" ) { // Maternal

            // Enviar respuestas a la base de datos
            await postToAPI("https://api-nobias.herokuapp.com/chatresp", {
                type: "4",
                r1: steps.ga1.value, 
                r2: steps.ga2.value,      
                r3: steps.ga3.value,
                r4: steps.ma1.value,
                r5: steps.ma2.value,
                r6: steps.ma3.value
            }).then( (res) => {
                
                SetID(res.id);
                setidSim(res.id);
            })            

        } else {    // Attribution
            // Enviar respuestas a la base de datos
            await postToAPI("https://api-nobias.herokuapp.com/chatresp", {    
                type: "2",
                r1: steps.ga1.value, 
                r2: steps.ga2.value,      
                r3: steps.ga3.value,
                r4: steps.aa1.value,
                r5: steps.aa2.value,
                r6: steps.aa3.value 
            }).then( (res) => {
                SetID(res.id);
                setidSim(res.id);
            })

        }

        if ( employee ){ 

            const req = {
                id: ID,
                entcode: employee.code 
            }

            // Enviar respuestas a la base de datos
            await postToAPI("https://api-nobias.herokuapp.com/user", req).then( (res) => {
                console.log("bd user: ", res);
            })

        }

        setLoading(false);
        triggerNextStep();    
        
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