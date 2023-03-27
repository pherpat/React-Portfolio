import React from 'react';
import '../../styles/Portfolio.css';
import project1 from '../assets/password generator.png';
import project2 from '../assets/beer-n-bites-screenshot.jpeg';
import project3 from '../assets/weather-screenshot.png';
import project4 from '../assets/quiz-Screenshot.png';
import project5 from '../assets/planner-screenshot.png';
import project6 from '../assets/movies2watch.png';

//onclick function and open in a new window 
export default function Portfolio() {
  return (
    <div className='containerMain'>
      <h1 className="portfolioHeader">Portfolio</h1>
      <div className="gallery">


        <div className='project' onClick={event => window.open('https://beer-n-bites.herokuapp.com/')}><img src={project2} width="100%" alt="project2" ></img><h2>Beer'n'Bites</h2></div>

        <div className='project' onClick={event => window.open('https://pherpat.github.io/Module5-challenge-planner/')}><img src={project5} width="100%" alt="project5" ></img><h2>Planner</h2></div>

        <div className='project' onClick={event => window.open('https://bryanjeremysmith.github.io/Movies2Watch/')}><img src={project6} width="100%" alt="project6" ></img><h2>Movies2Watch</h2></div>

        <div className='project' onClick={event => window.open('https://pherpat.github.io/Module3-challenge/')}><img src={project1} width="100%" alt="project1" ></img><h2>Password Generator</h2></div>

        <div className='project' onClick={event => window.open('https://pherpat.github.io/Module6-challenge-weather/')}><img src={project3} width="100%" alt="project3" ></img>    <h2>Weather Dashboard</h2></div>

        <div className='project' onClick={event => window.open('https://pherpat.github.io/Module4-challenge/')}><img src={project4} width="100%" alt="project4" ></img> <h2>Mario Quiz</h2></div>

      </div>
    </div>
  );
}