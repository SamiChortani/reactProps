import React from 'react';
import "./profile.css"

const ProfilePhoto = ({image}) => {
  return (
    
        <img src={image} alt="PIC" />
    
  )
}

ProfilePhoto.defaultProps = {
    image: "./logo512.png"
}

export default ProfilePhoto