import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalAnswer1: "",
      generalAnswer2: "",
      generalAnswer3: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { generalAnswer1, generalAnswer2, generalAnswer3 } = steps;
    this.setState({ generalAnswer1, generalAnswer2, generalAnswer3 });
  }

  render() {
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    const { generalAnswer1, generalAnswer2, generalAnswer3 } = this.state;
    console.log(
      generalAnswer1.value + generalAnswer2.value + generalAnswer3.value
    );
    let asdf;

    postData("https://api-nobias.herokuapp.com/chatresp", {
      r1: generalAnswer1.value,
      r2: generalAnswer2.value,
      r3: generalAnswer3.value,
      r4: generalAnswer1.value,
      r5: generalAnswer2.value,
      r6: generalAnswer3.value,
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
      asdf = data;
    });
    // postData("https://nobiaspredictions.herokuapp.com/predictG", {
    //   values: [
    //     generalAnswer1.value,
    //     generalAnswer2.value,
    //     generalAnswer3.value,
    //   ],
    // }).then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });

    return (
      <div style={{ width: "100%" }}>
        Ahora vamos con unas preguntas más cortas {asdf.id}
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        width="1600px"
        headerTitle="No Bias"
        inputStyle={{ display: "none" }}
        hideSubmitButton="true"
        userDelay="100"
        hideUserAvatar="true"
        steps={[
          {
            id: "welcome",
            message:
              "Bienvenido al chatbot de No Bias, por favor responda las siguientes preguntas con honestidad",
            trigger: "generalQuestion1",
          },
          {
            id: "generalQuestion1",
            message:
              "Existe un único cupo disponible para entrar a la carrera de ingeniería de sistemas en una universidad de gran renombre. El director debe escoger a quien darle el cupo entre un hombre y una mujer luego de una entrevista. Tanto el hombre como la mujer demostraron saber comunicarse, y durante la entrevista la mujer dio a conocer que tenía un hijo y que se graduó como mejor de su clase en un colegio de mujeres. Por otra parte, el hombre se graduó como el segundo mejor de su clase en un colegio mixto. Al finalizar las entrevistas el director se decanta por el hombre ¿Porque crees que la mujer no fue escogida? Selecciona la alternativa que más se acerque a tu manera de pensar:",
            trigger: "generalAnswer1",
          },
          {
            id: "generalAnswer1",
            options: [
              {
                value: "1",
                label:
                  "Porque las mujeres tienen menos capacidades para la ingeniería en comparación a los hombres",
                trigger: "generalQuestion2",
              },
              {
                value: "2",
                label:
                  "Al ser madre el compromiso de la mujer con la universidad es menor pues tiene otras preocupaciones",
                trigger: "generalQuestion2",
              },
              {
                value: "3",
                label:
                  "Graduarse como mejor alumna en un colegio de mujeres no posee tanto mérito como ser de los mejores en un colegio mixto",
                trigger: "generalQuestion2",
              },
              {
                value: "4",
                label:
                  "Porque las ingeniería en sistemas es más afín a los hombres",
                trigger: "generalQuestion2",
              },
            ],
          },
          {
            id: "generalQuestion2",
            message:
              "Se desea realizar un campeonato de fútbol en el pueblo. María, que tiene 27 años y es madre de un hijo, tiene la intención de inscribirse recordando cuando salió tercer lugar del campeonato de fútbol femenino hace unos años, buscando ahora el primer puesto. Su esposo, al escuchar esto, le dice que no puede participar por ciertas razones. ¿Por qué razón no podría participar? Selecciona la alternativa que más se acerque a tu manera de pensar:",
            trigger: "generalAnswer2",
          },
          {
            id: "generalAnswer2",
            options: [
              {
                value: "1",
                label:
                  "Porque tiene un niño pequeño a quien cuidar y su desempeño en el torneo no sería el mejor",
                trigger: "generalQuestion3",
              },
              {
                value: "2",
                label:
                  "Porque el fútbol es un deporte mayoritariamente para hombres",
                trigger: "generalQuestion3",
              },
              {
                value: "3",
                label:
                  "Porque las mujeres suelen tener un desempeño menor que los hombres en el fútbol y no la ves capaz",
                trigger: "generalQuestion3",
              },
              {
                value: "4",
                label:
                  "Porque el campeonato pasado fue sólo de mujeres, por eso tuvo ese puesto, esta vez será distinto",
                trigger: "generalQuestion3",
              },
            ],
          },
          {
            id: "generalQuestion3",
            message:
              "Una madre tiene que ir de compras al supermercado, pero se le está haciendo tarde. Piensa en que sería mejor ir en el auto para llegar a tiempo. El marido no se lo presta, recordando que hace algunas semanas lo rayó, pero ella continúa insistiendo. Finalmente él decide ir a comprar. ¿Qué razón crees tú que habría para no prestarle el auto a la mujer?",
            trigger: "generalAnswer3",
          },
          {
            id: "generalAnswer3",
            options: [
              {
                value: "1",
                label:
                  "Cómo está apurada sus habilidades de manejo no son tan buenas como para llegar a tiempo",
                trigger: "review",
              },
              {
                value: "2",
                label:
                  "Porque es mejor que ella se quede en la casa cuidando a los niños y que él hombre vaya rápido a comprar",
                trigger: "attributionQuestion1",
              },
              {
                value: "3",
                label: "Las mujeres no tienen buenas habilidades para manejar",
                trigger: "attributionQuestion1",
              },
              {
                value: "4",
                label:
                  "Haber rayado el auto hace algunas semanas demuestra que no es capaz de cuidarlo y podría volver a cometer ese error",
                trigger: "attributionQuestion1",
              },
            ],
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "",
          },
          {
            id: "attributionQuestion1",
            message:
              "Acabas de finalizar un examen oral en que a la gran mayoría del curso no le fue muy bien, pero al ver las notas te percatas que las mejores corresponden a las de las mujeres ¿Cuál es el primer pensamiento que se te viene a la mente?",
            trigger: "attributionAnswer1",
          },
          {
            id: "attributionAnswer1",
            options: [
              {
                value: "1",
                label:
                  "El profesor tiene una preferencia por las mujeres y por eso ellas obtuvieron una mejor nota",
                trigger: "attributionQuestion2",
              },
              {
                value: "2",
                label:
                  "Las mujeres realmente merecían esa nota porque demostraron manejar los conocimientos del examen",
                trigger: "attributionQuestion2",
              },
            ],
          },
          {
            id: "attributionQuestion2",
            message:
              "Te encuentras en una presentación de un trabajo junto con tu compañera. En el transcurso, ella se confunde con algunos contenidos por lo que obtienen una menor calificación y reprueban la asignatura. ¿Cuál sería tu reacción frente a esto?",
            trigger: "attributionAnswer2",
          },
          {
            id: "attributionAnswer2",
            options: [
              {
                value: "1",
                label:
                  "Llamarle la atención porque habían estudiado todos los contenidos juntos y necesitaban de esa presentación para aprobar",
                trigger: "attributionQuestion3",
              },
              {
                value: "2",
                label:
                  "Decirle que no se preocupe, que para la próxima se dará",
                trigger: "attributionQuestion3",
              },
            ],
          },
          {
            id: "attributionQuestion3",
            message:
              "Eres jefe de una prestigiosa empresa informática y debes encontrar a alguien que tome el puesto de desarrollador de software. Entre los candidatos, se presentan un hombre y una mujer con currículums similares. ¿A quién escogerías?",
            trigger: "attributionAnswer3",
          },
          {
            id: "attributionAnswer3",
            options: [
              {
                value: "1",
                label: "Al hombre",
                trigger: "simulation",
              },
              {
                value: "2",
                label: "A la mujer",
                trigger: "simulation",
              },
            ],
          },
          {
            id: "performanceQuestion1",
            message:
              "Si tu compañera de trabajo va a presentar una su idea a su jefe que sabes que suele menospreciar las ideas de las mujeres, ¿Que harías?",
            trigger: "performanceAnswer1",
          },
          {
            id: "performanceAnswer1",
            options: [
              {
                value: "1",
                label: "Proponer presentar tu",
                trigger: "performanceQuestion2",
              },
              {
                value: "2",
                label: "Ir con ella y decir que la apoyas",
                trigger: "performanceQuestion2",
              },
              {
                value: "3",
                label: "Desearle suerte",
                trigger: "performanceQuestion2",
              },
            ],
          },
          {
            id: "performanceQuestion2",
            message:
              "Un padre y su hijo viajan en coche y tienen un accidente grave. El padre muere y al hijo se lo llevan al hospital porque necesita una compleja operación de emergencia, para la que llaman a una eminencia médica. Pero cuando entra en el quirófano dice: «No puedo operarlo, es mi hijo». ¿Cuál es tu primera impresión? Recuerda responder con honestida",
            trigger: "performanceAnswer2",
          },
          {
            id: "performanceAnswer2",
            options: [
              {
                value: "1",
                label:
                  "Que el quirófano era el padre (hombre) y la situación es confusa",
                trigger: "performanceQuestion3",
              },
              {
                value: "2",
                label:
                  "Que el quirófano era la madre y no tuve dificultades en entender la situación",
                trigger: "performanceQuestion3",
              },
            ],
          },
          {
            id: "performanceQuestion3",
            message:
              "Si ves como una compañera de trabajo está complicada explicando algo en lo que trabajaron juntos ¿Qué harías?",
            trigger: "performanceAnswer3",
          },
          {
            id: "performanceAnswer3",
            options: [
              {
                value: "1",
                label: "Explicarlo tú",
                trigger: "performanceQuestion4",
              },
              { value: "2", label: "Nada", trigger: "performanceQuestion4" },
              {
                value: "3",
                label: "Preguntarle si quiere que la ayudes",
                trigger: "performanceQuestion4",
              },
            ],
          },
          {
            id: "performanceQuestion4",
            message:
              "Si una amiga tuya te está explicando sobre una duda que tenias y en la mitad ves como lo que ya te había explicado bien lo vuelve a explicar un amigo tuyo, ¿Que harias?",
            trigger: "performanceAnswer4",
          },
          {
            id: "performanceAnswer4",
            options: [
              {
                value: "1",
                label:
                  "Preguntarle porque te explico lo que recién te habían explicado",
                trigger: "performanceQuestion5",
              },
              {
                value: "2",
                label: "Darle las gracias a los 2",
                trigger: "performanceQuestion5",
              },
              { value: "3", label: "Nada", trigger: "performanceQuestion5" },
            ],
          },
          {
            id: "performanceQuestion5",
            message:
              "Una colega de trabajo consigue un ascenso medio dudoso a tu parecer. ¿A qué crees que se debió tal ascenso?",
            trigger: "performanceAnswer5",
          },
          {
            id: "performanceAnswer5",
            options: [
              {
                value: "1",
                label: "Lleva bastante tiempo en el trabajo",
                trigger: "performanceQuestion6",
              },
              {
                value: "2",
                label: "Es amiga muy íntima del jefe",
                trigger: "performanceQuestion6",
              },
              {
                value: "3",
                label: "Tuvo un buen desempeño el último mes",
                trigger: "performanceQuestion6",
              },
            ],
          },
          {
            id: "performanceQuestion6",
            message:
              "¿Cuán de acuerdo estás con que las mujeres no saben manejar?",
            trigger: "performanceAnswer6",
          },
          {
            id: "performanceAnswer6",
            options: [
              { value: "1", label: "Acuerdo", trigger: "simulation" },
              { value: "2", label: "Neutral", trigger: "simulation" },
              { value: "3", label: "Desacuerdo", trigger: "simulation" },
            ],
          },
          {
            id: "simulation",
            message:
              "Ahora entraras a una simulación para ver como actuarias ante una situación de la vida real",
            trigger: "simulationLink",
          },
          {
            id: "simulationLink",
            component: (
              <div>
                <a href="https://gbeninati.github.io/SimulacionNoBias/Attribution/index.html?ID=1">
                  Apreta aquí para iniciar la simulación
                </a>{" "}
              </div>
            ),
            asMessage: true,
            trigger: "",
          },
        ]}
      />
    );
  }
}

export default SimpleForm;