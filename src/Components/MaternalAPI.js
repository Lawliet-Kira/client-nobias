import React, { useContext, useEffect, useRef, useState } from 'react';

import { Loading } from "react-simple-chatbot";

import { postToAPI, codeSesgos } from '../utils/API';

import "./scss/MaternalAPI.scss";

import { ContextoBD } from '../contexts/contextBD';

const MaternalAPI = (props) => {

    const { triggerNextStep, steps } = props;

    const [ loading, setLoading ] = useState(true);

    const {
        setCode,
        setUrl,
        setBias,
        bias
    } = useContext(ContextoBD);

    useEffect(() => {

        postToAPI("https://nobiaspredictions.herokuapp.com/predictMaternal", {
            values: [
                steps.ma1.value,
                steps.ma2.value,
                steps.ma3.value,
            ]

        }).then((data) => {

            console.log("maternalAPI: ", data);

            setBias( prevState => {  
                return [
                    ...prevState,
                    "maternal"
                ]
            });

            if( data === 1 ){
                setCode(codeSesgos.maternal.code);
                setUrl(codeSesgos.maternal.url);
                triggerNextStep({ trigger: "simulation" });
            }else{
                
                if( !bias.includes("attribution") ){
                    triggerNextStep({ trigger: "aq1" });
                }else if( !bias.includes("unconscious") ){
                    triggerNextStep({ trigger: "uq1" });
                }else if( !bias.includes("perfomance") ){
                    triggerNextStep({ trigger: "pq1" });
                }else{ 
                    setCode(codeSesgos.maternal.code);
                    setUrl(codeSesgos.maternal.url);
                    triggerNextStep({ trigger: "simulation" })
                }

            }

            setLoading(false);

        });

    }, []);

    return ( 
        <div className="maternal-api">
            { loading ?
                <Loading /> :
                <div>

                </div>
            }
        </div>
    );
}
 
export default MaternalAPI;
