const gameTypes = [
  {
    id:0,
    name: "All Games"
  },
  {
    id:1,
    name: "Adventure"
  },
  {
    name: "Action"
  },
  {
    name: "Arcade"
  },
  {
    name: "Sports"
  },
  {
    name: "Strategy"
  }
]

export function GameCard({games}){
  return ( 
    <div className='games'>
      <h2>All the retro games in one place</h2>

      <div className = 'gameMenu'>
        {gameTypes.map((menu) => {
          return (
            <button type='button' className='menuItem'>{menu.name}</button>
          )
        })}

      </div>

      <div className='gameImg'>
      {games.map((game) => {
        return (
        <div className = "gameCard">
          <img
          src = {game.image}
          id = {game.id}
          alt = {game.name}
          />
          <p>{game.name}</p>
        </div>
        );
      })}
      </div>
    </div>
  );
}