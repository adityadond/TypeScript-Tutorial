import React from 'react'
type GreetProps={
    name:string
    messageCount?:number
    isLogged:boolean
}

export const Greet = (props:GreetProps) => {
  return (
    <div>
      {
        props.isLogged? <h2>Greet Hi {props.name} You have {props.messageCount} </h2>:"welcome guest"
      }
         
     </div>
     );
}
