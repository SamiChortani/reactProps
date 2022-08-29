import React from 'react';
import "./profile.css"

const ProfilePhoto = ({children}) => {
  return (
    <>
        {children}
        </>
  )
}

ProfilePhoto.defaultProps = {
    image: "./logo512.png"
}

export default ProfilePhoto