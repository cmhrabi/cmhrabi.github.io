import React from 'react';
import { personalInfo } from '../data/portfolio';

const linkClass =
  'text-gray-600 hover:text-gray-900 underline-offset-4 hover:underline text-sm font-medium transition-colors';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8">
          <a href={`mailto:${personalInfo.email}`} className={linkClass}>
            email
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            github
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            linkedin
          </a>
          <a href={personalInfo.resumeUrl} download className={linkClass}>
            resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
