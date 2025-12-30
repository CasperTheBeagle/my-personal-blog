import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import StyleGuide from './components/StyleGuide';

function App() {
  return (
    <div>
      <NavBar />
      
      <main>
        <HeroSection />
        
        {/* Style Guide Section */}
        <StyleGuide />
      </main>
      
    </div>
  );
}

export default App;