export const personalInfo = {
  name: "Calum Hrabi",
  title: "Software Developer",
  email: "calum.hrabi@gmail.com",
  location: "Toronto, ON, Canada",
  avatar: "/avatar.jpg",
  summary: "Passionate full stack developer with expertise in modern web technologies, creating scalable applications and user-centric solutions.",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/cmhrabi",
    linkedin: "https://linkedin.com/in/calum-hrabi",
  }
};

export const skills = {
  programingLanguages: ["Go", "TypeScript/JavaScript", "Python"],
  frameworks: ["React", "React Native", "Express", "Flask", "Django", "SQLc", "TensorFlow", "Pandas"],
  otherTools: ["Terraform", "AWS", "Cloud Formation", "GCP", "Firebase", "SQL", "Docker"],
};

export const experience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Kablamo Canada Inc",
    location: "Toronto, ON",
    period: "June 2025 - Present",
    description: [
      "Developed backend microservices using Go and AWS to manage requests for a Fin-tech Mobile Application",
      "Improved domain model for the product fulfillment service to support new features and improve scalability"
    ],
    technologies: ["Go", "AWS", "React Native", "Terraform"]
  },
  {
    id: 2,
    title: "Full-Stack Software Developer Co-op",
    company: "V2 Cloud Solutions",
    location: "Montreal, QC",
    period: "Sept 2024 - Jan 2025",
    description: [
      "Designed and implemented APIs using Python and Django for SaaS cloud services dashboard",
      "Built React frontend features aligned with Figma designs for seamless user experience"
    ],
    technologies: ["Python", "Django", "React", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Back-End Software Developer Co-op",
    company: "Kablamo Canada Inc",
    location: "Toronto, ON",
    period: "Jan 2024 - May 2024",
    description: [
      "Developed serverless backend using Golang and AWS Lambda for Fin-tech Mobile Application",
      "Implemented AWS Kinesis Data Stream for real-time Lambda API logs to Datadog",
      "Created CLI tool using Go and Cobra for unit test coverage reports across 80+ repositories"
    ],
    technologies: ["Go", "AWS", "Datadog", "Cobra"]
  },
  {
    id: 4,
    title: "Front-End Software Developer Co-op",
    company: "Kablamo Canada Inc",
    location: "Toronto, ON",
    period: "May 2023 - Aug 2023",
    description: [
      "Developed frontend for Fin-tech Mobile Application using React-Native and TypeScript",
      "Collaborated with teams to overhaul UI and implement new components from Figma designs"
    ],
    technologies: ["React-Native", "TypeScript", "Figma"]
  },
  {
    id: 5,
    title: "Full-Stack Developer Co-op",
    company: "Vluence",
    location: "Remote",
    period: "Sept 2022 - May 2023",
    description: [
      "Developed React-Native components using TypeScript for social media mobile application",
      "Created REST APIs using Express for CRUD operations",
      "Implemented ETL pipeline using Python, Pandas, BS4, and PostgreSQL for SEC filing data"
    ],
    technologies: ["React-Native", "TypeScript", "Express", "Python", "Pandas", "BS4", "PostgreSQL"]
  },
  {
    id: 6,
    title: "Software Developer Co-op",
    company: "Environment and Climate Change Canada",
    location: "Gatineau, QC",
    period: "Jan 2022 - April 2022",
    description: [
      "Developed REST APIs using Python, Flask and Jinja2 for CITES Canada permit system"
    ],
    technologies: ["Python", "Flask", "Jinja2"]
  }
];

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  modalImage?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
};

export const projects = [
  {
    id: 1,
    title: "Compass",
    description: "A tool that helps users analyze the LCCA for different technologies and scenarios.",
    longDescription: "A tool that helps users analyze the levelized cost of carbon abatement for different technologies and scenarios.",
    image: "/compass2.png",
    modalImage: "/compass.png",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Python", "Flask"],
    liveUrl: "https://compasslcca.netlify.app",
    githubUrl: "https://github.com/cmhrabi/abbcari-LCCA-ammonia"
  },
  {
    id: 2,
    title: "SoundBite",
    description: "AI Meeting Transcription and Summarization",
    longDescription: "A comprehensive transcription and summarization platform that created a full-stack application using GCP Speech-to-Text and ChatGPT-3 APIs to generate customized summaries of audio snippets, improving accessibility to spoken content. The system implements secure user authentication with Firebase and manages CRUD operations with Express and Node.js to enable smooth data handling and user account management.",
    image: "/soundbite.png",
    technologies: ["GCP Speech-to-Text", "ChatGPT-3 API", "Firebase", "Express", "Node.js"],
    githubUrl: "https://github.com/cmhrabi/soundbite-ai"
  },
  {
    id: 3,
    title: "Machine Learning Crypto Trader",
    description: "Recurrent neural network cryptocurrency trading system that predicts Ethereum prices",
    longDescription: "A sophisticated machine learning system that predicted the hourly price of Ethereum with <0.1 Mean Average Percent Error using a Bi-directional LSTM neural network with TensorFlow/Keras, based on historical time-series data. The system implements an ETL pipeline to process real-time and batch data, using Kafka, PySpark, Pandas, Keras, and MongoDB to optimize the precision of the model.",
    image: "/crypto.png",
    technologies: ["TensorFlow", "Keras", "Bi-directional LSTM", "Kafka", "PySpark", "Pandas", "MongoDB"],
    githubUrl: "https://github.com/ammar-s847/ACA-Trading-Bot"
  },
];