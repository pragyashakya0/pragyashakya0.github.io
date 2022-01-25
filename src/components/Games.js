import { useState } from "react";
import { GameCard } from "./GameCard";
import { GameMenu } from "./GameMenu";

export function Games({collections,close}){
  const title = "All the retro games in one place"
  const [state,setState] = useState(0)
  const foundGameCard = collections.find((collection,idx) => idx === state);
  
  return(
    <div className="games" id="games">
      <div className = "text">
        <h2>{title}</h2>
      </div>
      <GameMenu collections={collections} state={state} setState={setState}/>
      <div className="gameImg">
        {foundGameCard.items.map((item,i) => {
          return <GameCard key={i} card ={item} collection={collections} close={close}/>
        })}
      </div>
    </div>
  )
}

