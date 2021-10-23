import FlipCard from "../../Components/FlipCard/index.js";
import Biases from "./biases.js";
import "./style.scss";

function Result(bias, result1, result2, result3) {
  const typeResult = (result) => {
    if (result >= 80) {
      return "success";
    } else if (result <= 40) {
      return "danger";
    } else {
      return "warning";
    }
  };
  result1 = 60;
  result2 = 80;
  result3 = 30;
  bias = "maternal";
  const type1 = typeResult(result1);
  const type2 = typeResult(result2);
  const type3 = typeResult(result3);
  return (
    <div className="container">
      <FlipCard card={Biases[bias]} />
      <div className="simulation">
        <p>Resultados de la simulación</p>
        <div>
          <p>Simulación 1</p>
          <div className="progress">
            <div
              className={"progress-bar bg-" + type1}
              role="progressbar"
              style={{ width: result1 + "%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <p>Simulación 2</p>
          <div className="progress">
            <div
              className={"progress-bar bg-" + type2}
              role="progressbar"
              style={{ width: result2 + "%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <p>Simulación 3</p>
          <div className="progress">
            <div
              className={"progress-bar bg-" + type3}
              role="progressbar"
              style={{ width: result3 + "%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
