import React from 'react'
import Tweet from './Tweet'

export default function Message(props) {
  return (
    <p className="message"> {props.message} </p>
  )
}