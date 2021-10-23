import { useState } from "react";
import cn from "classnames";
import "./style.scss";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

  return (
    <div className={cn("flip-card-outer")} onClick={handleClick}>
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className="card front">
          <p>Nosotros encontramos que tu principal sesgo es:</p>
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.title}</p>
          </div>
          <p className="click-text">click para más info</p>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.title}</p>
          </div>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
