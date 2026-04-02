import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-emerald-400">AQM</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#about" className="hover:text-emerald-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-emerald-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-emerald-400 transition">Projects</a></li>
          <li><a href="#services" className="hover:text-emerald-400 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-emerald-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
