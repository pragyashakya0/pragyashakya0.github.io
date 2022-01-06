import logoimg from "../img/8bit-logo.png"


export function Navbar() {
  const logo = {
  src: logoimg,
  name: "8-bit-games"
  }

  const navItems = [
    {
      item: "Games",
      url: "#games"
    },
    {
      item: "About",
      url: "#about"
    },
    {
      item: "Update",
      url: "#update"
    }

  ]

 
  return (
    <div className="navbar">
      <div className="logo">
        <a href = "#index.html" >
          <img src= {logo.src} alt ={logo.name}/>
        </a>
      </div>

      <div className="nav">
        <ul>
          {navItems.map((Item)=>
            <li className="navItem">
              <a href = {Item.url}>
                {Item.item}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
