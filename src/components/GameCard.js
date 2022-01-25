import { useState } from "react";
import { Modal } from './Modal'

export function GameCard({card,collection,close}){
  const [modal,setModal] = useState(false)
  return(
    <div className = "gameCard">
      <img src={card.image.src} alt= {card.name}
        onClick={() => {
          setModal(true)
        }}
      />
      <p className="play-text">Play</p>
      <p>{card.name}</p>
      <Modal 
        name= {card.name}
        gametype={collection.type}
        image={card.image.src}
        modal = {modal}
        setModal ={setModal} 
        releaseDate={card.releaseDate}
        developerInfo={card.developer}
        players={card.players}
        close={close}
      />
    </div>  
  )
}