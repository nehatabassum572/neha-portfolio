import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Resume from './Resume';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? ' backdrop-blur-md shadow-lg bg-slate-950/25 border border-white/10'
          : 'bg-transparent'
      } rounded-3xl`}
    >
      <div className="w-[98vw] max-w-[1400px] px-4 py-3">
        <div className="flex justify-between items-center">
          {/* <div className="font-myfont2 text-2xl font-bold text-white">Neha Tabassum</div> */}
          <div className="flex items-center gap-3">
            <img
              src="Public\assests\logo.png"
              alt="Neha Tabassum Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-myfont2 text-2xl font-bold text-white">
              Neha Tabassum
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-400 cursor-pointer transition-all duration-200 font-medium transform hover:-translate-y-1"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="p-3 border border-blue-400 rounded-full text-white hover:bg-blue-400/10 transition-all cursor-pointer transform hover:-translate-y-1">
              <Resume />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 flex flex-col items-center bg-slate-900/90 backdrop-blur-sm py-4 rounded-lg shadow-lg bg-grainy">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)} 
                className="text-white hover:text-blue-400 cursor-pointer transition-all duration-200 font-medium transform hover:-translate-y-1"
              >
                {item.name}
              </Link>
            ))}
            {/* Resume Button in mobile dropdown */}
            <div className="px-4 py-2 border border-blue-400 rounded-lg text-white hover:bg-blue-400/10 transition-all cursor-pointer transform hover:-translate-y-1">
              <Resume />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;