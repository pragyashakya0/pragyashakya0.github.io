import { useState } from "react";

function showGames(category, selectedCategory) {
  if (selectedCategory === "All Games") return "block";
  if (category === selectedCategory) return "block";
  return "none";
}

export function GameCard({games,category}){
  const [popUp,setPopup] = useState(" ");
  return(
    <div className='gameImg'>
      {games.map((game) => {
        return (
          <div className = "gameCard" style={{ display : showGames(game.category,category) }}>
            <img src = {game.image} 
            id = {game.id} 
            alt = {game.name}
            onClick={()=> setPopup(game.name)}
            
            />
            <p className="play-text">Play</p>
            <p>{game.name}</p>
          </div>
        );
      })}
    </div>
  )
}

