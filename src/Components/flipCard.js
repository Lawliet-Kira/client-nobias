import { useState } from "react";
import cn from "classnames";
import "./styles.scss";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() {
    if (card.variant === "focus") {
      setShowBack(true);
    }
  }

  function handleBlur() {
    if (card.variant === "focus") {
      setShowBack(false);
    }
  }

  return (
    <div
      tabIndex={card.id}
      className={cn("flip-card-outer", {
        "focus-trigger": card.variant === "focus",
      })}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover",
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.title}</p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
