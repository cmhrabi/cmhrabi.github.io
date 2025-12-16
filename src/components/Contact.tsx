import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <div className="w-12 h-px bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            I'm always interested in new opportunities and collaborations.
            Let's discuss how we can work together!
          </p>
        </div>
          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-6">

            <div className="flex flex-col text-center items-center">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="flex flex-col justify-center space-y-3">
              <div className="flex">
                <div className="bg-gray-100 p-2 rounded mr-3">
                  <Mail className="text-gray-700" size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors text-xs"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex">
                <div className="bg-gray-100 p-2 rounded mr-3">
                  <MapPin className="text-gray-700" size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-sm">Location</h4>
                  <p className="text-gray-600 text-xs">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            </div>
            {/* Social Links */}
            <div className="pl-6 border-l border-gray-200 space-y-4 text-center">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Connect with me</h3>
              <div className="flex justify-center space-x-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded transition-colors"
                >
                  <Github className="text-gray-700" size={20} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded transition-colors"
                >
                  <Linkedin className="text-gray-700" size={20} />
                </a>
              </div>
            </div>

          </div>
      </div>
    </section>
  );
};

export default Contact;