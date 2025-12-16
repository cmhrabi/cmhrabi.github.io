import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import Badge from './Badge';

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Experience</h2>
          <div className="w-12 h-px bg-primary-600 mx-auto"></div>
        </div>

        {/* Simplified Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200"></div>

          <div className="space-y-6 relative">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={job.id} className="relative flex items-center" style={{ minHeight: '150px' }}>
                  {/* Card */}
                  <div className={`w-7/12 ${isEven ? 'mr-auto pr-6' : 'ml-auto pl-6'}`}>
                    <div className={`bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow border border-gray-200 ${
                      isEven ? 'mr-3' : 'ml-3'
                    }`}>
                      {/* Header */}
                      <div className="mb-2">
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-gray-900 leading-tight">{job.title}</h3>
                            <p className="text-primary-600 font-medium text-sm">{job.company}</p>
                          </div>
                          <div className="text-right text-xs text-gray-500 ml-2 flex-shrink-0">
                            <div className="flex items-center justify-end mb-0.5">
                              <Calendar size={11} className="mr-1" />
                              <span>{job.period}</span>
                            </div>
                            <div className="flex items-center justify-end">
                              <MapPin size={11} className="mr-1" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {job.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            label={tech}
                            variant="primary-light"
                            size="sm"
                          />
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