import { useState } from "react";

export function Games({menu,defaultValue=0,}){
  const title = "All the retro games in one place"
  const [state,setstate] = useState(defaultValue)
  const foundGameCard = menu.find((game,index) => index === state);
  console.log(foundGameCard.items)
  
  return(
    <div className="games">
      <div className = "text">
        <h2>{title}</h2>
      </div>
      <div className="gameMenu">
      {menu.map((game,id) =>{
        return(
          <Button title = {game.type} myMenu={() => setstate(id)}/> 
          );
        })}
      </div>
      <GameCard items ={foundGameCard.items}/>

    </div>
  )
}

function GameCard({items}){
  const [modal,setModal] = useState(false)
  return(
    <div className="gameImg">
      {items.map((item) => {
        return (
          <div className = "gameCard">
            <img {...item.image} onClick={() => setModal(true)}/>
            <p className="play-text">Play</p>
            <p>{item.name}</p>
            <Modal image={item.image} modal = {modal} setModal ={setModal} />
          </div>  
        );
      })}
    </div>
  )
}

function Modal({image, modal, setModal}){
  return(
    <div className="gamePopup" style={{display:modal?  "block" :"none"}} >
      <div className="box">
        <div className="popImg">
          <img {...image}/>
        </div>
   
          <button type="button">
            <a href="" target="_blank">Play</a>
          </button>
      </div>
    </div>
  )
}

function Button({title, myMenu}) {
  return <button type="button" className="menuItem" onClick= {myMenu}>{title}</button>;
}


     {/* <div className="popText">
          <div className="gameTitle">
            <h3>{item.name}</h3>
            <p>{menu.name}</p>
          </div>
          <div className="gameInfo">
            <p>:{item.dateInfo}</p>
            <p>:{item.playerInfo}</p>
            <p>:{item.developerInfo}</p>
          </div> */}


