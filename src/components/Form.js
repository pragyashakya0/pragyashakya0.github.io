 export function Form({display,forms,setState,info}){
  return(
    <form className="form" style={{display}}>
    {forms.map((form,id) => 
        <div className="input-icons" key={id}>
          <img className="iconInput" src={form.icon}/>
          <input type={form.type} className ="input" placeholder={form.text}/>
        </div>
      )}
      <button
        className ="btn" 
        name="submit" 
        onClick={() => {
        setState(true)
        }}
      >        
        {info.buttonText}
      </button>
    </form>
  )
}