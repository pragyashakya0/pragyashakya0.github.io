import { useState } from 'react'
import slide1 from "../img/Slide1.png"
import slide2 from "../img/Slide2.png"
import slide3 from "../img/Slide3.png"

const images = [
  {
    id:0,
    name: "slide_1",
    src : slide1
  },
  {
    id:1,
    name: "slide_2",
    src : slide2
  },
  {
    id:2,
    name: "slide_3",
    src: slide3
  }
]

export function Slider(){
  const [Index, setIndex] = useState(0);
  return (
    <section className='container'>
      {images.map((image,id)=>{
        return(
          <div className='slideshow'>
            <img 
            src={image.src} 
            alt ={image.name}
            style ={{display: Index === id ? "block" : "none"}}
            />
            </div>
        );
      })}

    <div className='dot'>
      {images.map((image,id)=>{
        return(
            <span className='dotItem'  onClick={() => setIndex(id)} style={{ backgroundColor : Index === id ? "blue" : "white" }}></span>
            );
      })}
    </div>

    <div className='text-box'>
      <h1>Collection of retro games</h1>
      <p>Play a number of Nintendo 64 classic games</p>
    </div>

    </section>
    
  )
}
