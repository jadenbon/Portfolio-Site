import React from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="relative w-16 h-8 bg-purple-900/30 rounded-full p-1 border border-purple-500/30 transition-all duration-300 hover:bg-purple-900/50"
        aria-label="Toggle dark mode"
      >
        <motion.div
          className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg"
          animate={{
            x: darkMode ? 32 : 0,
            rotate: darkMode ? 180 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full flex items-center justify-center text-white text-xs">
            {darkMode ? '🌙' : '☀️'}
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default DarkModeToggle; 