import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  let pageContent;

  if (currentPage === 'about') {
    pageContent = <About />;
  } else if (currentPage === 'contact') {
    pageContent = <Contact />;
  } else if (currentPage === 'portfolio') {
    pageContent = <Portfolio />;
  } else if (currentPage === 'resume') {
    pageContent = <Resume />;
  }

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      <Section pageContent={pageContent} />
      <Footer />
    </div>
  );
}

export default App;