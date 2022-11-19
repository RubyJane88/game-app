import { useEffect, useState } from "react";

const MemoryGame = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const [cardValue, setCardValue] = useState<string>("");

  useEffect(() => {
    setCards(["card1", "card2", "card3", "card1", "card2", "card3"]);
  });

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {cards.map((card: string, index: number) => (
        <button
          key={index}
          onClick={() => {
            if (!selectedCard) {
              alert("first card selected");
              setSelectedCard(true);
              setCardValue(card);
            } else {
              alert("second card selected");
              setSelectedCard(false);
              if (cardValue === card) {
                alert("match");
              } else {
                alert("no match");
              }
            }
          }}
        >
          {card}
        </button>
      ))}
    </div>
  );
};

export default MemoryGame;
