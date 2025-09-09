import React from "react";
import { 
  SiSpring, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiAwsorganizations,
  SiDocker
} from "react-icons/si";
import { FaCode, FaCog, FaCloud, FaJava, FaBrain } from "react-icons/fa";

const skillCategories = [
  {
    category: "Backend Development",
    icon: <FaCode className="text-2xl text-blue-600 mb-3" />,
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
      { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
      { name: "REST APIs", icon: <FaCode className="text-blue-500" /> }
    ]
  },
  {
    category: "Databases",
    icon: <FaCog className="text-2xl text-purple-600 mb-3" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
    ]
  },
  {
    category: "Frontend Development",
    icon: <SiReact className="text-2xl text-cyan-500 mb-3" />,
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> }
    ]
  },
  {
    category: "Machine Learning & Data",
    icon: <FaBrain className="text-2xl text-purple-600 mb-3" />,
    skills: [
      { name: "Machine Learning", icon: <FaBrain className="text-purple-600" /> }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud className="text-2xl text-gray-600 mb-3" />,
    skills: [
      { name: "AWS", icon: <SiAwsorganizations className="text-orange-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> }
    ]
  },
  {
    category: "Tools & Methodologies",
    icon: <SiGithub className="text-2xl text-gray-800 mb-3" />,
    skills: [
      { name: "Git/GitHub", icon: <SiGithub className="text-gray-800" /> },
      { name: "Agile SDLC", icon: <FaCog className="text-blue-500" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Technical Skills</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}