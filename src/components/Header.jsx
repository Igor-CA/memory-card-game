export default function Header({score, highScore}) {
    return (
        <header className="game-header">
            <h1>Hollow knight memory game</h1>
            <div className="score-container">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
        </header>
    )
}