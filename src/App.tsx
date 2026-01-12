import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

//     <div className="relative min-h-screen">
//       {/* Fixed background */}
//       <div 
//         className="fixed inset-0 z-0"
//         style={{
//           backgroundImage: `url("https://chatllm.abacus.ai/static/imgs/teams/backllm3.webp"),
//         linear-gradient(183deg, #000 0%, #00060c 20%, #00132a 60%, #000b16 100%)`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed'
//         }}
//       />
      
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Fixed Gradient Background */}
      <div
        className="fixed inset-0 z-0 "
        style={{
          background:
            `
            radial-gradient(circle at 15% 20%, #ff7a18 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, #7f5cff 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, #ff4ecd 0%, transparent 40%),
            linear-gradient(135deg, #020617 0%, #0f172a 100%)
            `,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Optional Grain Overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none noise-layer"
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