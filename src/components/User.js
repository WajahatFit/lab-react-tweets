import React from 'react'

export default function User(props) {
  return (
    <span>
      {props.userData.name}
      {props.userData.handle}
    </span>
    
  )
}