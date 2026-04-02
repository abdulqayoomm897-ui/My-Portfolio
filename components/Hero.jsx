import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle1, setDisplayedTitle1] = useState('');
  const [displayedTitle2, setDisplayedTitle2] = useState('');
  
  const fullName = 'Abdul Qayoom';
  const title1 = 'AI and Data scientist';
  const title2 = 'Software Engineer';

  useEffect(() => {
    // Type name
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < fullName.length) {
        setDisplayedName(fullName.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
      }
    }, 100);

    return () => clearInterval(nameInterval);
  }, []);

  useEffect(() => {
    // Type title1 after name is done (1.2s)
    const title1Timeout = setTimeout(() => {
      let title1Index = 0;
      const title1Interval = setInterval(() => {
        if (title1Index < title1.length) {
          setDisplayedTitle1(title1.slice(0, title1Index + 1));
          title1Index++;
        } else {
          clearInterval(title1Interval);
        }
      }, 50);

      return () => clearInterval(title1Interval);
    }, 1200);

    return () => clearTimeout(title1Timeout);
  }, []);

  useEffect(() => {
    // Type title2 after title1 is done (1.2s + title1 length * 50ms + 600ms delay)
    const title2Timeout = setTimeout(() => {
      let title2Index = 0;
      const title2Interval = setInterval(() => {
        if (title2Index < title2.length) {
          setDisplayedTitle2(title2.slice(0, title2Index + 1));
          title2Index++;
        } else {
          clearInterval(title2Interval);
        }
      }, 50);

      return () => clearInterval(title2Interval);
    }, 1200 + title1.length * 50 + 600);

    return () => clearTimeout(title2Timeout);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 glow-text">
          Hi, I'm
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {' '}{displayedName}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-400 mb-6 text-lg md:text-xl max-w-2xl mx-auto"
        >
          <p className="h-8 mb-2">
            {displayedTitle1}
            {displayedTitle1.length === title1.length && <span className="animate-pulse">|</span>}
          </p>
          <p className="h-8">
            {displayedTitle2}
            {displayedTitle2.length === title2.length && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-3 rounded-lg transition transform hover:scale-105">
            View Work
          </a>
          <a href="/Abdul%20Qayoom.docx" download className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-3 rounded-lg transition transform hover:scale-105">
            📄 Download Resume
          </a>
          <a href="#contact" className="border-2 border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-bold px-6 py-3 rounded-lg transition">
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
