import React from 'react';
import '../../styles/About.css';
import toots from '../assets/toots.png';
import jenPic from '../assets/jenn.png';



function About() {
  return (
    <div className='aboutWrapper'>
      <div className='aboutHero'>
        <div className='containerMain'>
          <div className='aboutLine'></div>
          <h1 className='aboutHeader'>Hi! 😊 I’m Jen, and I’m learning to be a developer.</h1>
          <div className='toots'><img src={toots} alt="Toots" width='100%'></img></div>
        </div>
      </div>
      <div className='aboutInfo'>
        <div className='containerMain aboutFlex'>
          <div className='jenn'><img src={jenPic} alt="Jenn" width="100%"></img></div>
          <div className='aboutText'>Learning to code and taking care of kids is full time fun! Welcome to my portfolio of projects I created during my Full Stack Bootcamp at the University of Oregon in the rainy PNW.</div>
        </div>
      </div>
    </div>

  );
}

export default About;