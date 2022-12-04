import { useMemoryGame } from "./hooks/useMemoryGame.ts";

const MemoryGame = () => {
  //custom hook to get the state
  const { cards, selectedCard, setSelectedCard, cardValue, setCardValue } =
    useMemoryGame();

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
        );
      })}
    </div>
  );
};

export default MemoryGame;
