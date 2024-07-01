
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Works from './Components/Works';

function App() {
  const [theme, setTheme] = useState(false); // false for light mode, true for dark mode

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`container ${theme ? 'dark' : 'light'}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Skills theme={theme} />
      <Works />
      <Contact />
    </div>
  )
}

export default App;