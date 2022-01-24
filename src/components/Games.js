import { useState } from "react";
import { GameCard } from "./GameCard";

export function Games({collections}){
  const title = "All the retro games in one place"
  const [state,setstate] = useState(0)
  const foundGameCard = collections.find((collection,idx) => idx === state);
  return(
    <div className="games">
      <div className = "text">
        <h2>{title}</h2>
      </div>
      <div className="gameMenu">
      {collections.map((collection,id) =>{
        return(
            <button className="menuItem"
              onClick={() => setstate(id)}
              style={{
              backgroundColor:
              state === id ? "#4986ff" : "#f2f7ff",
              color: state === id ? "#ffffff" : "#666666"
              }}>
                {collection.type}
            </button>
          );
        })}
      </div>
      <div className="gameImg">
        {foundGameCard.items.map((item,i) => {
          return <GameCard card ={item} collection={collections}/>
        })}
      </div>

    </div>
  )
}
