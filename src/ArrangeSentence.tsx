import React, { useEffect, useState } from "react";
import { Word } from "./models/word";

const data: Word[] = [
  { engWord: "it", foreignWord: "det", correctPosition: 1, wrongPosition: 3 },
  { engWord: "good", foreignWord: "bra", correctPosition: 3, wrongPosition: 1 },
  { engWord: "is", foreignWord: "ga", correctPosition: 2, wrongPosition: 2 },
];

const ArrangeSentence = () => {
  //array of words to be displayed
  const [words, setWords] = React.useState<Word[]>([]);
  //to keep track of the clicked word
  const [click, setClick] = useState(1);

  const [correctWords, setCorrectWords] = useState<string[]>([]);

  useEffect(() => {
    //get data from database
    setWords(data);
  }, []);

  //check if the word is in the correct position
  const checkCorrectWord = (word: Word): boolean => {
    //if the word is in the correct position, return true
    return correctWords.includes(word.engWord);
  };

  const handleOnClick = (word: Word) => {
    //check if the clicked word is in the correct position
    if (click === word.correctPosition) {
      //if the clicked word is in the correct position, add it to the correctWords array
      setCorrectWords([...correctWords, word.engWord]);
      //increment the click to keep track of the next word to be clicked
      setClick(click + 1);
    }
  };

  return (
    <div>
      <h1>Arrange Sentence</h1>
      <section>
        <h2>Norwegian</h2>
        {words
          //sort the words by the correct position
          .sort((a, b) => a.correctPosition - b.correctPosition)
          //map through the correct words to display them
          .map((word, index) => {
            return <span key={index}>{`${word.foreignWord} `}</span>;
          })}
      </section>
      <section>
        <h2>English</h2>
        <div>
          {words
            .sort((a, b) => a.wrongPosition - b.wrongPosition)
            .map((word, index) => (
              <button
                key={index}
                onClick={() => handleOnClick(word)}
                disabled={checkCorrectWord(word)}
                style={{
                  border: "none",
                  backgroundColor: checkCorrectWord(word)
                    ? "limegreen"
                    : "white",
                }}
              >
                {`${word.engWord} `}
              </button>
            ))}
        </div>
      </section>
      <section>
        <h2>Answer</h2>
        {correctWords?.map((word, index) => {
          return <span key={index}>{`${word} `}</span>;
        })}
      </section>
      <section>{click > data.length && <h2>You Win! Hooray!</h2>}</section>
    </div>
  );
};

export default ArrangeSentence;
