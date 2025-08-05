import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About</span> Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="text-6xl text-purple-400">👨‍💻</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </motion.div>
            
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm Jaden, a passionate developer who loves creating innovative solutions 
                that make a difference. With expertise in both iOS development using SwiftUI 
                and full-stack web development, I bring ideas to life across multiple platforms.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work, which evolved 
                into a passion for building user-centric applications. I believe in writing clean, 
                maintainable code and creating experiences that users love.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-2">iOS Development</h3>
                  <p className="text-sm text-gray-400">SwiftUI, UIKit, Core Data</p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-2">Full-Stack</h3>
                  <p className="text-sm text-gray-400">React, Node.js, Express</p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-2">Design</h3>
                  <p className="text-sm text-gray-400">UI/UX, Responsive Design</p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="text-purple-400 font-semibold mb-2">Tools</h3>
                  <p className="text-sm text-gray-400">Git, Docker, AWS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 