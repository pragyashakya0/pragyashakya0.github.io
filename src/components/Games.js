import { useState } from "react";
import { GameCard } from "./GameCard";

export function Games({gameTypes,games}){
  const [category,setCategory] = useState('All Games');
  return ( 
    <div className='games' id="games">
      <h2>All the retro games in one place</h2>
      <div className = 'gameMenu'>
        {gameTypes.map((menu) => {
          return (
            <button 
            type='button' 
            className='menuItem' 
            onClick={()=> setCategory(menu.name)}
            style={{ backgroundColor : category === menu.name ? " #4986ff" : "#f2f7ff" }} 
            >
              {menu.name}
            </button>
          )
        })}
      </div>

      <GameCard games={games} category={category}/>

    </div>
  );
}