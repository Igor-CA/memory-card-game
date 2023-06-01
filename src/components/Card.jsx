export default function Card({image}){
    return(
        <div className="card">
          <img src={image} alt="character" className="card__image"></img>
          <div className="card__title">Title</div> 
        </div>
    )
}