import React from 'react'
import './aboutcontent.css';
import gpt3 from '../assets/gpt3.png';
import todoproject from '../assets/todoproject.jpg';
import { Link } from 'react-router-dom';

const AboutContent = () => {
return (
<div className='about'>
<div className='left'>
    <h1>WHO AM I?</h1>
    <p>Im a react front-end developer. I create
         responsive secure websites for my clients.</p>

     <Link to='/contact' >
        <button className='btn'>CONTACT</button>

     </Link>
</div>
<div className='right'>
    <div className='img-container'>
        <div className='img-stack top'>
        <img src={gpt3} className='img' alt='true'/>
    </div>    
    <div className='img-stack bottom'>
        <img src={todoproject} className='img' alt='true'/>
    </div>    
        </div>
    
</div>
</div>
)
};

export default AboutContent;
