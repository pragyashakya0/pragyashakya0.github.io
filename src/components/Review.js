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
      <Testslides testimonials={testimonials} rating={rating} index={index}/>   
      <Dot slides = {testimonials} index={index} setIndex ={setIndex}/>
    </div>
  );
}

function Testslides({testimonials,rating,index}){
  return(
  <div className="reviewslideshow">
    {testimonials.map((test,id) => {
    const display = index === id ? "block" : "none"
      return(
        <div className='reviewslides' style={{display}} key={id}>
          <div className='reviewImg'>
            <img src={test.image.src} alt={test.image.name} />
          </div>      
          <Rating test ={test} rating={rating}/>
        </div>
      );
    })}
  </div>
  )
}

function Rating({test,rating}){
  return(
    <div className='reviewtext'>
      <p className="reviewname">{test.image.name}</p>
      {[...Array(test.rating)].map((e, i) => {
        return <img src = {rating.src} key={i}/>
      })}
      <p>{test.reviewtitle}</p>
      <p>{test.review}</p>
    </div>
  )
}