import React from 'react';
import './work.css';
import gpt3 from '../assets/gpt3.png';
import { NavLink } from 'react-router-dom';
const Work = (props) => {
  return (
    <div className='project-card'>
            <img src={props.imgsrc} alt='image'/>
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink className='btn' to={props.view}>View</NavLink>
                    <NavLink className='btn' to={props.view}>Source </NavLink>
                </div>
            </div>
        </div>
  )
}

export default Work
