import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk , FaMobile,  FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <h4>  <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                Karachi , Pakistan</h4>
                 
                </div>
                <div className='phone'>
                <h4>  <FaMobile size={20} style={{color: "#fff", marginRight:"2rem"}}/> 
                +92315-2743180 </h4>
                </div>
                <div className='email'>
                  <h4>  <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                  Tc2.hanzila.5924@gmail.com </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>This is Syed Hanzila Hatim , I am a devoted and a hardworking Frontend Developer. I enjoy discussing new project and design challenges.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff" ,marginRight:"1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff" ,marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
