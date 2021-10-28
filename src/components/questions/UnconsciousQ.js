import React, { useContext } from 'react';

import { ContextoBD } from "../../contexts/contextBD";
import { postToAPI, codeSesgos } from '../../Utils/API';

import UnconsciousAPI from '../UnconsciousAPI';

function UnconsciousQ() {

    return [
        {
            id: "uq1",  // Unconscious Question 1
            message: "¿Qué tan de acuerdo estás con que el hombre sea el que tenga que abrir la puerta cuando va con una mujer?",
            trigger: "ua1"
        },
        {
            id: "ua1",  // Unconscious Answer 1
            options: [
                {
                    value: "1",
                    label: "Muy de acuerdo",
                    trigger: "uq2"
                },
                {
                    value: "2",
                    label: "Acuerdo",
                    trigger: "uq2"
                },
                {
                    value: "3",
                    label: "Indiferente",
                    trigger: "uq2"
                },
                {
                    value: "4",
                    label: "Desacuerdo",
                    trigger: "uq2"
                },
                {
                    value: "5",
                    label: "Muy en desacuerdo",
                    trigger: "uq2"
                }
            ],
        },
        {  
            id: "uq2",  // Unconscious Question 2
            message: "En una entrevista una candidata hace un comentario que ofende al reclutador, aunque esa no era su intención. La mujer es rechazada porque él quedó molesto por el comentario a pesar de que era la candidata más calificada. ¿Qué tan de acuerdo estás con esta situación? (Heurística de afectividad, emociones pueden nublar tu juicio)",
            trigger: "ua2"
        },
        {
            id: "ua2",  // Unconscious Answer 2
            options: [
                {
                    value: "1",
                    label: "Muy de acuerdo",
                    trigger: "uq3"
                },
                {
                    value: "2",
                    label: "Acuerdo",
                    trigger: "uq3"
                },
                {
                    value: "3",
                    label: "Indiferente",
                    trigger: "uq3"
                },
                {
                    value: "4",
                    label: "Desacuerdo",
                    trigger: "uq3"
                },
                {
                    value: "5",
                    label: "Muy en desacuerdo",
                    trigger: "uq3"
                }
            ],
        },
        {
            id: "uq3",   // Unconscious Question 3
            message: "Una mujer se siente feliz al recibir una calificación de “cumple con las expectativas” en su evaluación de desempeño. Sin embargo, un colega le dice que la mayoría han recibido esa calificación. ¿Qué tan de acuerdo estás con esta situación? (Efecto contraste, A menudo emitimos juicios haciendo comparaciones. Como resultado, nuestras opiniones pueden modificarse dependiendo del estándar con el que hacemos la comparación)",
            trigger: "ua3"
        },
        {
            id: "ua3",  // Unconscious Answer 3
            options: [
                {
                    value: "1",
                    label: "Muy de acuerdo",
                    trigger: "api_u"
                },
                {
                    value: "2",
                    label: "Acuerdo",
                    trigger: "api_u"
                },
                {
                    value: "3",
                    label: "Indiferente",
                    trigger: "api_u"
                },
                {
                    value: "4",
                    label: "Desacuerdo",
                    trigger: "api_u"
                },
                {
                    value: "5",
                    label: "Muy en desacuerdo",
                    trigger: "api_u"
                }
            ],
        },
        {  
            id: "api_u",
            component: <UnconsciousAPI />,
            waitAction: true,
        }
    ];

}

export default UnconsciousQ;

