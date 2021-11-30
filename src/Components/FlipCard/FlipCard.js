import { useState } from "react";
import cn from "classnames";
import "./style.scss";
import { Typography } from "@mui/material";

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
          <Typography> Tu principal sesgo corresponde a:</Typography>
          <div className="card-body d-flex justify-content-center align-items-center">
            <Typography variant="h3" fontWeight={700}>{card.title}</Typography>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <Typography variant="h5" sx={{color:"#fff"}}>{card.translated} </Typography>
          </div>
          <Typography>Click para más info </Typography>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <Typography variant="h3" fontWeight={700}>{card.title}</Typography>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <Typography variant="h5" sx={{color:"#fff"}}>{card.translated} </Typography>
          </div>
          <Typography> {card.description}</Typography>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
