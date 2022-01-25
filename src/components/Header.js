export function Navbar({logo,navItems}) {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href = {logo.url} >
            <img src= {logo.src} alt ={logo.name}/>
          </a>
        </div>

        <div className="nav">
          <ul>
            {navItems.map((Item,id)=>
              <li className="navItem" key={id}>
                <a href = {Item.url}>
                  {Item.item}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}
