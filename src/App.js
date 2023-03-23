import React from "react";

import About from "./components/About.js";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
       <About />
       <Contact />
       <Experience />
       <Footer />
       <Header />
       <Navbar />
       <Portfolio />
    </div>
  );
}

export default App;