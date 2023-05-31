
function App() {
  return (
    <>
      <header className="game-header">
        <h1>Hollow knight memory game</h1>
        <div className="score-container">
          <p>Score: 0</p>
          <p>High Score: 0</p>
        </div>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </header>
      <div className="game-container">
        <div className="card">
          <div className="card__image">Image</div>
          <div className="card__title">Title</div> 
        </div>
      </div>
    </>
  );
}

export default App;
