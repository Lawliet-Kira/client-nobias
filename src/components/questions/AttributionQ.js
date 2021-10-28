import React, { useContext } from 'react';

import { ContextoBD } from "../../contexts/contextBD";
import { postToAPI, codeSesgos, nextBias } from '../../utils/API';

import AttributionAPI from '../AttributionAPI';

function AttributionQ(){

  return [
            {
                id: "aq1",  // Attribution Question 1
                message: "Acabas de finalizar un examen oral en que a la gran mayoría del curso no le fue muy bien, pero al ver las notas te percatas que las mejores corresponden a las de las mujeres ¿Cuál es el primer pensamiento que se te viene a la mente?",
                trigger: "aa1",
            },
            {
                id: "aa1",  // Attribution Answer 1
                options: [
                  {
                    value: "1",
                    label: "El profesor tiene una preferencia por las mujeres y por eso ellas obtuvieron una mejor nota",
                    trigger: "aq2" 
                  },
                  {
                    value: "2",
                    label: "Las mujeres realmente merecían esa nota porque demostraron manejar los conocimientos del examen",
                    trigger: "aq2" 
                  },
                ],
            },
            {
                id: "aq2",  // Attribution Question 2
                message: "Te encuentras en una presentación de un trabajo junto con tu compañera. En el transcurso, ella se confunde con algunos contenidos por lo que obtienen una menor calificación y reprueban la asignatura. ¿Cuál sería tu reacción frente a esto?",
                trigger: "aa2",
            },
            {
                id: "aa2",  // Attribution Answer 2
                options: [
                  {
                    value: "1",
                    label: "Llamarle la atención porque habían estudiado todos los contenidos juntos y necesitaban de esa presentación para aprobar",
                    trigger: "aq3"
                  },
                  {
                    value: "2",
                    label: "Decirle que no se preocupe, que para la próxima se dará",
                    trigger: "aq3"
                  },
                ],
            },
            {
                id: "aq3", // Attribution Question 3
                message: "Eres jefe de una prestigiosa empresa informática y debes encontrar a alguien que tome el puesto de desarrollador de software. Entre los candidatos, se presentan un hombre y una mujer con currículums similares. ¿A quién escogerías?",
                trigger: "aa3",
            },
            {
                id: "aa3",   // Attribution Answer 3
                options: [
                  {
                    value: "1",
                    label: "Al hombre",
                    trigger: "api_a"
                  },
                  {
                    value: "2",
                    label: "A la mujer",
                    trigger: "api_a"
                  },
                ],
            },
            {
              id: "api_a",
              component: <AttributionAPI />,
              waitAction: true,
            }
        ];

}

export default AttributionQ;