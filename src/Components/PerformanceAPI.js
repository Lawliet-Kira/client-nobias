import React, { useContext, useEffect, useRef, useState } from 'react';

import { Loading } from "react-simple-chatbot";

import { postToAPI, codeSesgos } from "../Utils/API";

import "./scss/PerformanceAPI.scss";

import { ContextoBD } from '../contexts/contextBD';

const PerformanceAPI = (props) => {

    const { triggerNextStep, steps} = props;

    const [ loading, setLoading ] = useState(true);

    const {
        setCode,
        setUrl,
        setBias,
        bias
    } = useContext(ContextoBD);

    useEffect(() => {
        postToAPI("https://nobiaspredictions.herokuapp.com/predictPerformance", {
            values: [
                steps.pa1.value,
                steps.pa2.value,
                steps.pa3.value,
            ]
        }).then((data) => {

            console.log("perfomanceAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "performance"
                ]
            });

            if( data === 1 ){
                setCode(codeSesgos.performance.code);
                setUrl(codeSesgos.performance.url);
                triggerNextStep({ trigger: "simulation" });
            }else{
                
                if( !bias.includes("attribution") ){
                    triggerNextStep({ trigger: "aq1" });
                }else if( !bias.includes("unconscious") ){
                    triggerNextStep({ trigger: "uq1" });
                }else if( !bias.includes("maternal")){
                    triggerNextStep({ trigger: "mq1" });
                }else{ 
                    setCode(codeSesgos.performance.code);
                    setUrl(codeSesgos.performance.url);
                    triggerNextStep({ trigger: "simulation" })
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
