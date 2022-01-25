import logoimg from "../img/8bit-logo.png"
export function Header() {

  const logo = {
  src: logoimg,

}
  return (
      <div className="logo">
        <img src = {logo.logoimg}
        />
        
        

      </div>
  )
}
