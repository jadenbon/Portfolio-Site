import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wakezy Alarm App",
      description: "A SwiftUI-based alarm application with smart wake-up features, customizable sounds, and intuitive interface. Features include gradual volume increase, weather integration, and sleep tracking analytics.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      tech: ["SwiftUI", "Core Data", "AVFoundation", "UserNotifications"],
      liveDemo: "https://apps.apple.com",
      github: "https://github.com/jadenbonnett/wakezy-app",
      emoji: "⏰"
    },
    {
      id: 2,
      title: "Discord Bot Studio",
      description: "A comprehensive Discord bot creation platform with drag-and-drop interface, custom command builder, and real-time analytics. Enables users to create powerful bots without coding knowledge.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["Node.js", "Discord.js", "React", "MongoDB", "Socket.io"],
      liveDemo: "https://discord-bot-studio.vercel.app",
      github: "https://github.com/jadenbonnett/discord-bot-studio",
      emoji: "🤖"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This modern portfolio website built with React and Node.js. Features responsive design, contact form with email integration, and smooth animations. Deployed on Vercel with backend on Render.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "Express", "Tailwind CSS", "Nodemailer"],
      liveDemo: "https://jadenbonnett.vercel.app",
      github: "https://github.com/jadenbonnett/portfolio-website",
      emoji: "💼"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-purple-900/20 to-black/50 rounded-2xl p-6 border border-purple-500/20 card-hover h-full">
                  {/* Project Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center">
                      <span className="text-6xl">{project.emoji}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-3 pt-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary text-sm px-4 py-2"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary text-sm px-4 py-2"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/jadenbonnett"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 