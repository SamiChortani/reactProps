import React from 'react'
import './profile.css'


function Address({adress , adress1 , follow}) {
  return (
    <>
        <h1> {adress} </h1>
        <h2 className='account' > {adress1} </h2>
        <h3> {follow} </h3>
        
      </>
  )
}

Address.defaultProps = {
  adress: "Gafsa",
  adress1: "Tunis",
  follow: "mrgl",
}

export default Address