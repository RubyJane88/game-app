import React from "react";
import { Card, Container } from "react-bootstrap";

const RollDice = () => {
  const [die1, setDie1] = React.useState(1);
  const [die2, setDie2] = React.useState(1);

  return (
    <Container
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Roll the Dice</h1>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "1rem",
          padding: "1rem",
          borderRadius: "1rem",
          gap: "1rem",
          marginBottom: "1rem",
          border: "50px 50px",
        }}
        onClick={() => {
          setDie1(Math.floor(Math.random() * 6) + 1);
          setDie2(Math.floor(Math.random() * 6) + 1);
        }}
      >
        Roll
      </button>
      <Card
        style={{
          height: "4rem",
          width: "5rem",
          backgroundColor: "green",
          color: "white",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        {die1}
      </Card>
      <Card
        style={{
          height: "4rem",
          width: "5rem",
          backgroundColor: "blue",
          color: "white",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        {die2}
      </Card>
    </Container>
  );
};

export default RollDice;
