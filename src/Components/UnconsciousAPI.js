import React, { useContext, useEffect, useState } from 'react';

import Chatbot, { Loading } from "react-simple-chatbot";

import { ContextoBD } from "../contexts/contextBD";

import { postToAPI, nextBias, codeSesgos } from '../utils/API';

import "./scss/UnconsciousAPI.scss";

const UnconsciousAPI = (props) => {

    const [ loading, setLoading ] = useState(true);
    
    const {
        bias,
        setBias,
        setCode,
        setUrl
    } = useContext(ContextoBD);
    
    const triggerNext = (biasq) => {
        props.triggerNextStep({ trigger: biasq });
    }

    useEffect(() => {
        postToAPI("https://nobiaspredictions.herokuapp.com/predictUnconscious", {
            values: [
                props.steps.ua1.value,
                props.steps.ua2.value,
                props.steps.ua3.value
            ]
        }).then((data) => {

            console.log("unsconciousAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "unconscious"
                ]
            });

            if( data == 1 ){
                setCode(codeSesgos.unconscious.code);
                setUrl(codeSesgos.unconscious.url);
                triggerNext("simulation");
            }else{
                
                if( !bias.includes("attribution") ){
                    triggerNext("aq1");
                }else if( !bias.includes("performance") ){
                    triggerNext("pq1");
                }else{ 
                    setCode(codeSesgos.unconscious.code);
                    setUrl(codeSesgos.unconscious.url);
                    triggerNext("simulation");
                }
            }

            setLoading(false);

        });

    }, []);
    
    return ( 
        <div className="uncon-api">
            { loading ?
                <Loading /> :
                <div>

                </div>
            }
        </div>
    );
}
 
export default UnconsciousAPI;