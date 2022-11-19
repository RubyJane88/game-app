import React, { useEffect, useState } from "react";
import { Word } from "./models/word";

const data: Word[] = [
  { engWord: "it's", foreignWord: "det", correctPosition: 1, wrongPosition: 3 },
  {
    engWord: "during",
    foreignWord: "er",
    correctPosition: 2,
    wrongPosition: 3,
  },
  { engWord: "our", foreignWord: "i", correctPosition: 3, wrongPosition: 2 },
  {
    engWord: "darkest",
    foreignWord: " de morkeste",
    correctPosition: 4,
    wrongPosition: 6,
  },
  {
    engWord: "moments",
    foreignWord: "øyeblikkene",
    correctPosition: 5,
    wrongPosition: 4,
  },

  {
    engWord: "that we",
    foreignWord: "det vi",
    correctPosition: 6,
    wrongPosition: 5,
  },
  {
    engWord: "must focus",
    foreignWord: "må fokusere",
    correctPosition: 7,
    wrongPosition: 8,
  },
  {
    engWord: "to see",
    foreignWord: "å se",
    correctPosition: 8,
    wrongPosition: 7,
  },
  {
    engWord: "the light",
    foreignWord: "lyset",
    correctPosition: 9,
    wrongPosition: 10,
  },
  {
    engWord: "of day",
    foreignWord: "av dagen",
    correctPosition: 10,
    wrongPosition: 9,
  },
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
