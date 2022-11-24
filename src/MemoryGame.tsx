import { useEffect, useState } from "react";

const MemoryGame = () => {
  //array of words to be displayed
  const [cards, setCards] = useState<string[]>([]);
  //placeholder for the card clicked
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  //to keep track of the clicked word
  const [cardValue, setCardValue] = useState<string>("");

  useEffect(() => {
    setCards(["dog", "fish", "cat", "dog", "fish", "cat"]);
  });

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {cards.map((card: string, index: number) => {
        return (
          <button
            key={index}
            onClick={() => {
              if (!selectedCard) {
                alert("first card selected");
                setSelectedCard(true);
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
        );
      })}
    </div>
  );
};

export default MemoryGame;
