export function PopUp({gameInfo,play,info}){
  return(
    <div className="gamePopup">
      {gameInfo.map((game)=> {
        return(
          <div className="box">
            <div className="popImg">
              <img src={game.image}/>
            </div>
            <div className="popText">
              <div className="gameTitle">
                <h3>{game.name}</h3>
                <p>{game.category}</p>
              </div>
              <div className="gameInfo">
                <p>{info.date}:{game.dateInfo}</p>
                <p>{info.number}:{game.playerInfo}</p>
                <p>{info.developer}:{game.developerInfo}</p>
              </div>
              <button type="button">
                <a href="" target="_blank">{play}</a>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}