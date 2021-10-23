import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
// import {insert} from "./database.js";




class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { answer1, answer2, answer3, answer4, answer5, answer6 } = steps;
    console.log('INSERT INTO public.chat (answer1, answer2, answer3, answer4, answer5, answer6) values ( '+answer1.value+','+answer2.value+','+answer3.value+','+answer4.value+','+answer5.value+','+answer6.value+',);');
    this.setState({ answer1, answer2, answer3, answer4, answer5, answer6 });

  }

  render() {
    const { answer1, answer2, answer3 } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Respuesta 1</td>
              <td>{answer1.value}</td>
            </tr>
            <tr>
              <td>Respuesta 2</td>
              <td>{answer2.value}</td>
            </tr>
            <tr>
              <td>Respuesta 3</td>
              <td>{answer3.value}</td>
            </tr>
          </tbody>
        </table>
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
            message: "Bienvenido al chatbot de No Bias, por favor responda las siguientes preguntas con honestidad",
            trigger: "question1",
          },
          {
            id: "question1",
            message: "Si tu compañera de trabajo va a presentar una su idea a su jefe que sabes que suele menospreciar las ideas de las mujeres, ¿Que harías?",
            trigger: "answer1",
          },
          {
            id: "answer1",
            options: [
              { value: "1", label: "Proponer presentar tu", trigger: "question2" },
              { value: "2", label: "Ir con ella y decir que la apoyas", trigger: "question2" },
              { value: "3", label: "Desearle suerte", trigger: "question2" },
            ],
          },
          {
            id: "question2",
            message: "Un padre y su hijo viajan en coche y tienen un accidente grave. El padre muere y al hijo se lo llevan al hospital porque necesita una compleja operación de emergencia, para la que llaman a una eminencia médica. Pero cuando entra en el quirófano dice: «No puedo operarlo, es mi hijo». ¿Cuál es tu primera impresión? Recuerda responder con honestida",
            trigger: "answer2",
          },
          {
            id: "answer2",
            options: [
              { value: "1", label: "Que el quirófano era el padre (hombre) y la situación es confusa", trigger: "question3" },
              { value: "2", label: "Que el quirófano era la madre y no tuve dificultades en entender la situación", trigger: "question3" },
            ],
          },
          {
            id: "question3",
            message: "Si ves como una compañera de trabajo está complicada explicando algo en lo que trabajaron juntos ¿Qué harías?",
            trigger: "answer3",
          },
          {
            id: "answer3",
            options: [
              { value: "1", label: "Explicarlo tú", trigger: "question4" },
              { value: "2", label: "Nada", trigger: "question4" },
              { value: "3", label: "Preguntarle si quiere que la ayudes", trigger: "question4" },
            ],
          },
          {
            id: "question4",
            message: "Si una amiga tuya te está explicando sobre una duda que tenias y en la mitad ves como lo que ya te había explicado bien lo vuelve a explicar un amigo tuyo, ¿Que harias?",
            trigger: "answer4",
          },
          {
            id: "answer4",
            options: [
              { value: "1", label: "Preguntarle porque te explico lo que recién te habían explicado", trigger: "question5" },
              { value: "2", label: "Darle las gracias a los 2", trigger: "question5" },
              { value: "3", label: "Nada", trigger: "question5" },
            ],
          },
          {
            id: "question5",
            message: "Una colega de trabajo consigue un ascenso medio dudoso a tu parecer. ¿A qué crees que se debió tal ascenso?",
            trigger: "answer5",
          },
          {
            id: "answer5",
            options: [
              { value: "1", label: "Lleva bastante tiempo en el trabajo", trigger: "question6" },
              { value: "2", label: "Es amiga muy íntima del jefe", trigger: "question6" },
              { value: "3", label: "Tuvo un buen desempeño el último mes", trigger: "question6" },
            ],
          },
          {
            id: "question6",
            message: "¿Cuán de acuerdo estás con que las mujeres no saben manejar?",
            trigger: "answer6",
          },
          {
            id: "answer6",
            options: [
              { value: "1", label: "Acuerdo", trigger: "simulation" },
              { value: "2", label: "Neutral", trigger: "simulation" },
              { value: "3", label: "Desacuerdo", trigger: "simulation" },
            ],
          },
          {
            id: "simulation",
            message: "Ahora entraras a una simulación para ver como actuarias ante una situación de la vida real",
            trigger: "simulationLink",
          },
          {
            id: "simulationLink",
            component: (
              <div><a href="http://localhost:8360">Apreta aquí para iniciar la simulación</a> </div>
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
