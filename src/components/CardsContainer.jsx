import hornet from '../images/B_Hornet2.png';
import Card from './Card.jsx';

export default function CardsContainer({props}){
    return(
        <div className="game-container">
            <Card image={hornet}></Card>
        </div>
    )
}