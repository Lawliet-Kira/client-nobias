import React from 'react';

import CompApi from '../CompAPI';

function GeneralQ() {

  return [
            {
                id: "gq1",  // General Question 1
                message: "Existe un único cupo disponible para entrar a la carrera de ingeniería de sistemas en una universidad de gran renombre. El director debe escoger a quien darle el cupo entre un hombre y una mujer luego de una entrevista. Tanto el hombre como la mujer demostraron saber comunicarse, y durante la entrevista la mujer dio a conocer que tenía un hijo y que se graduó como mejor de su clase en un colegio de mujeres. Por otra parte, el hombre se graduó como el segundo mejor de su clase en un colegio mixto. Al finalizar las entrevistas el director se decanta por el hombre ¿Porque crees que la mujer no fue escogida? Selecciona la alternativa que más se acerque a tu manera de pensar:",
                trigger: "ga1", 
            },
            {
                id: "ga1",  // General Answer 1
                options: [
                  {
                    value: "1",
                    label: "Porque las mujeres tienen menos capacidades para la ingeniería en comparación a los hombres",
                    trigger: "gq2"
                  },
                  {
                    value: "2",
                    label: "Al ser madre el compromiso de la mujer con la universidad es menor pues tiene otras preocupaciones",
                    trigger: "gq2"
                  },
                  {
                    value: "3",
                    label: "Graduarse como mejor alumna en un colegio de mujeres no posee tanto mérito como ser de los mejores en un colegio mixto",
                    trigger: "gq2"
                  },
                  {
                    value: "4",
                    label: "Porque las ingeniería en sistemas es más afín a los hombres",
                    trigger: "gq2"
                  },
                ],
            },
            {
                id: "gq2",  // General Question 2
                message: "Se desea realizar un campeonato de fútbol en el pueblo. María, que tiene 27 años y es madre de un hijo, tiene la intención de inscribirse recordando cuando salió tercer lugar del campeonato de fútbol femenino hace unos años, buscando ahora el primer puesto. Su esposo, al escuchar esto, le dice que no puede participar por ciertas razones. ¿Por qué razón no podría participar? Selecciona la alternativa que más se acerque a tu manera de pensar:",
                trigger: "ga2",
            },
            {
                id: "ga2",  // General Answer 2
                options: [
                  {
                    value: "1",
                    label: "Porque tiene un niño pequeño a quien cuidar y su desempeño en el torneo no sería el mejor",
                    trigger: "gq3"
                  },
                  {
                    value: "2",
                    label:"Porque el fútbol es un deporte mayoritariamente para hombres",
                    trigger: "gq3"
                  },
                  {
                    value: "3",
                    label: "Porque las mujeres suelen tener un desempeño menor que los hombres en el fútbol y no la ves capaz",
                    trigger: "gq3"
                  },
                  {
                    value: "4",
                    label: "Porque el campeonato pasado fue sólo de mujeres, por eso tuvo ese puesto, esta vez será distinto",
                    trigger: "gq3"
                  },
                ],
            },
            {
                id: "gq3",  // General Question 3
                message: "Una madre tiene que ir de compras al supermercado, pero se le está haciendo tarde. Piensa en que sería mejor ir en el auto para llegar a tiempo. El marido no se lo presta, recordando que hace algunas semanas lo rayó, pero ella continúa insistiendo. Finalmente él decide ir a comprar. ¿Qué razón crees tú que habría para no prestarle el auto a la mujer?",
                trigger: "ga3",
            },
            {
                id: "ga3",  // General Answer 3
                options: [
                  {
                    value: "1",
                    label: "Cómo está apurada sus habilidades de manejo no son tan buenas como para llegar a tiempo",
                    trigger: "api_g"
                  },
                  {
                    value: "2",
                    label: "Porque es mejor que ella se quede en la casa cuidando a los niños y que él hombre vaya rápido a comprar",
                    trigger: "api_g"
                  },
                  {
                    value: "3",
                    label: "Las mujeres no tienen buenas habilidades para manejar",
                    trigger: "api_g"
                  },
                  {
                    value: "4",
                    label: "Haber rayado el auto hace algunas semanas demuestra que no es capaz de cuidarlo y podría volver a cometer ese error",
                    trigger: "api_g"
                  },
                ],
            },
            {
              id: "api_g",
              component: <CompApi />,
              waitAction: true,
            }
        ];

}

export default GeneralQ;