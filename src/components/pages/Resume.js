// First we import components from our components folder
import React from 'react';
import '../../styles/Portfolio.css';
import resumePic from '../assets/jen-resume.jpg';

export default function Resume() {
  return (
    
    <div className='containerMain'>
      <h1 className="portfolioHeader">Resume</h1>
     <div className="resume">

     <img src={resumePic} width="100%" alt="resume" ></img> 

     </div>
    </div>
  );
}
