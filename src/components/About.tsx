import React from 'react';
import { personalInfo, skills } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a dedicated full stack developer with a passion for creating innovative 
                solutions that make a real impact. With years of experience in both frontend 
                and backend development, I specialize in building scalable, user-centric applications.
              </p>
              <p>
                My journey in software development started with curiosity about how things work 
                on the web. Today, I've had the privilege of working with startups and established 
                companies, helping them bring their digital visions to life.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programingLanguages.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Other Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.otherTools.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;