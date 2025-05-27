import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Partnerships from '../components/Partnerships';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Taynara Paulina | Advogada';

    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
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
