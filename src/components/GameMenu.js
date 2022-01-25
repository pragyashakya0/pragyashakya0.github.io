export function GameMenu({collections,state,setState}){
  return(
    <div className="gameMenu">
      {collections.map((collection,id) =>{
        const backgroundColor = (state === id) ? "#4986ff" : "#f2f7ff";
        const color= (state === id) ? "#ffffff" : "#666666";
        return(
          <button className="menuItem"
            key={id}
            onClick={() => setState(id)}
            style={{
            backgroundColor,
            color
            }}
          >
           {collection.type}
          </button>
        );
      })}
    </div>
  )
}