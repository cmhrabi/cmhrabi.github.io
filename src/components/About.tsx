import React from 'react';
import { personalInfo, skills } from '../data/portfolio';
import Badge from './Badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="flex items-center justify-center mb-12">

          <div className="space-y-8 max-w-4xl">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.programingLanguages.map((skill) => (
                  <Badge
                    key={skill}
                    label={skill}
                    variant="primary-light"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Frameworks</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.frameworks.map((skill) => (
                  <Badge
                    key={skill}
                    label={skill}
                    variant="primary-medium"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Other Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.otherTools.map((skill) => (
                  <Badge
                    key={skill}
                    label={skill}
                    variant="primary-dark"
                  />
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