import { useEffect, useState } from 'react'

export function Slider({images,text}){
  const [index, setIndex] = useState(0);
  useEffect(()=> {
    const Timer = setInterval(()=>{
      setIndex((i) => (i+1) % images.length);
    },3000);
    return() => {
      clearInterval(Timer);
    }
  },[]);
  return (
    <section className='container'>
      {images.map((image,id)=>{
        return(
          <div className='slideshow'>
            <img 
            src={image.src} 
            alt ={image.name}
            style ={{display: index === id ? "block" : "none"}}
            />
          </div>
        );
      })}
      
      <div className='dot'>
        {images.map((image,id)=>{
          return(
            <span className='dotItem'  
              onClick={() => setIndex(id)} 
              style={{ backgroundColor : index === id ? "blue" : "white" }}>
            </span>
          );
        })}
      </div>
      
      <div className='text-box'>
        <h1>{text.title}</h1>
        <p>{text.subtitle}</p>
      </div>
    </section>  
  )
}
