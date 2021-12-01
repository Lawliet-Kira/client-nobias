import React, { useContext, useEffect, useState } from 'react';

import { Loading } from "react-simple-chatbot";

import { postToAPI, codeSesgos } from '../utils/API';

import "./scss/AttributionAPI.scss";

import { ContextoBD } from '../contexts/contextBD';

const AttributionAPI = (props) => {

    const { triggerNextStep, steps } = props;
    
    const [ loading, setLoading ] = useState(true);

    const {
        setCode,
        setUrl,
        setBias,
        bias
    } = useContext(ContextoBD);

    useEffect(() => {
        
        postToAPI("https://nobiaspredictions.herokuapp.com/predictAttribution", {
            values: [
                steps.aa1.value,
                steps.aa2.value,
                steps.aa3.value
            ]
        }).then((data) => {

            console.log("attributionAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "attribution"
                ]
            });

            if( data === 1 ){
                setCode(codeSesgos.attribution.code);
                setUrl(codeSesgos.attribution.url);
                triggerNextStep({ trigger: "simulation" });
            }else{

                if( !bias.includes("unconscious") ){
                    triggerNextStep({ trigger: "uq1" });
                }else if ( !bias.includes("performance") ){
                    triggerNextStep({ trigger: "pq1" });
                }else if ( !bias.includes("maternal")){
                    triggerNextStep({ trigger: "mq1" });
                }else { 
                    setCode(codeSesgos.attribution.code);
                    setUrl(codeSesgos.attribution.url);
                    triggerNextStep({ trigger: "simulation" });
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
