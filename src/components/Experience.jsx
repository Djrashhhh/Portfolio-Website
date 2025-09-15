import React from "react";

const experiences = [
  {
    title: "Software Developer Intern- Bay Horizon Built Ltd (Edmonton, Canada)",
    period: "May – Aug 2025",
    points: [
      "Architected a centralized database system on Microsoft Azure and building a responsive React.js frontend, I helped them achieve a 37% boost in client engagement while cutting data retrieval times in half.",
      
    ]
  },
  {
    title: "Software Engineer Intern - Centrika LTD (Kigali, Rwanda)",
    period: "May – Aug 2024",
    points: [
      "Built a system that reliably tracks and monitors 1,700 active point-of-sale devices across Rwanda, processing over 45,000 transactions every single day",
      "The system transformed how the operations team worked, eliminating 25% of manual data entry and giving them back 2+ hours daily to focus on strategic initiatives rather than tedious administrative tasks."
    ]
  },
  {
    title: "Backend Engineer Intern - Bank of Kigali (Kigali, Rwanda)",
    period: "June - Aug 2023",
    points: [
      "Built an Educational Management system that reduces manual processing times by 35% for the bank's educational program, serving over 100 institutions.",
      
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