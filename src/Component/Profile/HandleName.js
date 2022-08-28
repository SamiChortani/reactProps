import React from 'react'

function HandleName({Follow}) {
  return (
    <button className='bt' onClick={()=> Follow()} > Follow </button>
  )
}

export default HandleName