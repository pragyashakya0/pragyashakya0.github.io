export function Modal({
  name,
  gametype,
  image, 
  modal, 
  setModal, 
  releaseDate, 
  developerInfo, 
  players,
  close
})
{
  return modal ? (
    <div className="gamePopup"
      // onClick={() => {
      //     setModal(true)
      //   }}
    >
      <div className="box">
        <div className="popImg">
          <img src={image} alt = {name}/>
        </div>

        <div className="popText">
          <div className="gameTitle">
            <h3>{name}</h3>
            <p>{gametype}</p>
          </div>

          <div className="gameInfo">
            {releaseDate ? (
            <p><b>NES release date:</b>{releaseDate}</p>
            ):null}
            {players ? (
            <p><b>No. of Players:</b>{players}</p>
            ):null}
            {developerInfo?(
            <p><b>Developer:</b>{developerInfo}</p>
            ):null}
          </div>

          <button type="button">
            <a href="" target="_blank">Play Game</a>
          </button>
        </div>

        <div>
          <img className="close" src={close.src} alt={close.name} onClick={() => setModal(false)}/>
        </div>
      </div>
    </div>
  ): null;
}
