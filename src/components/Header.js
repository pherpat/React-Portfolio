import React from 'react';
import '../styles/Header.css';

function Header(props) {
  const changePage = (page) => {
    props.changePage(page);
  };

  return (
    <nav className="header">
      <h1 onClick={() => changePage('about')}>Jennifer Scherschligt</h1>
      <ul>
        
        <li className={props.currentPage === 'about' ? 'active' : ''} onClick={() => changePage('about')}>About</li>
        <li className={props.currentPage === 'portfolio' ? 'active' : ''} onClick={() => changePage('portfolio')}>Portfolio</li>
        <li className={props.currentPage === 'resume' ? 'active' : ''} onClick={() => changePage('resume')}>Resume</li>
        <li className={props.currentPage === 'contact' ? 'active' : ''} onClick={() => changePage('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;