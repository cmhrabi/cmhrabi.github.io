export const personalInfo = {
  name: "Calum Hrabi",
  title: "Full Stack Software Developer",
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
  programingLanguages: ["Go", "TypeScript/JavaScript", "Python", "Java"],
  frameworks: ["React", "React Native", "Express", "Flask", "Django", "SQLc", "TensorFlow", "Keras", "Pandas", "PySpark"],
  otherTools: ["MySQL", "PostgreSQL", "NoSQL", "AWS", "Cloud Formation", "GCP", "Firebase", "Docker"],
};

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Kablamo Canada Inc",
    location: "Toronto, ON",
    period: "June 2025 - Present",
    description: [
      "Led development of scalable web applications serving 10k+ users",
      "Architected microservices using Node.js and Docker",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization"
    ],
    technologies: ["Go", "PostgreSQL", "AWS", "React Native"]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "V2 Cloud Solutions",
    location: "Montreal, QC",
    period: "Sept 2024 - Jan 2025",
    description: [
      "Built responsive web applications using React and Express",
      "Designed and implemented RESTful APIs",
      "Collaborated with design team to create pixel-perfect UIs",
      "Implemented automated testing reducing bugs by 60%"
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"]
  },
  {
    id: 3,
    title: "Backend Developer Intern",
    company: "Kablamo Canada Inc",
    location: "Toronto, ON",
    period: "Jan 2024 - May 2024",
    description: [
      "Developed client websites using modern JavaScript frameworks",
      "Optimized sites for SEO and performance",
      "Worked closely with clients to gather requirements",
      "Maintained legacy codebases and performed updates"
    ],
    technologies: ["Go", "PostgreSQL", "AWS",]
  },
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "Kablamo Canada Inc",
    location: "Toronto, ON",
    period: "May 2023 - Aug 2023",
    description: [
      "Developed client websites using modern JavaScript frameworks",
      "Optimized sites for SEO and performance",
      "Worked closely with clients to gather requirements",
      "Maintained legacy codebases and performed updates"
    ],
    technologies: ["React-Native", "Typescript", "Jest",]
  },
  {
    id: 5,
    title: "Full Stack Developer Intern",
    company: "Vluence",
    location: "Remote",
    period: "Sept 2022 - Dec 2022",
    description: [
      "Developed client websites using modern JavaScript frameworks",
      "Optimized sites for SEO and performance",
      "Worked closely with clients to gather requirements",
      "Maintained legacy codebases and performed updates"
    ],
    technologies: ["React-Native", "Python", "Flask", "MySQL", "GCP"]
  }
];

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.",
    longDescription: "A comprehensive e-commerce solution built with modern technologies, featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and a powerful admin dashboard for inventory and sales analytics.",
    image: "https://images.pexels.com/photos/4968639/pexels-photo-4968639.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "A modern task management solution that enables teams to collaborate effectively with features like real-time updates, file attachments, comments, time tracking, and advanced filtering and search capabilities.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Supabase", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts and interactive charts.",
    longDescription: "An intuitive weather application that provides detailed weather information with beautiful visualizations, location-based forecasts, weather maps, and historical data analysis using multiple weather APIs.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
    longDescription: "A comprehensive analytics platform that aggregates social media data from multiple platforms, provides detailed insights through interactive charts and graphs, and generates automated reports for social media managers.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/social-analytics",
    featured: false
  }
];