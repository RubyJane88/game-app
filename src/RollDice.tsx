import React from "react";
import { Card, Container } from "react-bootstrap";

const RollDice = () => {
  const [dice, setDice] = React.useState(0);

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
        onClick={() => setDice(Math.floor(Math.random() * 6) + 1)}
      >
        Roll
      </button>
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
        {dice}
      </Card>
    </Container>
  );
};

export default RollDice;
