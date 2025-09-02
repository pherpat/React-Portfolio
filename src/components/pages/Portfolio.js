// First we import components from our components folder
import React from 'react';
import '../../styles/Portfolio.css';
import project1 from '../assets/password generator.png';
import project2 from '../assets/beer-n-bites-screenshot.jpeg';
import project3 from '../assets/weather-screenshot.png';
import project4 from '../assets/quiz-Screenshot.png';
import project5 from '../assets/planner-screenshot.png';
import project6 from '../assets/movies2watch.png';
import portGit from '../assets/port-git.svg';
import portLink from '../assets/port-link.svg';
import project7 from '../assets/gc-screenshot.jpg';

//onclick function and open in a new window 
//building portfolio cards 
export default function Portfolio() {
  return (
    <div className='containerMain'>
      <h1 className="portfolioHeader">Portfolio</h1>
      <div className="gallery">


         <div className='project' >
          <div className='portImage' onClick={event => window.open('https://glazed-and-confused.herokuapp.com/')}>
            <img src={project7} width="100%" alt="project7" ></img> 
          </div>
          <h2>Glazed & Confused</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/glazed-and-confused')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            {/* <div className='portlink' onClick={event => window.open('https://github.com/PMengler/glazed-and-confused')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div> */}
          </div>
        </div> 


        <div className='project' >
          <div className='portImage' onClick={event => window.open('https://beer-n-bites.herokuapp.com/')}>
            <img src={project2} width="100%" alt="project2" ></img>
          </div>
          <h2>Beer'n'Bites</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/Beer-n-Bites')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            {/* <div className='portlink' onClick={event => window.open('https://beer-n-bites.herokuapp.com/')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div> */}
          </div>
        </div>

        <div className='project' >
          <div className='portImage' onClick={event => window.open('https://bryanjeremysmith.github.io/Movies2Watch/')}>
            <img src={project6} width="100%" alt="project6" ></img>
          </div>
          <h2>Movies2Watch</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/Movies2Watch')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            <div className='portlink' onClick={event => window.open('https://bryanjeremysmith.github.io/Movies2Watch/')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div>
          </div>
        </div>

        <div className='project' >
          <div className='portImage' onClick={event => window.open('https://pherpat.github.io/Module6-challenge-weather/')}>
            <img src={project3} width="100%" alt="project3" ></img>
          </div>
          <h2>Weather Dashboard</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/Module6-challenge-weather')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            <div className='portlink' onClick={event => window.open('https://pherpat.github.io/Module6-challenge-weather/')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div>
          </div>
        </div>

        <div className='project' >
          <div className='portImage' onClick={event => window.open('https://pherpat.github.io/Module4-challenge/')}>
            <img src={project4} width="100%" alt="project4" ></img>
          </div>
          <h2>Quiz App</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/Module4-challenge')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            <div className='portlink' onClick={event => window.open('https://pherpat.github.io/Module4-challenge/')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div>
          </div>
        </div>

        <div className='project' >
          <div className='portImage' onClick={event => window.open('https://pherpat.github.io/Module5-challenge-planner/')}>
            <img src={project5} width="100%" alt="project5" ></img>
          </div>
          <h2>Work Day Scheduler App</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/Module5-challenge-planner')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            <div className='portlink' onClick={event => window.open('https://pherpat.github.io/Module5-challenge-planner/')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div>
          </div>
        </div>

        <div className='project' >
          <div className='portImage' onClick={event => window.open('https://pherpat.github.io/Module3-challenge/')}>
            <img src={project1} width="100%" alt="project1" ></img>
          </div>
          <h2>Password Generator</h2>
          <div className='portLinkBox'>
            <div className='portlink' onClick={event => window.open('https://github.com/pherpat/Module3-challenge')}>
              <span className='portIcon'><img src={portGit} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Github Repo</span>
            </div>
            <div className='portlink' onClick={event => window.open('https://pherpat.github.io/Module3-challenge/')}>
              <span className='portIcon'><img src={portLink} width="100%" alt="Github Logo" ></img></span>
              <span className='portIconText'>Live Site</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}