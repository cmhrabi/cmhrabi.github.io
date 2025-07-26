import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Timeline connector */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-blue-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

              <div className="ml-12">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500 mt-2 sm:mt-0">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;