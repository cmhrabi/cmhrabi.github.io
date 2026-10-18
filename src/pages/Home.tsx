import React from 'react';
import Hero from '../components/Hero';
// import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      {/* Skills section hidden for now — uncomment (and the import above) to restore */}
      {/* <About /> */}
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
