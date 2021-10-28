import React, { useContext, useEffect, useState } from 'react';

import Chatbot, { Loading } from "react-simple-chatbot";

import { postToAPI, nextBias, codeSesgos } from '../utils/API';

import "./scss/PerformanceAPI.scss";

import { ContextoBD } from '../contexts/contextBD';

const PerformanceAPI = (props) => {

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
        postToAPI("https://nobiaspredictions.herokuapp.com/predictPerformance", {
            values: [
                props.steps.pa1.value,
                props.steps.pa2.value,
                props.steps.pa3.value,
                props.steps.pa4.value,
                props.steps.pa5.value,
                props.steps.pa6.value
            ]
        }).then((data) => {

            console.log("perfomanceAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "performance"
                ]
            });

            if( data == 1 ){
                setCode(codeSesgos.performance.code);
                setUrl(codeSesgos.performance.url);
                triggerNext("simulation");
            }else{
                
                if( !bias.includes("attribution") ){
                    triggerNext("aq1");
                }else if( !bias.includes("unconscious") ){
                    triggerNext("uq1");
                }else{ 
                    setCode(codeSesgos.performance.code);
                    setUrl(codeSesgos.performance.url);
                    triggerNext("simulation");
                }

            }

            setLoading(false);

        });

    }, []);

    return ( 
        <div className="perf-api">
            { loading ?
                <Loading /> :
                <div>

                </div>
            }
        </div>
    );
}
 
export default PerformanceAPI;
