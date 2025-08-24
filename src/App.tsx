import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("https://chatllm.abacus.ai/static/imgs/teams/backllm3.webp"),
        linear-gradient(183deg, #000 0%, #00060c 20%, #00132a 60%, #000b16 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="container mx-auto text-center">
            <h1 className="text-gray-400">
              © 2025 Neha Tabassum
            </h1>
            <p className="text-gray-400">
              Licensed under MIT
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;