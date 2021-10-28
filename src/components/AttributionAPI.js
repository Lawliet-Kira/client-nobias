import React, { useContext, useEffect, useState } from 'react';

import Chatbot, { Loading } from "react-simple-chatbot";

import { postToAPI, nextBias, codeSesgos } from '../Utils/API';

import "./scss/AttributionAPI.scss";

import { ContextoBD } from '../contexts/contextBD';

const AttributionAPI = (props) => {
    
    const [ loading, setLoading ] = useState(true);

    const {
        setCode,
        setUrl,
        setBias,
        bias
    } = useContext(ContextoBD);
    
    const triggerNext = (biasq) => {
        props.triggerNextStep({ trigger: biasq });
    }

    useEffect(() => {
        postToAPI("https://nobiaspredictions.herokuapp.com/predictAttribution", {
            values: [
                props.steps.aa1.value,
                props.steps.aa2.value,
                props.steps.aa3.value
            ]
        }).then((data) => {

            console.log("attributionAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "attribution"
                ]
            });

            if( data == 1 ){
                setCode(codeSesgos.attribution.code);
                setUrl(codeSesgos.attribution.url);
                triggerNext("simulation");
            }else{

                if( !bias.includes("unconscious") ){
                    triggerNext("uq1");
                }else if( !bias.includes("performance") ){
                    triggerNext("pq1");
                }else{ 
                    setCode(codeSesgos.attribution.code);
                    setUrl(codeSesgos.attribution.url);
                    triggerNext("simulation");
                }
            }

            setLoading(false);

        });

    }, []);
    
    return (  
        <div className="attrb-api">
            { loading ?
                <Loading /> :
                <div>

                </div>
            }
        </div>
    );
}
 
export default AttributionAPI;
