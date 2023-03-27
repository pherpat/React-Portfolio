import React from 'react';
import project1 from '../assets/password generator.png';
import project2 from '../assets/beer-n-bites-screenshot.jpeg';
import project3 from '../assets/weather-screenshot.png';
import project4 from '../assets/quiz-Screenshot.png';
import project5 from '../assets/planner-screenshot.png';
import project6 from '../assets/movies2watch.png';

export default function Portfolio() {
  return (
    <div className="gallery">
      <h1>Portfolio</h1>
      <h2>Beer'n'Bites</h2>
      <div className='project2'><img src={project2} width="100%" alt="project2" ></img></div>
      <h2>Planner</h2>
      <div className='project5'><img src={project5} width="100%" alt="project5" ></img></div>
      <h2>Movies2Watch</h2>
      <div className='project6'><img src={project6} width="100%" alt="project6" ></img></div>
      <h2>Password Generator</h2>
      <div className='project1'><img src={project1} width="100%" alt="project1" ></img></div>
      <h2>Weather Dashboard</h2>
      <div className='project3'><img src={project3} width="100%" alt="project3" ></img></div>
      <h2>Mario Quiz</h2>
      <div className='project4'><img src={project4} width="100%" alt="project4" ></img></div>
    
    </div>
  );
}