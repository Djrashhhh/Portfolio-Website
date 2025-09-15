import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Full-Stack Task & Inventory Management System",
    description: "A comprehensive management system built with Spring Boot backend and React frontend. Features include task tracking, inventory management, user authentication, and real-time updates. Implements secure JWT authentication and RESTful API architecture.",
    image: "/images/s3.png", // Add your image path
    technologies: ["Spring Boot", "Java","JWT Auth", "Hibernate", "JPA","PostgreSQL", "REST APIs", "Javascript","React", "CSS","BCrypt" ],
    githubLink: "https://github.com/Djrashhhh/TaskManagement_App",
    liveDemo: "https://www.loom.com/share/3952ef89da344bfb9cce6d1057fa51d3?sid=fc74e96c-3843-490f-8881-a2cc3fb05886"
  },
  {
    name: "SimInvest Platform",
    description: "An educational investment simulation platform that allows users to practice stock trading with virtual money. Built with Spring Boot, PostgreSQL, and React.js. Features include live stock data from Finnhub, real-time portfolio valuation, secure JWT authentication, transaction settlement (T+2), watchlists, market news integration, and educational resources. Designed with robust backend scheduling, fault tolerance (circuit breaker, retries), and data quality monitoring to ensure reliability and accuracy.",
    image: "/images/invest-login.png", // Add your image path
    technologies: ["Java", "Spring Boot", "JWT Auth", "REST APIs", "PostgreSQL", "TypeScript", "React", "Tailwind CSS", "Finnhub API", "NewsAPI"],
    githubLink: "https://github.com/Djrashhhh/SimInvest-Platform",
    liveDemo: "https://www.loom.com/share/35ecd376b62040e9839f06aa2a810468?sid=383e569c-c1f3-4bea-a875-d521b93dc082",
    website: "https://siminvestplatform.netlify.app/login"
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Featured Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Project Header */}
              <div className="p-6 pb-4">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Image */}
              <div className="px-6 mb-4">
                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-48">
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-purple-100"><span class="text-gray-500 font-medium">Project Screenshot</span></div>';
                    }}
                  />
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6 mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="px-6 pb-6">
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors group"
                  >
                    <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                    <span className="font-medium">View Code</span>
                  </a>
                  
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors group"
                  >
                    <FaExternalLinkAlt className="text-sm group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors group"
                  >
                    <FaExternalLinkAlt className="text-sm group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Website</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}