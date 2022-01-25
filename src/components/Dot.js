export function Dot({slides,index, setIndex}){
  return(
    <div className='dot'>
      {slides.map((image,id)=>{
        const backgroundColor = index === id ? "blue": "white";
          return(
            <span className='dotItem'  
              onClick={() => setIndex(id)} 
              style={{backgroundColor}}>
            </span>
          );
      })}
    </div>
  )
}