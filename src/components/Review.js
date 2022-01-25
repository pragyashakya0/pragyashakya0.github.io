import { useEffect, useState } from 'react'

export function Review({testimonials,title}){
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
          return(
            <div className='reviewslides' style={{display: index === id ? "block" : "none"}}>
              <div className='reviewImg'>
                <img src={test.image.src} alt={test.image.name} />
              </div>
              
              <div className='reviewtext'>
                <p className="reviewname">{test.image.name}</p>
                <p>{test.reviewtitle}</p>
                <p>{test.review}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='dot'>
        {testimonials.map((test,id)=>{
          return(
            <span className='dotItem'  
              onClick={() => setIndex(id)} 
              style={{ backgroundColor : index === id ? "blue" : "grey" }}>
            </span>
          );
        })}
      </div>
    </div>
  );
}

