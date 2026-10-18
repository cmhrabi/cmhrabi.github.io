import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center motion-safe:animate-zoom-in">
          <div className="mb-8">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div className="flex gap-8 justify-center items-center mb-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-300 underline-offset-4 hover:underline text-base font-medium transition-colors"
            >
              my work
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="text-white hover:text-gray-300 underline-offset-4 hover:underline text-base font-medium transition-colors"
            >
              resume
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;