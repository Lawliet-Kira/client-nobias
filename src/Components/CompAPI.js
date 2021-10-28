import React, { useState, useEffect } from 'react';

import Chatbot, { Loading } from "react-simple-chatbot";

import { postToAPI, nextBias } from "../utils/API"; 

import "./scss/CompAPI.scss";

const CompApi = (props) => {

    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState("");

    const triggerNext = (biasq) => {
        console.log("El valor de result es: ", biasq);
        props.triggerNextStep({ trigger: biasq });
    }

    useEffect(() => {

        postToAPI("https://nobiaspredictions.herokuapp.com/predictG", {
            values: [
                props.steps.ga1.value,
                props.steps.ga2.value,
                props.steps.ga3.value,
            ],
        }).then((data) => {

            let nextq = nextBias(data);

            console.log("El valor de nextq: ", nextq);

            if ( nextq == "mq1"){
                nextq = nextBias("aq1")
            }

            // JSON data parsed by `data.json()` call
            setLoading(false);
            triggerNext(nextq);

        });

    }, []); 

    return (  
        <div className="comp_api">
            { loading ? 
                <Loading /> : 
                <div> 

                </div>}
        </div>
    );
}
 
export default CompApi;