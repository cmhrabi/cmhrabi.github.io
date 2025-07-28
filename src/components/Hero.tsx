import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-44 h-44 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              View My Work
              <ExternalLink size={20} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              Download Resume
              <Download size={20} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;