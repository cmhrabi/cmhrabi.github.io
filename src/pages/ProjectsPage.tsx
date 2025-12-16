import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary-900 pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My Projects
          </h1>
          <p className="text-gray-400 text-base max-w-2xl">
            A collection of projects showcasing my skills in full stack development,
            problem-solving, and building user-centric applications.
          </p>
        </div>
      </div>

      {/* Projects Content */}
      <div className="pb-12">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
