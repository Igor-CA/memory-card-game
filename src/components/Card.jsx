import { useEffect, useState } from "react"
import "./Card.css"

export default function Card(props){
  const {image, title, addScore, resetGame, resetState, visible, setMark} = props
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    if(clicked)
      resetGame()
    else{
      addScore()
      setClicked(!clicked)
      setMark(title, !clicked)
    }
  }
  useEffect(() => {
    if(resetState)
      setClicked(false)
  }, [resetState])
  
  return(
      <div className={(visible)?'card':'card card--invisible'} onClick={handleClick}>
        <div className="card__image-container">
          <img src={image} alt="character" className="card__image"></img>
        </div>
        <div className="card__title">{title}</div> 
      </div>
  )
}