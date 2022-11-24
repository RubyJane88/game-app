import React, { useEffect } from "react";
import { Word } from "./models/word";
import { Container } from "react-bootstrap";
import { data } from "./data/words";

const ArrangeSentenceCopy = () => {
  //array of words to be displayed
  const [words, setWords] = React.useState<Word[]>([]);
  //to keep track of the clicked word. Button is disabled if the word is in the correct position.
  const [click, setClick] = React.useState(1);
  //array of correct words placed in the correct position
  const [correctWords, setCorrectWords] = React.useState<string[]>([]);

  useEffect(() => {
    //get data from database
    setWords(data);
    console.log(JSON.stringify(words, null, 2));
  }, []);

  return (
    <Container>
      <h1>Arrange Sentence</h1>
      <section>
        <h1>Norwegian</h1>
      </section>
      {words
        .sort((a, b) => a.correctPosition - b.correctPosition)
        .map((word, index) => {
          return <span key={index}>{`${word.foreignWord} `}</span>;
        })}

      <section>
        <h1>English</h1>
        {words
          .sort((a, b) => a.wrongPosition - b.wrongPosition)
          .map((word, index) => {
            return (
              <button
                key={index}
                style={{
                  backgroundColor: correctWords.includes(word.engWord)
                    ? "green"
                    : "red",
                }}
                onClick={() => {
                  if (click === word.correctPosition) {
                    //if the clicked word is in the correct position, add it to the correctWords array
                    setCorrectWords([...correctWords, word.engWord]);
                    //increment the click to keep track of the next word to be clicked
                    setClick(click + 1);
                  }
                }}
              >{`${word.engWord} `}</button>
            );
          })}
      </section>
      <section>
        <h1>Correct Words</h1>
        {correctWords.map((word, index) => {
          return <span key={index}>{`${word} `}</span>;
        })}
      </section>
    </Container>
  );
};

export default ArrangeSentenceCopy;
