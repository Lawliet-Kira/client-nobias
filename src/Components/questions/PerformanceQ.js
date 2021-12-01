import React from 'react';

import PerformanceAPI from '../PerformanceAPI';

function PerformanceQ() {

  return [
            {
                id: "pq1",  // Perfomance Question 1
                message: "Si tu compañera de trabajo va a presentar una su idea a su jefe que sabes que suele menospreciar las ideas de las mujeres, ¿Que harías?",
                trigger: "pa1",
            },
            {
                id: "pa1",  // Perfomance Answer 1
                options: [
                  {
                    value: "1",
                    label: "Proponer presentar tu",
                    trigger: "pq2",
                  },
                  {
                    value: "2",
                    label: "Ir con ella y decir que la apoyas",
                    trigger: "pq2",
                  },
                  {
                    value: "3",
                    label: "Desearle suerte",
                    trigger: "pq2",
                  },
                ],
            },
            {
                id: "pq2",  //  Perfomance Question 2
                message: "Si ves como una compañera de trabajo está complicada explicando algo en lo que trabajaron juntos ¿Qué harías?",
                trigger: "pa2",
            },
            {
                id: "pa2",  // Performance Answer 2
                options: [
                  {
                    value: "1",
                    label: "Explicarlo tú",
                    trigger: "pq3",
                  },
                  { 
                    value: "2", 
                    label: "Nada", 
                    trigger: "pq3" 
                  },
                  {
                    value: "3",
                    label: "Preguntarle si quiere que la ayudes",
                    trigger: "pq3",
                  },
                ],
            },
            {
                id: "pq3",  // Performance Question 3
                message: "¿Cuán de acuerdo estás con que las mujeres no saben manejar?",
                trigger: "pa3",
            },
            {
                id: "pa3", // Performance Answer 3
                options: [
                  { 
                    value: "1", 
                    label: "Acuerdo", 
                    trigger: "api_p"
                  },
                  { 
                    value: "2", 
                    label: "Neutral", 
                    trigger: "api_p"
                  },
                  { 
                    value: "3", 
                    label: "Desacuerdo", 
                    trigger: "api_p"
                  },
                ],
            },
            {
              id: "api_p",
              component: <PerformanceAPI />,
              waitAction: true
            }
        ];
}

export default PerformanceQ;