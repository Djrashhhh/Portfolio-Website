import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">About Me</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              I'm a <span className="font-semibold text-blue-600">final-year Engineering student</span> at McMaster University 
              with a passion for building scalable software solutions. My journey has taken me from banking systems in Kigali 
              to fintech platforms processing <span className="font-medium">45,000+ daily transactions</span>.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in <span className="font-medium">full-stack development</span> with expertise spanning the complete 
              software lifecycle—from system architecture to cloud deployment. I thrive in collaborative environments, 
              bridging technical complexity with business impact across teams in Rwanda, Canada, and remote settings.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Spring Boot</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">React.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Fintech</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Cloud Platforms</span>
            </div>
            
            <p className="text-base text-gray-600 italic pt-2">
              When I'm not coding, you'll find me exploring new technologies, learning about finance, 
              or at the gym working toward my next PR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}