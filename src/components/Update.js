import { useState } from "react"
import { Form } from './Form'
import { Subscribe } from "./Subscribe";

export function Update({info, forms, submit}){
  const [state,setState] = useState(false);
  const display = !state ? "flex":"none";
  return(
    <div className="update" id="update">
      <div className="newsletter">
        <h1>{info.title}</h1>
        <p>{info.subtitle}</p>
        <Form display={display} forms={forms} setState={setState} info={info}/>
      </div>
      <Subscribe submit= {submit} state={state}/>
    </div>
  )
}

