import React from 'react';
import { personalInfo, skills } from '../data/portfolio';
import Badge from './Badge';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills</h2>
          <div className="w-12 h-px bg-primary-600 mx-auto"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="space-y-8 max-w-3xl">
            <div className="text-center">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.programingLanguages.map((skill) => (
                  <Badge
                    key={skill}
                    label={skill}
                    variant="primary-light"
                    size="md"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Frameworks</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.frameworks.map((skill) => (
                  <Badge
                    key={skill}
                    label={skill}
                    variant="primary-medium"
                    size="md"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Other Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.otherTools.map((skill) => (
                  <Badge
                    key={skill}
                    label={skill}
                    variant="primary-dark"
                    size="md"
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