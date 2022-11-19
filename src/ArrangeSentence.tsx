import React, { useEffect, useState } from "react";
import { Word } from "./models/word";

const data: Word[] = [
  { engWord: "it", foreignWord: "det", correctPosition: 1, wrongPosition: 3 },
  { engWord: "good", foreignWord: "bra", correctPosition: 3, wrongPosition: 1 },
  { engWord: "is", foreignWord: "ga", correctPosition: 2, wrongPosition: 2 },
];

const ArrangeSentence = () => {
  const [words, setWords] = React.useState<Word[]>([]);
  const [click, setClick] = useState(1);
  const [correctWords, setCorrectWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(data);
  }, []);

  const checkCorrectWord = (word: Word): boolean => {
    return correctWords.includes(word.engWord);
  };

  const handleOnClick = (word: Word) => {
    if (click === word.correctPosition) {
      setCorrectWords([...correctWords, word.engWord]);
      setClick(click + 1);
    }
  };

  return (
    <div>
      <h1>Arrange Sentence</h1>
      <section>
        <h2>Norwegian</h2>
        {words
          .sort((a, b) => a.correctPosition - b.correctPosition)
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
