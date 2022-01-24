export function Modal({
  name,
  gametype,
  image, 
  modal, 
  setModal, 
  releaseDate, 
  developerInfo, 
  playerInfo
}){
  return modal ? (
    <div className="gamePopup"
      onClick={() => {
          setModal(false)
        }}
    >
      <div className="box" 
        onclick = {e => {
          e.stopPropagation();
        }}
      >
        <div className="popImg">
          <img {...image}/>
        </div>
        <div className="popText">
          <div className="gameTitle">
            <h3>{name}</h3>
            <p>{gametype}</p>
          </div>
          <div className="gameInfo">
            <p><b>NES release date:</b>{releaseDate}</p>
            <p><b>Number of players:</b>{playerInfo}</p>
            <p><b>Developer:</b>{developerInfo}</p>
          </div>
        </div>
        <button type="button">
            <a href="" target="_blank">Play Game</a>
        </button>
        <div onClick={() => setModal(false)}>
          <span className="close">&times;</span>
        </div>
      </div>
    </div>
  ) : null;
}
