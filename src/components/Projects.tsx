import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project, projects } from '../data/portfolio';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => setSelectedProject(project.id)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm">Click to view details</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="mr-1" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} className="mr-1" />
            <span className="text-sm">Code</span>
          </a>
        </div>
      </div>
    </div>
  );

  const ProjectModal = () => {
    if (!selectedProject) return null;
    
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{project.longDescription}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                <Github size={20} className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in full stack development.
          </p>
        </div>

        {/* All Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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