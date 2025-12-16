import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project, projects } from '../data/portfolio';
import Badge from './Badge';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 overflow-hidden"
      onClick={() => setSelectedProject(project.id)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-72 md:flex-shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  label={tech}
                  variant="primary-light"
                  size="sm"
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-4 text-sm pt-3 border-t border-gray-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} className="mr-1.5" />
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="mr-1.5" />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectModal = () => {
    if (!selectedProject) return null;
    
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img
              src={project.modalImage || project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.longDescription}</p>

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech: string) => (
                  <Badge
                    key={tech}
                    label={tech}
                    variant="primary-light"
                    size="sm"
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center"
                >
                  <ExternalLink size={16} className="mr-1.5" />
                  View Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded text-sm font-medium transition-colors flex items-center"
              >
                <Github size={16} className="mr-1.5" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* All Projects */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <ProjectModal />
    </section>
  );
};

export default Projects;