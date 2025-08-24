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

        {/* Zig-zag Timeline with straight center line */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-300 opacity-30"></div>
          
          <div className="space-y-8 relative">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={job.id} className="relative flex items-center" style={{ minHeight: '200px' }}>
                  {/* Card */}
                  <div className={`w-7/12 ${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className={`bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 ${
                      isEven ? 'mr-4' : 'ml-4'
                    }`}>
                      {/* Header with improved layout */}
                      <div className="mb-3">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{job.title}</h3>
                            <p className="text-blue-600 font-semibold text-base">{job.company}</p>
                          </div>
                          <div className="text-right text-xs text-gray-500 ml-3 flex-shrink-0">
                            <div className="flex items-center justify-end mb-1">
                              <Calendar size={12} className="mr-1" />
                              <span>{job.period}</span>
                            </div>
                            <div className="flex items-center justify-end">
                              <MapPin size={12} className="mr-1" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description with better spacing */}
                      <ul className="space-y-1 mb-3">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start leading-relaxed">
                            <span className="text-blue-500 mr-2 mt-1 text-xs">▪</span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies with improved styling */}
                      <div className="flex flex-wrap gap-1">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-200 hover:shadow-sm transition-shadow"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;