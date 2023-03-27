import React from 'react';
import '../styles/Header.css';
import faceLogo from '../components/assets/logo-face.png'

function Header(props) {
  const changePage = (page) => {
    props.changePage(page);
  };

  return (
    <nav className="header">
      <div className='containerMain headerFlex'>
        <div className='logo' onClick={() => changePage('about')}><img src={faceLogo} width="100%" alt='Jennys Logo'></img></div>
        <ul>

          <li className={props.currentPage === 'about' ? 'active' : ''} onClick={() => changePage('about')}>About</li>
          <li className={props.currentPage === 'portfolio' ? 'active' : ''} onClick={() => changePage('portfolio')}>Portfolio</li>
          <li className={props.currentPage === 'resume' ? 'active' : ''} onClick={() => changePage('resume')}>Resume</li>
          <li className={props.currentPage === 'contact' ? 'active' : ''} onClick={() => changePage('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;