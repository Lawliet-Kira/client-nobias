import React from 'react';

import MaternalAPI from '../MaternalAPI';

function MaternalQ() {

    return [
        {
            id: "mq1",  // Maternal Question 1
            message: "Estás en una conversación entre colegas y un hombre sin hijos le pregunta a una mujer con hijos ¿Cómo administras el trabajo y crías a tus hijos? Debes estar abrumada. ¿Qué  te parece la pregunta de tu colega?",
            trigger: "ma1"
        },
        {
            id: "ma1",  // Maternal Answer 1
            options: [
                {
                    value: "1",
                    label: "Muy interesante",
                    trigger: "mq2"
                },
                {
                    value: "2",
                    label: "Interesante",
                    trigger: "mq2"
                },
                {
                    value: "3",
                    label: "Indiferente",
                    trigger: "mq2"
                },
                {
                    value: "4",
                    label: "Molesto",
                    trigger: "mq2"
                },
                {
                    value: "5",
                    label: "Muy molesto",
                    trigger: "mq2"
                }
            ],
        },
        {  
            id: "mq2",  // Maternal Question 2
            message: "En una reunión, un colega le dice a una mujer que no se ausente por mucho tiempo, debido a su maternidad, ya que el equipo “no puede arreglárselas sin ella”. ¿Qué tan de acuerdo estás con esta situación?",
            trigger: "ma2"
        },
        {
            id: "ma2",  // Maternal Answer 2
            options: [
                {
                    value: "1",
                    label: "Muy de acuerdo",
                    trigger: "mq3"
                },
                {
                    value: "2",
                    label: "De acuerdo",
                    trigger: "mq3"
                },
                {
                    value: "3",
                    label: "Indiferente",
                    trigger: "mq3"
                },
                {
                    value: "4",
                    label: "Desacuerdo",
                    trigger: "mq3"
                },
                {
                    value: "5",
                    label: "Muy en desacuerdo",
                    trigger: "mq3"
                }
            ],
        },
        {
            id: "mq3",   // Maternal Question 3
            message: "Las empleadas que ya son madres, se desempeñan peor que los empleados sin hijos. ¿Qué tan de acuerdo estás con esta situación?",
            trigger: "ma3"
        },
        {
            id: "ma3",  // Maternal Answer 3
            options: [
                {
                    value: "1",
                    label: "Muy de acuerdo",
                    trigger: "api_m"
                },
                {
                    value: "2",
                    label: "Acuerdo",
                    trigger: "api_m"
                },
                {
                    value: "3",
                    label: "Indiferente",
                    trigger: "api_m"
                },
                {
                    value: "4",
                    label: "Desacuerdo",
                    trigger: "api_m"
                },
                {
                    value: "5",
                    label: "Muy en desacuerdo",
                    trigger: "api_m"
                }
            ],
        },
        {  
            id: "api_m",
            component: <MaternalAPI />,
            waitAction: true,
        }
    ];

}

export default MaternalQ;

