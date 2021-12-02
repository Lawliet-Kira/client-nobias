import React, { useState, useEffect } from 'react';

import { Loading } from "react-simple-chatbot";

import { postToAPI, nextBias } from "../Utils/API"; 

import "./scss/CompAPI.scss";

const CompApi = (props) => {

    const { triggerNextStep, steps } = props

    const [ loading, setLoading ] = useState(true);

    const triggerNext = (biasq) => {
        console.log("El valor de result es: ", biasq);
        triggerNextStep({ trigger: biasq });
    }

    useEffect(() => {

        postToAPI("https://nobiaspredictions.herokuapp.com/predictG", {
            values: [
                steps.ga1.value,
                steps.ga2.value,
                steps.ga3.value,
            ],
        }).then((data) => {

            let nextq = nextBias(data);

            console.log("El valor de nextq: ", nextq);

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