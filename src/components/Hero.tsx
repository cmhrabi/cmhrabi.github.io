import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="text-center">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link
              to="/projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded text-base font-medium transition-colors flex items-center gap-2"
            >
              My Work
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded text-base font-medium transition-colors flex items-center gap-2"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
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