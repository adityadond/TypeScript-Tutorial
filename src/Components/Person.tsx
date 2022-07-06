import React from 'react'
type personProps={
    name:{
        first:string
        last:string
    }
}

function Person(props:personProps) {
  return (
    <div>Person {props.name.last}</div>
  )
}

export default Person