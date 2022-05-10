import React from 'react'
import { input } from './../../utils/constansts/Input';
import './Main.css'
function Main({ props }) {
  return (
    <>
      {input?.map((props) =>
      (<div className='content' key={props?.id}>
        <div className='mainpic'> <img src={props.image} alt='' /></div>
        <div className='container'>
          <div className='row'>
            <img src={props.locationTag} alt='' />
            <h4>{props.country}</h4>
            <a href='/'>{props.map}</a>
          </div>
          <div className='column'>
            <h2>{props.attraction}</h2>
            <h6>{props.date}</h6>
            <p>{props.description}</p>
          </div>
        </div>

      </div>))}
    </>
  )
}

export default Main