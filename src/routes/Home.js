import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import WorkCard from '../components/WorkCard';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Home
