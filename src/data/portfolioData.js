/**
 * PORTFOLIO CONFIGURATION DATA - JAYVEER SINGH
 * 
 * Instructions for Jayveer:
 * You can edit any information in this file (email, phone, LinkedIn, LeetCode,
 * resume path, project links, or skill badges). The portfolio will automatically
 * update throughout the application.
 */

export const personalInfo = {
  name: "Jayveer",
  initials: "JS",
  role: "Java Full-Stack Developer",
  status: "Open to opportunities",
  availabilityText: "Available for entry-level Software Developer, Java Developer, and Java Full-Stack Developer roles.",
  tagline: "Building robust, scalable web applications with Java, Spring Boot, and modern web technologies.",
  summary:
  "I am a BCA graduate and aspiring Software Developer specializing in Java Backend and Full-Stack Development. I have experience building practical web applications using Java, Spring Boot, SQL, REST APIs, Hibernate, and modern frontend technologies. I enjoy solving programming challenges, designing efficient backend solutions, developing user-friendly applications, and continuously improving my skills in software engineering and application development.",

  // Location (easily editable)
  location: "New Delhi / Delhi NCR, India",
  contactSubtitle: "I'm open to software developer roles where I can work with Java, Spring Boot, MySQL and modern web technologies. Email me and I'll get back to you.",
  
  // Contact & Social Links
  // NOTE: Replace placeholders with your actual details when ready
  email: "jayveer15sept@gmail.com", // [PLACEHOLDER] Update with your actual email
  phone: "+91 74539 72132 ",              // [PLACEHOLDER] Update with your phone number or keep optional
  github: "https://github.com/Jayveer-Singh0017",
  linkedin: "https://www.linkedin.com/in/jayveer-singh-13493a2a6/", // [PLACEHOLDER] Update with your LinkedIn URL
  leetcode: "https://leetcode.com/u/jayveersingh0017/",             // [CONFIGURABLE] LeetCode profile URL
  
  // Resume PDF URL or path (placed in /public/resume.pdf or external URL)
  resumeUrl: "/resume.pdf",
  resumeAvailable: true // Set to true when you place your real resume.pdf into the public/ folder
};

export const heroStats = [
  {
    value: "8.2",
    suffix: " CGPA",
    label: "BCA (RMPSU, 2024–2025)",
    description: "Academic excellence in Computer Applications"
  },
  {
    value: "300+",
    suffix: "",
    label: "LeetCode Solved",
    description: "Data Structures & Algorithmic problem-solving"
  },
  {
    value: "4",
    suffix: "+",
    label: "Core Full-Stack Projects",
    description: "Spring Boot, REST APIs, MySQL & modern UI"
  },
  {
    value: "Entry-Level",
    suffix: "",
    label: "Career Status",
    description: "Actively seeking Java Developer opportunities"
  }
];

export const aboutNarrative = {
  paragraphs: [
    "I am a BCA graduate from D.S. College, Aligarh (affiliated with Raja Mahendra Pratap Singh State University) and an aspiring Java Full-Stack Developer. My journey in software engineering is driven by a deep curiosity about how distributed systems, database architectures, and intuitive web interfaces connect together.",
    "My core technical foundation centers on Java, Spring Boot, Spring Data JPA, relational database design with MySQL, and building RESTful web services. I am equally comfortable with frontend technologies like HTML5, CSS3, JavaScript (ES6+), and React.",
    "Beyond writing clean, maintainable code, I have solved 250+ problems on LeetCode to strengthen my algorithmic thinking and efficiency. I am actively seeking an entry-level Java Developer, Java Backend Developer, or Java Full-Stack Developer role where I can contribute to production systems and continue growing alongside experienced engineers."
  ],
  corePillars: [
    {
      title: "Backend Engineering",
      desc: "Robust architecture with Spring Boot, REST APIs, JPA/Hibernate, and MySQL."
    },
    {
      title: "Algorithmic Rigor",
      desc: "300+ LeetCode problems solved with focus on optimal time & space complexity."
    },
    {
      title: "Modern Web Integration",
      desc: "Clean client-server integration with responsive UI and modern JavaScript."
    },
    {
      title: "Principled Learning",
      desc: "Commitment to clean code, proper documentation, and honest engineering practices."
    }
  ]
};

export const careerTimeline = [
  {
    id: "bca-degree",
    period: "2022 — 2025",
    yearBadge: "2024–2025 Graduating Batch",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "D.S. College, Aligarh",
    university: "Raja Mahendra Pratap Singh State University (RMPSU)",
    score: "CGPA 8.2 / 10",
    statusBadge: "Graduation: 2024–2025",
    type: "education",
    points: [
      "Completed comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, and Software Engineering.",
      "Achieved a cumulative grade point average of 8.2 / 10.",
      "Actively led peer coding discussions and built academic software projects demonstrating full-stack fundamentals."
    ]
  },
  {
    id: "accio-java-full-stack",
    period: "Aug 2025 — May 2026",
    yearBadge: "2025–2026",
    role: "Java Full Stack Developer",
    organization: "AccioJob",
    university: "Noida, Sector 2, Uttar Pradesh",
    score: "Course Completed",
    statusBadge: "Completed",
    type: "education",
    points: [
      "Completed a structured Java Full Stack Development program focused on Java programming, Object-Oriented Programming, Data Structures & Algorithms, and problem-solving.",
      "Developed practical skills in Spring Boot, Spring Data JPA, Hibernate, MySQL, SQL, and REST API development.",
      "Learned frontend development fundamentals using HTML, CSS, and JavaScript to build full-stack web applications.",
      "Completed DSA and Full Stack placement mock assessments as part of interview preparation."
    ]
  },
  {
    id: "fullstack-projects",
    period: "2024 — Present",
    yearBadge: "Hands-on Development",
    role: "Independent Full-Stack Project Development",
    organization: "Self-Directed Software Engineering",
    university: "Personal Repository & Open Source",
    score: "4 Applications",
    statusBadge: "Active Projects",
    type: "projects",
    points: [
      "Architected and implemented 4 applications: AI Resume Analyzer, Smart Research Assistant, and a database-backed Book Store Management System.",
      "Engineered Spring Boot backends utilizing Spring Data JPA, Hibernate ORM, and Spring WebClient for asynchronous external API communication.",
      "Integrated Gemini API to build intelligent features like ATS scoring, structured feedback, bilingual translation, and flashcard generation.",
      "Maintained version-controlled workflows with Git and GitHub following clear commit hygiene."
    ]
  },
  {
    id: "problem-solving",
    period: "2024 — Present",
    yearBadge: "Continuous Practice",
    role: "Algorithmic Problem Solving & Technical Prep",
    organization: "LeetCode & Competitive Platforms",
    university: "Self-Paced Interview Preparation",
    score: "300+ Solved · 200+ Days Badge",
    statusBadge: "Daily Practice",
    type: "learning",
    points: [
      "Consistently solved 300+ Data Structures & Algorithms problems focusing on Arrays, Strings, HashMaps, Two Pointers, Linked Lists, Trees, and Sorting.",
      "Earned the LeetCode 200+ Days Badge demonstrating discipline and persistence.",
      "Applied algorithmic patterns directly to backend business logic, optimizing database queries and data transformations."
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "D.S. College, Aligarh",
  affiliation: "Affiliated with Raja Mahendra Pratap Singh State University (RMPSU)",
  period: "2024–2025",
  cgpa: "8.2 / 10",
  highlights: [
    "Core focus: Object-Oriented Programming in Java, Data Structures, Relational Databases, Web Technologies",
    "Consistently maintained strong academic standing graduating with 8.2 CGPA",
    "Participated in collegiate technical events and skill development initiatives"
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    color: "#d97757",
    skills: [
      "Java",
      "C++",
      "JavaScript",
      "Python (Basics)",
      "SQL"
    ]
  },
  {
    category: "Backend & Frameworks",
    color: "#38bdf8",
    skills: [
      "Spring Boot",
      "Spring Core",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Spring Security & JWT (Basics)"
    ]
  },
  {
    category: "Database & Storage",
    color: "#818cf8",
    skills: [
      "MySQL",
      "PostgreSQL (Basics)",
      "SQL Queries",
      "Relational Schema Design",
      "JPA Entity Mapping"
    ]
  },
  {
    category: "Frontend Technologies",
    color: "#34d399",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Thymeleaf",
      "React (Basics)"
    ]
  },
  {
    category: "DSA & Software Testing",
    color: "#f59e0b",
    skills: [
      "Arrays & Strings",
      "Hashing",
      "Two Pointers",
      "Binary Search",
      "Linked Lists",
      "Trees",
      "SDLC",
      "STLC",
      "Manual Testing",
      "Test Cases",
      "Regression Testing",
      "Selenium (Basics)"
    ]
  },
  {
    category: "Tools, AI & Cloud",
    color: "#fb7185",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "Google Gemini",
      "Google AI Studio",
      "Google Antigravity",
      "ChatGPT",
      "GitHub Copilot",
      "Claude",
      "Gemini API",
      "JUnit",
      "Mockito",
      "Cloudflare",
      "Render",
      "Docker (Basics)"
    ]
  }
];

export const projectsData = [
  {
    id: "ai-resume-analyzer",
    tag: "AI & RECRUITMENT TOOL · FULL-STACK JAVA",
    title: "AI Resume Analyzer",
    subtitle: "Spring Boot + Gemini API + Spring WebClient + Responsive Frontend",
    description:
      "An AI-powered application that analyzes uploaded resumes and provides structured feedback to help candidates optimize their resumes for relevant job opportunities.",
    technologies: [
      "Java",
      "Spring Boot",
      "Gemini API",
      "Spring WebClient",
      "REST APIs",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    features: [
      "PDF resume upload and document content parsing.",
      "Intelligent resume analysis powered by Google's Gemini API via asynchronous Spring WebClient.",
      "ATS-oriented scoring and keyword matching against target job descriptions.",
      "Clear breakdown of resume strengths and specific weaknesses.",
      "Missing keyword identification with suggested industry skills and job roles.",
      "Interactive AI chat interface for direct resume improvement queries and tailored advice."
    ],
    notes:
      "Engineered with honest ATS approximation based on keyword density and semantic match, without claiming proprietary commercial ATS algorithm replication.",
    githubUrl: "https://github.com/Jayveer-Singh0017", // Configurable: Update with exact repo URL
    demoUrl: null, // Set to live URL when deployed
    status: "Repository Available",
    isFeatured: true
  },
  {
    id: "smart-research-assistant",
    tag: "RESEARCH & PRODUCTIVITY · SPRING WEBCLIENT",
    title: "Smart Research Assistant",
    subtitle: "Java + Spring Boot + Gemini API + Multilingual Translation",
    description:
      "A research assistant designed to help students, developers, and researchers process and digest dense technical texts, generate quick study aids, and translate explanations into Hindi.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring WebClient",
      "Gemini API",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    features: [
      "Automated technical content summarization with customizable brevity levels.",
      "Smart concept suggestions and step-by-step contextual explanations.",
      "Hindi translation support for bilingual conceptual accessibility.",
      "Flashcard generation for active recall and revision.",
      "References and source material presentation for verifiable learning."
    ],
    notes:
      "The Gemini integration uses Spring WebClient for lightweight, reactive HTTP communication without heavy external dependencies.",
    githubUrl: "https://github.com/Jayveer-Singh0017", // Configurable
    demoUrl: null,
    status: "Repository Available",
    isFeatured: true
  },
  {
    id: "book-store-management",
    tag: "ENTERPRISE CRUD APPLICATION · SPRING DATA JPA",
    title: "Book Store Management System",
    subtitle: "Spring Boot + Spring Data JPA + Hibernate + MySQL + Thymeleaf",
    description:
      "A complete database-backed web application for managing bookstore inventory, tracking catalog data, and performing transactional CRUD operations with a clean multi-tier architecture.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "Maven"
    ],
    features: [
      "Create, view, update, and delete book inventory records with validation.",
      "Catalog browsing with paginated listings and detailed view.",
      "Database persistence with relational mapping using MySQL and Hibernate ORM.",
      "Dynamic server-rendered UI utilizing Thymeleaf templates.",
      "Standard multi-tier architecture: Controller, Service, Repository, and Entity layers."
    ],
    notes:
      "Demonstrates solid command over Spring Boot enterprise fundamentals, relational data modeling, and MVC design patterns.",
    githubUrl: "https://github.com/Jayveer-Singh0017", // Configurable
    demoUrl: null,
    status: "Repository Available",
    isFeatured: true
  }
];

export const achievementsData = [
  {
    id: "accio-java-full-stack",
    badge: "Professional Development",
    title: "Java Full Stack Developer Course",
    description:
        "Successfully completed the Java Full Stack Development program at AccioJob, Noida, focusing on Java, Data Structures & Algorithms, Spring Boot, SQL, REST APIs, and frontend development.",
    metric: "Aug 2025 – May 2026",
    iconName: "GraduationCap"
  },
  {
    id: "nsdc-certificate",
    badge: "Certified Credential",
    title: "NSDC Domestic Data Entry Operator Certificate",
    description:
        "Government-recognized certification from the National Skill Development Corporation verifying digital data handling and professional computing skills.",
    metric: "Certified",
    iconName: "CheckCircle"
  },
  {
    id: "leetcode-250",
    badge: "Algorithmic Problem Solving",
    title: "Solved 300+ LeetCode Problems",
    description:
      "Strong foundation in Data Structures and Algorithms with a focus on problem breakdown, time/space complexity analysis, and clean Java implementations.",
    metric: "300+ Solved",
    iconName: "Code2"
  },
  {
    id: "employability-program",
    badge: "1st Place Distinction",
    title: "1st Place — 7-Day Employability Skills Development Program",
    description:
      "Ranked first in the intensive employability program, demonstrating technical aptitude, communication skills, and collaborative team problem solving.",
    metric: "1st Place",
    iconName: "Award"
  },
];

export const assistantSuggestions = [
  {
    id: "skills",
    prompt: "What is Jayveer's technical stack?",
    sectionId: "skills",
    answer:
      "Jayveer specializes in Java Full-Stack Development: Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, REST APIs, HTML/CSS/JavaScript, and React."
  },
  {
    id: "projects",
    prompt: "Show me his Spring Boot projects",
    sectionId: "projects",
    answer:
      "Jayveer has built 4 key projects: AI Resume Analyzer (Spring Boot + Gemini API), Smart Research Assistant (Spring WebClient), and Book Store Management (Spring Data JPA + MySQL)."
  },
  {
    id: "education",
    prompt: "Tell me about his BCA degree and LeetCode stats",
    sectionId: "experience",
    answer:
      "Jayveer holds a BCA from D.S. College, Aligarh (RMPSU, 2024–2025) with an 8.2 CGPA and has solved 250+ LeetCode problems (50 Days Badge)."
  },
  {
    id: "contact",
    prompt: "How can I contact Jayveer for an opportunity?",
    sectionId: "contact",
    answer:
      "You can reach Jayveer via the contact section below, or connect via GitHub and LinkedIn. He is actively seeking entry-level Java Developer roles."
  }
];
