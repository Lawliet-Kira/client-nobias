import React, { useContext } from 'react';

import { ContextoBD } from "../../contexts/contextBD";
import { postToAPI, codeSesgos } from '../../utils/API';

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
                id: "pq2",  // Performance Question 2
                message: "Un padre y su hijo viajan en coche y tienen un accidente grave. El padre muere y al hijo se lo llevan al hospital porque necesita una compleja operación de emergencia, para la que llaman a una eminencia médica. Pero cuando entra en el quirófano dice: «No puedo operarlo, es mi hijo». ¿Cuál es tu primera impresión? Recuerda responder con honestida",
                trigger: "pa2",
            },
            {
                id: "pa2",  // Performance Answer 1
                options: [
                  {
                    value: "1",
                    label: "Que el quirófano era el padre (hombre) y la situación es confusa",
                    trigger: "pq3",
                  },
                  {
                    value: "2",
                    label: "Que el quirófano era la madre y no tuve dificultades en entender la situación",
                    trigger: "pq3",
                  },
                ],
            },
            {
                id: "pq3",  //  Perfomance Question 3
                message: "Si ves como una compañera de trabajo está complicada explicando algo en lo que trabajaron juntos ¿Qué harías?",
                trigger: "pa3",
            },
            {
                id: "pa3",  // Performance Answer 3
                options: [
                  {
                    value: "1",
                    label: "Explicarlo tú",
                    trigger: "pq4",
                  },
                  { 
                    value: "2", 
                    label: "Nada", 
                    trigger: "pq4" 
                  },
                  {
                    value: "3",
                    label: "Preguntarle si quiere que la ayudes",
                    trigger: "pq4",
                  },
                ],
            },
            {
                id: "pq4",  // Performance Question 4
                message: "Si una amiga tuya te está explicando sobre una duda que tenias y en la mitad ves como lo que ya te había explicado bien lo vuelve a explicar un amigo tuyo, ¿Que harias?",
                trigger: "pa4",
            },
            {
                id: "pa4",  // Performance Answer 1
                options: [
                  {
                    value: "1",
                    label:
                      "Preguntarle porque te explico lo que recién te habían explicado",
                    trigger: "pq5",
                  },
                  {
                    value: "2",
                    label: "Darle las gracias a los 2",
                    trigger: "pq5",
                  },
                  { 
                    value: "3", 
                    label: "Nada", 
                    trigger: "pq5" 
                  },
                ],
            },
            {
                id: "pq5",  // Performance Question 5
                message: "Una colega de trabajo consigue un ascenso medio dudoso a tu parecer. ¿A qué crees que se debió tal ascenso?",
                trigger: "pa5",
            },
            {
                id: "pa5",  // Perfomance Answer 5
                options: [
                  {
                    value: "1",
                    label: "Lleva bastante tiempo en el trabajo",
                    trigger: "pq6",
                  },
                  {
                    value: "2",
                    label: "Es amiga muy íntima del jefe",
                    trigger: "pq6",
                  },
                  {
                    value: "3",
                    label: "Tuvo un buen desempeño el último mes",
                    trigger: "pq6",
                  },
                ],
            },
            {
                id: "pq6",  // Performance Question 6
                message: "¿Cuán de acuerdo estás con que las mujeres no saben manejar?",
                trigger: "pa6",
            },
            {
                id: "pa6", // Performance Answer 6
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