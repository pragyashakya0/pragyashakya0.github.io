import { useState } from "react";
import { Modal } from './Modal'

export function GameCard({card,collection}){
  const [modal,setModal] = useState(false)
  return(
    <div className = "gameCard">
      <img {...card.image}
        onClick={() => {
          setModal(true)
        }}
      />
      <p className="play-text">Play</p>
      <p>{card.name}</p>
      <Modal 
        name= {card.name}
        gametype={collection.type}
        image={card.image} 
        modal = {modal}
        setModal ={setModal} 
        releaseDate={card.releaseDate}
        developerInfo={card.developer}
        playersInfo={card.numOfPlayers}
      />
    </div>  
  )
}