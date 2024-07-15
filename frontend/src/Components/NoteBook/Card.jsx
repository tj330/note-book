import React from 'react'
import "./Card.css"
import {deleteicon} from "../../assets/icons/logo"

function Card(props) {

  return (
    <div className='card'>
      <div>
      <h2>{props.details.title}</h2>
      <p>{props.details.content}</p>
      </div>
         <div className='menu'>
            <button onClick={()=>props.delete(props.details._id)}><img src={deleteicon} alt="delete" /></button>
         </div>
    </div>
  )
}

export default Card