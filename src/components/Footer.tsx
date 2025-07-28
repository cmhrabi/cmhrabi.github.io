import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;