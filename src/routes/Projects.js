import React from 'react';
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import PriceCard from '../components/PriceCard';
//import Work from '../components/Work';
import WorkCard from '../components/WorkCard';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Hero2 heading='PROJECTS.' text='Some of my recent project'/>
      <WorkCard/>
      <PriceCard/>
      <Footer/>
    </div>
  )
}

export default Projects
