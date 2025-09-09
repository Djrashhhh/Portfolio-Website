import React from "react";

const experiences = [
  {
    title: "Web Developer - Bay Horizon Built Ltd (Edmonton, Canada)",
    period: "May – Aug 2025",
    points: [
      "Designed and implemented the company’s website, enhancing its digital presence",
      
    ]
  },
  {
    title: "Software Engineer Intern - Centrika LTD (Rwanda)",
    period: "May – Aug 2024",
    points: [
      "Led the creation of a centralized task management system that optimized operational workflows across events, transport, and customer support services",
      
    ]
  },
  {
    title: "Software Developer Intern - Bank of Kigali (Rwanda)",
    period: "June - Aug 2023",
    points: [
      "Assisted in the development of Urubuto, a modular and scalable education management system that streamlined administration for over 650 schools with features including fees processing, library and student behavior tracking, communication, and advanced analytics",
      
    ]
  }

];

export default function Experience() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-500 mb-3">{exp.period}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}