import React from 'react'

type PersonL={
    names:{
first:string
last:string

    }[]
}

function PersonList(props:PersonL) {
  return (
    <div>

        {props.names.map((name)=>{
           return(
            <h2>{name.first} {name.last}</h2>
           ) 
        })}
    </div>
  )
}

export default PersonList