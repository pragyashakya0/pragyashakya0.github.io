export function Modal({pop,play,info}){
  return(
    <div className="gamePopup">
          <div className="box">
            <div className="popImg">
              <img src={pop.image}/>
            </div>
            <div className="popText">
              <div className="gameTitle">
                <h3>{pop.name}</h3>
                <p>{pop.category}</p>
              </div>
              <div className="gameInfo">
                <p>{info.date}:{pop.dateInfo}</p>
                <p>{info.number}:{pop.playerInfo}</p>
                <p>{info.developer}:{pop.developerInfo}</p>
              </div>
              <button type="button">
                <a href="" target="_blank">{play}</a>
              </button>
            </div>
          </div> 
    </div>
  )
}