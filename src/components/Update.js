export function Update({info, forms, submit}){
  return(
    <div className="update">
      <div className="newsletter">
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
        <form className="form">
          {forms.map((form) => 
          <div className="input-icons">
            <img className="iconInput" src={form.icon}/>
            <input type={form.type}  name="name" className ="input" placeholder={form.text}/>
          </div>
          )}
           <button type="button" className ="btn" name="submit" onclick="subscribe()">{info.buttonText}</button>
        </form>
      </div>
      <div className="subscribe">
        <img src="img/donevector.png"/>
        <p>{submit.title}</p>
        <p>{submit.subtext}</p>
      </div>
    </div>
  )
}