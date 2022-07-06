import React from 'react'
type ListProps={
    items:string[] | number[]
    onClick:(value:string|number)=>void
}
function List({items,onClick}:ListProps) {
  return (
    <div><h2>List</h2>
    {items.map((item,index)=>{
        return(
            <div key={index} onClick={()=>onClick(item)}>
                {item}
                </div>
        )
    })}
    
    </div>
  )
}

export default List