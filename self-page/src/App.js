import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;