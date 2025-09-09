import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-3">Rodney Mbaguta</h1>
        <p className="text-lg mb-8">Software Engineer | Full-Stack Developer | Backend Developer</p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/rodney-mbaguta/" 
            target="_blank" 
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Djrashhhh" 
            target="_blank" 
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white"
          >
            GitHub
          </a>
        
        </div>
      </div>
    </section>
  );
}