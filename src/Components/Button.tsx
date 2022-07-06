import React from 'react'
type buttonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

function Button(props:buttonProps) {
  return (
    <button onClick={props.handleClick}>Button</button>
  )
}

export default Button