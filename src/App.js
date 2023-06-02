import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [reset, setReset] = useState(false)

  const addScore = () => {
    setScore(score + 1)
    setReset(false)
  }
  const resetGame = () => { 
    if(score > highScore)
      setHighScore(score)
    setScore(0)
    setReset(true)
  }

  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <CardsContainer addScore={addScore} resetGame={resetGame} resetState={reset}></CardsContainer>
    </>
  );
}

export default App;
