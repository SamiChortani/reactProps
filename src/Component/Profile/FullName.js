import React from 'react'
import "./profile.css"

function FullName({name}) {
  return (

        <h1 className='name'>{name}</h1>
    
  )
}

FullName.defaultProps ={
  name: `anonyme`
}

export default FullName