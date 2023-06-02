import { useState } from "react"

export default function Card({image, title, addScore, reset, visible}){
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    if(clicked)
      reset()
    else{
      addScore()
      setClicked(!clicked)
    }
  }
  
  return(
      <div className={(visible)?'card':'card card--invisible'} onClick={handleClick}>
        <img src={image} alt="character" className="card__image"></img>
        <br></br>
        <div className="card__title">{title}</div> 
      </div>
  )
}