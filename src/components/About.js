export function About({about}){
  return(
    <div className="about-us">
      <div className="about-text">
        <h2>{about.title}</h2>
        <p>{about.description}</p>
      </div>
      <div className="about-img">
        <img 
        src = {about.image.src} 
        alt={about.image.name} 
        />
      </div>
    </div>
  )
}