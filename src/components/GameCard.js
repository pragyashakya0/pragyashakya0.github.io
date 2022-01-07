import { useState } from "react";
import { Modal } from './Modal'
// import { popCard } from '../data';

function showGames(category, selectedCategory) {
  if (selectedCategory === "All Games") return "block";
  if (category === selectedCategory) return "block";
  return "none";
}

export function GameCard({games,category}){
  const [modal,setModal] = useState(false);
  return(
    <div className='gameImg'>
      {games.map((game) => {
        return (
          <div className = "gameCard" style={{ display : showGames(game.category,category) }}>
            <img src = {game.image} 
            id = {game.id} 
            alt = {game.name}
            onClick={()=> setModal(game)}
            />
            <p className="play-text">Play</p>
            <p>{game.name}</p>
          </div>
          
        );
      })}
      {
        modal ? ( <Modal onClose={() => setModal(null)} item={modal} />) : null
      }
    </div>
  )
}

