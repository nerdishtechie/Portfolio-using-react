import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Navbar onSectionClick={handleSectionClick} />
      <main>
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'contact' && <ContactMe />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
