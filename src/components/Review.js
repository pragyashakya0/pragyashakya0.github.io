export function Review({testimonials}){
  console.log(testimonials)
  return (
    <div className = 'testimonialreview'>
      <h2>Loved By Everyone</h2>
      <div className="slideshow">
      {testimonials.map((test) => {
        return(
          <div className='testslides'>
            <div className='testImg'>
              <img 
              src={test.image.src} 
              alt={test.image.name}
              />
            </div>
            <div className='text'>
              <p className="name">{test.image.name}</p>
              <p>{test.reviewtitle}</p>
              <p>{test.review}</p>
            </div>
          </div>
          );
      })}
      </div>
    </div>


  );
}

