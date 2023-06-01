export default function Card({image, title}){
    return(
        <div className="card">
          <img src={image} alt="character" className="card__image"></img>
          <div className="card__title">{title}</div> 
        </div>
    )
}