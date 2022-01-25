export function Dot({slides,index, setIndex}){
  return(
    <div className='dot'>
      {slides.map((slide,id)=>{
        const backgroundColor = index === id ? "blue": "white";
          return(
            <span className='dotItem'  
              key={id}
              onClick={() => setIndex(id)} 
              style={{backgroundColor}}>
            </span>
          );
      })}
    </div>
  )
}