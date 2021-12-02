import React, { useContext, useEffect, useState } from 'react';

import  { Loading } from "react-simple-chatbot";

import { ContextoBD } from "../contexts/contextBD";

import { postToAPI,  codeSesgos } from "../Utils/API";

import "./scss/UnconsciousAPI.scss";

const UnconsciousAPI = (props) => {

    const { triggerNextStep, steps } = props;

    const [ loading, setLoading ] = useState(true);
    
    const {
        bias,
        setBias,
        setCode,
        setUrl
    } = useContext(ContextoBD);
    
    useEffect(() => {
        postToAPI("https://nobiaspredictions.herokuapp.com/predictUnconscious", {
            values: [
                steps.ua1.value,
                steps.ua2.value,
                steps.ua3.value
            ]
        }).then((data) => {

            console.log("unsconciousAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "unconscious"
                ]
            });

            if( data === 1 ){
                setCode(codeSesgos.unconscious.code);
                setUrl(codeSesgos.unconscious.url);
                triggerNextStep({ trigger: "simulation" });
            }else{
                
                if( !bias.includes("attribution") ){
                    triggerNextStep({ trigger: "aq1" });
                }else if( !bias.includes("performance") ){
                    triggerNextStep({ trigger: "pq1" });   
                }else if( !bias.includes("maternal")){
                    triggerNextStep({ trigger: "mq1" });
                }else{ 
                    setCode(codeSesgos.unconscious.code);
                    setUrl(codeSesgos.unconscious.url);
                    triggerNextStep({ trigger: "simulation" });
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