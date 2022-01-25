import { useEffect, useState } from 'react';
import { Dot } from './Dot';

export function Slider({images,text}){
  const [index, setIndex] = useState(0);
  useEffect(()=> {
    const interval = setInterval(()=>{
      setIndex((i) => (i+1) % images.length);
    },3000);
    return() => {
      clearInterval(interval);
    }
  },[]);
  return (
    <section className='container'>
      {images.map((image,id)=>{
        const display = index === id ? "block": "none";
        return(
          <div className='slideshow'>
            <img 
            src={image.src} 
            alt ={image.name}
            style ={{display}}
            />
          </div>
        );
      })}

      <Dot slides = {images} index={index} setIndex ={setIndex}/>   
      <div className='text-box'>
        <h1>{text.title}</h1>
        <p>{text.subtitle}</p>
      </div>
    </section>  
  )
}

