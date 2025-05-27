import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Partnerships from '../components/Partnerships';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Taynara Paulina | Advogada';
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Appointment />
      <Partnerships />
    </>
  );
};

export default Home;