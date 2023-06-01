export default function Header() {
    return (
    <header className="game-header">
        <h1>Hollow knight memory game</h1>
        <div className="score-container">
            <p>Score: 0</p>
            <p>High Score: 0</p>
        </div>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
    </header>
    )
}