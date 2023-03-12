import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';



const Navbar = () => {


    const[Click ,setClick]= useState(false);

    const handleClick = ( ) => setClick(!Click);

    const[Color, setColor] = useState(false);

    const changeColor = () => {if(window.scrollY >=5){ setColor(true)}
    else{
        setColor(false)
    }

};

window.addEventListener("scroll", changeColor);



  return (

    <div className={Color ? "header header-bg" : "header"}> 
        <Link to='/'>
            <h1>
                Portfolio
            </h1>
        </Link>
        <ul className={Click ? "nav-menu active":"nav-menu"} >
            <li>
                <Link to='/'>Home</Link>
            </li>
        
        
            <li>
                <Link to='/project'>Project</Link>
            </li>
        
        
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        
        
            <li>
                <Link to='/about' >About</Link>
            </li>
        </ul>
        <div className='beefburger' onClick={handleClick}> 
        
            { Click?(<FaTimes size={20} style={{color:'#fff'}}/>
              ):(
              <FaBars size={20} style={{color:'#fff'}}/> )}
            
        </div>
       
    </div>
  )
}

export default Navbar
