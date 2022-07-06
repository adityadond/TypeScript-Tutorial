import React from 'react'

type statusProp={
status:"loading"|"success"|"error"
}

function Status(props:statusProp) {
    let message;
    if(props.status==="loading"){
        message="Loading"
    }
    else if(props.status==="success"){
        message="success"}
        else if(props.status==="error"){
            message="error fetching"}
  return (
    <div>{message}</div>
  )
}

export default Status