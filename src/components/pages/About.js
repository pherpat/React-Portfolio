import React from 'react';
import '../../styles/About.css';
import jenPic from '../assets/pherpatprofile-3.jpeg';


function About() {
  return (
    <div>
      <h2>Hi I'm a Full Stack Web Development Student</h2>
      <div className="avatar"><img src={jenPic} width="100%" alt="profilepic" ></img>
      </div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default About;