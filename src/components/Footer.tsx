import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-4 pb-2 text-right">
      <p className="text-gray-400 text-[10px]">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
    </footer>
  );
};

export default Footer;
