import FlipCard from "./FlipCard.js";

function Result() {
  
  const card = {
    id: "2",
    variant: "click",
    title: "Sesgo de Desempeño",
    front: "Tay too sesgao",
    back: "Back",
  };

  return <FlipCard key={card.id} card={card} />;
}

export default Result;
