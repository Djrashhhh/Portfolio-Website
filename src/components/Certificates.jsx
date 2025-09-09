import React from "react";

const certificates = [
  { name: "Machine Learning with Python", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-0b33052d-4b60-400a-bcea-6443263b187e/" },
  { name: "Relational Database", issuer: "FreeCodeCamp", link: "https://www.freecodecamp.org/certification/mbagutarodney7/relational-database-v8" },
  {name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", link: "#" },
  {name: "SQL Basic", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/ee927fc7f9a3" }
];

export default function Certificates() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Certificates</h2>
        
        {/* Changed from vertical stacking to responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-gray-900">{cert.name}</p>
              <p className="text-gray-500 mb-2">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

