import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  //const [reset, setReset] = useState(false)

  const addScore = () => {
    let newScore = score + 1
    setScore(newScore)
    if(newScore > highScore)
      setHighScore(newScore)
  }
  const resetGame = () => { 
    setScore(0)
  }

  return (
    <>
      <Header score={score} highScore={highScore}></Header>
      <CardsContainer addScore={addScore} reset={resetGame}></CardsContainer>
    </>
  );
}

export default App;
