import { useEffect, useState } from 'react';
import { Dot } from './Dot';

export function Review({testimonials,title,rating}){
  const [index, setIndex] = useState(0);
  useEffect(()=> {
    const timer = setInterval(()=>{
      setIndex((i) => (i+1) % testimonials.length);
    },3000);
    return() => {
      clearInterval(timer);
    }
  },[]);
  return (
    <div className = 'testimonialreview'>
      <h2>{title}</h2>   
      <div className="reviewslideshow">
        {testimonials.map((test,id) => {
          const display = index === id ? "block" : "none"
          return(
            <div className='reviewslides' style={{display}}>
              <div className='reviewImg'>
                <img src={test.image.src} alt={test.image.name} />
              </div>
              
              <div className='reviewtext'>
                <p className="reviewname">{test.image.name}</p>
                 {[...Array(test.rating)].map((e, i) => {
                   return <img src = {rating.src}/>
                   })}
                <p>{test.reviewtitle}</p>
                <p>{test.review}</p>
              </div>
            </div>
          );
        })}
      </div>    
      <Dot slides = {testimonials} index={index} setIndex ={setIndex}/>
    </div>
  );
}

