import { useEffect, useState } from "react";

export function useMemoryGame() {
  //array of words to be displayed
  const [cards, setCards] = useState<string[]>([]);
  //placeholder for the card clicked
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  //to keep track of the clicked word
  const [cardValue, setCardValue] = useState<string>("");

  useEffect(() => {
    setCards(["dog", "fish", "cat", "dog", "fish", "cat"]);
  }, []);

  return {
    cards,
    selectedCard,
    setSelectedCard,
    cardValue,
    setCardValue,
  };
}
