import FlipCard from "../../Components/FlipCard/FlipCard.js";
import Biases from "./biases.js";
import "./style.scss";
import { Progress} from "semantic-ui-react";
import AcordeonResultados from "../../Components/Acordeon/Accordeon.js";
import BarraProgreso from "../../Components/Progress/progress.js";

function Result(bias, result1, result2, result3) {
  bias = "maternal";

  result1 =  10
  result2 =  50
  result3 =  80


  return (
    <div className="container">
      <FlipCard card={Biases[bias]} />
      <div className="simulation">
        <p>Resultados de la simulación</p>
        <div>
          <p>Simulación 1</p>
          <Progress percent={result1} progress indicating size="small"/>
        </div>
        <div>
          <p>Simulación 2</p>
          <Progress indicating percent={result2} progress size="small"/>
        </div>
        <div>
          <p>Simulación 3</p>
          <Progress indicating percent={result3} progress size="small"/>
        </div>

      </div>
    </div>
  );
}

export default Result;
