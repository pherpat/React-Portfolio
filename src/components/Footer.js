import React from 'react';
import github from '../components/assets/icon-git.svg';
import LinkedIn from '../components/assets/icon-in.svg';
import instagram from '../components/assets/icon-mail.svg';
import '../styles/Footer.css';

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <div className='footer'>
      <div className='containerMain'>
        <div className='footerLine'></div>
        <div className='footerIcons'>
          <div className='footerText'>Get in Touch!</div>
          <div className='github footerIcon' onClick={event => window.open('https://github.com/pherpat')}><img src={github} width="100%" alt="github" ></img></div>
          <div className='LinkedIn footerIcon' onClick={event => window.open('https://www.linkedin.com/in/jennifer-scherschligt-797490242/')}><img src={LinkedIn} width="100%" alt="LinkedIn" ></img></div>
          <div className='instagram footerIcon' onClick={event => window.open('https://www.instagram.com/pherpats/')}><img src={instagram} width="100%" alt="instagram" ></img></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
