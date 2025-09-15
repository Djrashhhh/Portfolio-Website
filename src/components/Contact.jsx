import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="space-y-3">
          <p className="text-lg">
            Email: <a 
              href="mailto:rodney.mbaguta.m@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              rodney.mbaguta.m@gmail.com
            </a>
          </p>
          <p className="text-lg">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rodney-mbaguta/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Let's Connect on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}