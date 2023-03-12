import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
//import About from '../components/AboutContent';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading='ABOUT ME.' text="Hello and welcome! My name is Syed Hanzila Hatim, and I am a Frontend Developer. As a frontend developer, my job is to create visually appealing and interactive websites and applications that are user-friendly and responsive across various devices. I work with a variety of technologies such as HTML, CSS, JavaScript and Reactjs to bring designs to life, ensuring that they are not only aesthetically pleasing but also functional and accessible. My goal as a frontend developer is to create seamless and enjoyable experiences for users, while also ensuring that the website or application meets the business objectives of my clients. I am passionate about staying up-to-date with the latest design and development trends, and am committed to constantly improving my skills and knowledge to deliver the best possible results for my clients." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
