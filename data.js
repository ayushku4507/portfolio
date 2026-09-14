/**
 * ============================================================================
 * Ayush Kumar - Portfolio Centralized Data Store
 * Easily customize your details, projects, skills, education, and links here.
 * ============================================================================
 */

const portfolioData = {
  // 1. Personal Brand Information
  personal: {
    name: "Ayush Kumar",
    role: "B.Tech CSE Student | AI/ML Enthusiast | Developer",
    statusText: "Learning • Building • Experimenting • Growing",
    bio: "I am a first-year B.Tech student passionate about technology, programming, artificial intelligence and building practical projects. I am continuously learning new technologies and looking for opportunities to turn ideas into meaningful solutions.",
    location: "India",
    email: "ayush.dev.contact@gmail.com", // update with your primary email
    phone: "+91 [Your Phone Number]",      // update or leave as placeholder
    github: "https://github.com/",        // update with your github profile
    linkedin: "https://linkedin.com/in/", // update with your linkedin profile
    resumeUrl: "#resume-modal"            // opens resume modal or direct link
  },

  // 2. About Me Data
  about: {
    story: "Hello! I am Ayush Kumar, currently in my first year pursuing a Bachelor of Technology in Computer Science and Engineering. My journey into tech began with a deep curiosity for how software transforms ideas into impactful, everyday reality.",
    background: "As a freshman, I am building strong fundamentals in computing, mathematics, and algorithmic problem solving, while proactively bridging the gap between classroom theory and real-world software development.",
    interests: "I am particularly fascinated by Artificial Intelligence, Machine Learning systems, modern web technologies, and computational logic. I enjoy breaking down complex problems and turning logic into clean, functional code.",
    careerAspirations: "My aspiration is to become a high-impact Software Development & AI Engineer, contributing to cutting-edge open-source software, innovative tech products, and intelligent autonomous systems.",
    strengths: [
      "Rapid self-directed learning & adaptability",
      "Disciplined problem solving and analytical thinking",
      "Effective team collaboration and open communication",
      "Relentless curiosity to experiment and build"
    ],
    motivation: "I believe that the best way to understand technology is to build with it. Every bug solved, algorithm mastered, and project shipped is a step toward creating meaningful solutions.",
    currentlyExploring: [
      { name: "Artificial Intelligence", icon: "brain" },
      { name: "Machine Learning", icon: "cpu" },
      { name: "Python", icon: "code" },
      { name: "Data Structures & Algorithms", icon: "git-branch" },
      { name: "Web Development", icon: "globe" },
      { name: "Generative AI", icon: "sparkles" }
    ]
  },

  // 3. Education Timeline (No fabricated marks; clearly marked placeholders)
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "[Your College / University Name]",
      branch: "Computer Science & Engineering",
      year: "2025 - 2029 (1st Year)",
      cgpa: "[Current SGPA/CGPA or In Progress]",
      subjects: [
        "Programming for Problem Solving (C/Python)",
        "Engineering Mathematics & Discrete Structures",
        "Digital Logic & Computer Systems",
        "Data Structures & Algorithms (Self-Paced)"
      ]
    },
    {
      degree: "Senior Secondary (Class XII) - Science",
      institution: "[Your School / Junior College Name]",
      branch: "Physics, Chemistry, Mathematics & Computer Science",
      year: "2023 - 2025",
      cgpa: "[Your Percentage / Grade Placeholder]",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "[Your High School Name]",
      branch: "General Science & Mathematics",
      year: "2022 - 2023",
      cgpa: "[Your Percentage / CGPA Placeholder]",
      subjects: ["Mathematics", "Science", "Social Science", "English", "Languages"]
    }
  ],

  // 4. Skills (Realistic levels: Currently Learning, Beginner, Intermediate, Advanced)
  skills: [
    // Programming Languages
    {
      name: "Python",
      category: "programming",
      level: "Intermediate",
      description: "Core programming, OOP, data processing scripts, automation, and foundational ML libraries.",
      icon: "python"
    },
    {
      name: "C / C++",
      category: "programming",
      level: "Intermediate",
      description: "Procedural programming, memory management, pointers, and foundational data structures implementation.",
      icon: "code"
    },
    {
      name: "JavaScript (ES6+)",
      category: "programming",
      level: "Beginner",
      description: "Modern asynchronous JavaScript, DOM manipulation, APIs, and front-end interaction logic.",
      icon: "javascript"
    },

    // AI & Machine Learning
    {
      name: "Machine Learning Fundamentals",
      category: "ai-ml",
      level: "Currently Learning",
      description: "Supervised and unsupervised learning, regression, classification, and model evaluation metrics.",
      icon: "brain"
    },
    {
      name: "NumPy & Pandas",
      category: "ai-ml",
      level: "Beginner",
      description: "Vectorized array computations, tabular data wrangling, cleaning, and exploratory data analysis.",
      icon: "database"
    },
    {
      name: "Generative AI & LLM APIs",
      category: "ai-ml",
      level: "Currently Learning",
      description: "Prompt engineering, integrating Gemini and OpenAI APIs, and building context-aware AI tools.",
      icon: "sparkles"
    },

    // Web Development
    {
      name: "HTML5 & CSS3",
      category: "web-dev",
      level: "Intermediate",
      description: "Semantic web architecture, Flexbox, CSS Grid, responsive design, and glassmorphism UI.",
      icon: "layout"
    },
    {
      name: "Frontend UI Architecture",
      category: "web-dev",
      level: "Beginner",
      description: "Component design, responsive UI frameworks, micro-animations, and accessible user experience.",
      icon: "monitor"
    },

    // Databases
    {
      name: "SQL & Relational Databases",
      category: "databases",
      level: "Currently Learning",
      description: "Database normalization, relational schema design, table queries, joins, and aggregations.",
      icon: "database"
    },

    // Developer Tools
    {
      name: "Git & GitHub",
      category: "dev-tools",
      level: "Intermediate",
      description: "Version control workflows, commit etiquette, branching, pull requests, and collaborative repository management.",
      icon: "git-branch"
    },
    {
      name: "VS Code & Development Setup",
      category: "dev-tools",
      level: "Advanced",
      description: "Configuring development environments, debuggers, extensions, linting, and shell integration.",
      icon: "terminal"
    },
    {
      name: "Command Line / Bash / PowerShell",
      category: "dev-tools",
      level: "Intermediate",
      description: "CLI navigation, file management, automation scripts, and package management workflows.",
      icon: "terminal"
    },

    // Soft Skills
    {
      name: "Algorithmic Problem Solving",
      category: "soft-skills",
      level: "Intermediate",
      description: "Deconstructing complex engineering problems into manageable sub-tasks with analytical rigor.",
      icon: "zap"
    },
    {
      name: "Collaboration & Teamwork",
      category: "soft-skills",
      level: "Advanced",
      description: "Cross-functional communication, active listening, and collective ideation in hackathons and college projects.",
      icon: "users"
    },
    {
      name: "Continuous Self-Learning",
      category: "soft-skills",
      level: "Advanced",
      description: "Rapidly comprehending documentation, technical papers, and self-paced technical courses.",
      icon: "book-open"
    }
  ],

  // 5. Projects (Rich interactive portfolio projects)
  projects: [
    {
      id: "project-1",
      name: "AI Study Mentor & Concept Summarizer",
      featured: true,
      category: "ai",
      image: "assets/project-ai-mentor.jpg",
      shortDescription: "An intelligent web application that parses complex textbook chapters and generates structured study roadmaps, key takeaways, and flashcards using AI APIs.",
      problemSolved: "First-year engineering students frequently struggle with dense academic textbooks and technical papers. This tool automates concept extraction and active recall quiz generation.",
      technologies: ["Python", "Gemini API", "JavaScript", "HTML5/CSS3", "Markdown"],
      myContribution: "Architected the backend prompt engineering pipeline, designed the interactive client-side dashboard, and implemented markdown parsing with responsive UI.",
      keyFeatures: [
        "Instant document & concept summarization with hierarchical bullets",
        "Automated active-recall quiz and flashcard generator",
        "Export study roadmaps to clean PDF or Markdown format",
        "Responsive dark-first dashboard with instant response streaming"
      ],
      liveDemo: "https://ayush-study-ai-demo.netlify.app", // sample demo link
      github: "https://github.com/ayushkumar/ai-study-mentor",
      details: {
        architecture: "Client-side frontend interfacing with asynchronous backend API worker with rate limiting and prompt safety formatting.",
        learnings: "Deepened practical understanding of LLM prompt optimization, structured JSON output parsing, and error-resilient client-side state handling."
      }
    },
    {
      id: "project-2",
      name: "Interactive Sorting & Search Algorithm Visualizer",
      featured: true,
      category: "algorithms",
      image: "assets/project-algo-visualizer.jpg",
      shortDescription: "A high-performance interactive visualizer demonstrating sorting and searching algorithms with real-time speed control and comparison counters.",
      problemSolved: "Abstract data structures and sorting algorithms are difficult to grasp from static code alone. Visualizing comparisons and swaps in real time accelerates intuition.",
      technologies: ["JavaScript (ES6)", "Canvas / CSS Animations", "Data Structures", "Algorithms"],
      myContribution: "Implemented core sorting algorithms (Merge Sort, Quick Sort, Bubble Sort, Binary Search) with step-by-step visual pause, step, and audio-frequency feedback.",
      keyFeatures: [
        "Dynamic array size and execution speed adjusters",
        "Live swap counter and comparison metrics tracker",
        "Detailed time and space complexity explanations on hover",
        "Step-by-step execution mode for educational study"
      ],
      liveDemo: "https://ayushkumar-algo-visualizer.vercel.app",
      github: "https://github.com/ayushkumar/algo-visualizer",
      details: {
        architecture: "Asynchronous generator function pipeline yielding execution frames to render smoothly at 60 FPS on HTML5 Canvas.",
        learnings: "Mastered JavaScript async/await generator mechanics, execution timing, and time-space complexity tradeoffs."
      }
    },
    {
      id: "project-3",
      name: "DevLog: Student Productivity & Habit Tracker",
      featured: false,
      category: "web",
      image: "assets/project-devlog.jpg",
      shortDescription: "A minimalist, offline-capable developer habit tracker and daily coding journal with streak visualization and local storage persistence.",
      problemSolved: "Helps engineering students maintain consistency across coding problem practice, course revisions, and project development without bloated subscriptions.",
      technologies: ["JavaScript", "HTML5", "CSS3 Glassmorphism", "LocalStorage API"],
      myContribution: "Created the entire user experience from scratch, designing sleek glassmorphic components, streak calculations, and data backup/export JSON utility.",
      keyFeatures: [
        "GitHub-style annual contribution streak heatmap",
        "Pomodoro timer with audio cues and session tagging",
        "Zero-dependency local persistence with JSON import/export",
        "Distraction-free focus mode with ambient dark theme"
      ],
      liveDemo: null, // Note: no live demo, will hide button automatically!
      github: "https://github.com/ayushkumar/devlog-tracker",
      details: {
        architecture: "Clean vanilla MVC pattern storing structured task state in browser LocalStorage with automatic schema validation.",
        learnings: "Reinforced semantic state management, persistent client storage, and accessible UI interactions."
      }
    },
    {
      id: "project-4",
      name: "CLI File Analyzer & Codebase Metrics Tool",
      featured: false,
      category: "tools",
      image: "assets/project-cli-metrics.jpg",
      shortDescription: "A lightweight command-line tool built in Python to inspect directories, compute total lines of code, analyze file type distributions, and detect TODOs.",
      problemSolved: "Quickly gives developers a comprehensive snapshot of code metrics, duplicate files, and pending task comments across a project directory.",
      technologies: ["Python", "Argparse", "Regex", "File I/O"],
      myContribution: "Developed the CLI argument parser, recursive directory crawler, syntax-aware comment scanners, and terminal table formatting.",
      keyFeatures: [
        "Recursively scans projects ignoring .git, node_modules, and virtualenvs",
        "Generates pretty-printed terminal summaries with colors",
        "Extracts pending TODO, FIXME, and HACK annotations with line numbers",
        "Export metrics report to CSV or Markdown format"
      ],
      liveDemo: null,
      github: "https://github.com/ayushkumar/cli-code-metrics",
      details: {
        architecture: "Modular Python package utilizing standard library modules for optimal portability without external pip dependencies.",
        learnings: "Gained hands-on experience in recursive algorithms, regex compilation, and robust file stream error handling."
      }
    }
  ],

  // 6. Achievements (Realistic placeholders ready to be customized)
  achievements: [
    {
      title: "Participant & Finalist - University Freshers Hackathon",
      organization: "[College Technical Council / Innovation Club]",
      date: "2025 / 2026",
      category: "Hackathons",
      description: "Collaborated in a 4-member freshman team to prototype an AI-driven campus accessibility and study-group matching tool within 24 hours.",
      proofUrl: "#proof-modal"
    },
    {
      title: "Top Performer - First Year Induction Coding Challenge",
      organization: "[Department of Computer Science & Engineering]",
      date: "2025",
      category: "Coding Competitions",
      description: "Demonstrated strong computational thinking and solved algorithmic problem sets focusing on basic math, logic, and arrays.",
      proofUrl: "#proof-modal"
    },
    {
      title: "Academic Excellence Recognition - High School",
      organization: "[Your Previous High School / Board Name]",
      date: "2025",
      category: "Academic Achievements",
      description: "Recognized for consistent academic diligence, disciplined problem solving, and science project presentations.",
      proofUrl: "#proof-modal"
    },
    {
      title: "Active Contributor - Open Source / Campus Tech Community",
      organization: "[Open Source / College Club]",
      date: "2025 - Present",
      category: "Leadership",
      description: "Actively assisting fellow first-year peers with Git setup, Linux command line essentials, and foundational programming logic.",
      proofUrl: "#proof-modal"
    }
  ],

  // 7. Certifications (With view certificate modal & verification links)
  certifications: [
    {
      name: "Python for Data Science, AI & Development",
      organization: "Coursera / IBM / DeepLearning.AI",
      date: "2025 / 2026",
      topics: "Python, OOP, Data Structures, Web Scraping, Working with REST APIs",
      credentialId: "CERT-PY-2026-XXXX",
      image: "assets/cert-python-ds.jpg",
      verifyUrl: "https://coursera.org/verify/example"
    },
    {
      name: "Introduction to Computer Science & Programming",
      organization: "edX / Harvard CS50 / FreeCodeCamp",
      date: "2025 / 2026",
      topics: "C, Python, Algorithms, Memory Allocation, Arrays, Big-O Notation",
      credentialId: "CERT-CS50-XXXX",
      verifyUrl: "https://cs50.harvard.edu/certificates/example"
    },
    {
      name: "Git & GitHub Version Control Masterclass",
      organization: "Udemy / GitHub Education",
      date: "2025",
      topics: "Branching, Merging, Rebase, Pull Requests, Resolving Conflicts, CI/CD basics",
      credentialId: "UC-GIT-2025-XXXX",
      verifyUrl: "https://udemy.com/certificate/example"
    }
  ],

  // 8. Learning Journey (Tailored for a 1st-Year B.Tech Student)
  journey: {
    stage1: {
      title: "Solid Foundations (What I Have Learned)",
      icon: "check-circle",
      items: [
        {
          name: "Structured Programming (C & Python)",
          desc: "Mastered variables, loops, conditional branching, functions, modular architecture, and file I/O."
        },
        {
          name: "Git & Collaborative Workflow",
          desc: "Command-line version control, multi-branching pipelines, repository hygiene, and pull request reviews."
        },
        {
          name: "Web Fundamentals (HTML5, Modern CSS, ES6)",
          desc: "Responsive layout architecture, glassmorphism UI, DOM manipulation, and asynchronous JavaScript."
        },
        {
          name: "Computational Thinking & Basic Math",
          desc: "Discrete mathematics, boolean logic, matrix operations, and algorithm trace tables."
        }
      ]
    },
    stage2: {
      title: "Currently Learning (Active Focus)",
      icon: "compass",
      highlight: true,
      items: [
        {
          name: "Data Structures & Algorithms in C++/Python",
          desc: "Actively mastering Linked Lists, Stacks, Queues, Trees, Recursion, and time/space complexity analysis."
        },
        {
          name: "Machine Learning & Mathematical Foundations",
          desc: "Linear algebra, multivariable calculus, probability, and foundational supervised learning algorithms."
        },
        {
          name: "Applied Generative AI & Tool Integration",
          desc: "Prompt engineering frameworks, embedding models, vector search, and Gemini API integration."
        },
        {
          name: "Competitive Programming Practice",
          desc: "Solving daily challenges on LeetCode and CodeChef to hone edge-case handling and speed."
        }
      ]
    },
    stage3: {
      title: "Next Milestones (What I Plan To Learn)",
      icon: "arrow-up-right",
      items: [
        {
          name: "Advanced DSA (Graphs, Dynamic Programming)",
          desc: "Graph traversal (BFS/DFS), shortest path algorithms, and dynamic programming memoization."
        },
        {
          name: "Deep Learning & Neural Networks (PyTorch)",
          desc: "Building custom neural network architectures, CNNs for computer vision, and Transformer mechanics."
        },
        {
          name: "Full-Stack Web Architectures & REST APIs",
          desc: "Developing production-grade backends with Node.js/FastAPI, database migrations, and authentication."
        },
        {
          name: "System Design Fundamentals & Cloud Deployment",
          desc: "Microservices architecture, Docker containerization, and cloud deployment pipelines (AWS/GCP)."
        }
      ]
    }
  },

  // 9. Experience & Opportunities
  experience: {
    statusNotice: "Currently building skills and projects while actively seeking internship, hackathon and collaboration opportunities.",
    entries: [
      // When you secure an internship, replace this template with your real organization!
      {
        role: "Open Source Contributor & Tech Explorer",
        organization: "Student Community Projects / Hackathons",
        duration: "2025 - Present",
        responsibilities: [
          "Building open-source tools and educational repositories for undergraduate peers.",
          "Participating in college coding hackathons, ideating solutions, and writing clean documentation.",
          "Actively testing developer tools and contributing documentation fixes to beginner-friendly repositories."
        ],
        achievements: "Built and published 4+ working open-source projects; active participant in technical community discussions.",
        technologies: ["Python", "JavaScript", "Git", "Markdown", "REST APIs"]
      }
    ]
  },

  // 10. Clubs & Extracurricular Activities
  activities: [
    {
      role: "Active Technical Member",
      organization: "College Coding & Developers Club",
      duration: "2025 - Present",
      description: "Participating in weekly peer programming sessions, algorithm walkthroughs, and hackathon brainstorming.",
      contribution: "Helped organize beginner Git workshops and shared notes on problem-solving approaches."
    },
    {
      role: "Student Member",
      organization: "AI / Robotics Student Chapter",
      duration: "2025 - Present",
      description: "Engaging in seminars and hands-on lab sessions on machine learning basics, computer vision, and hardware-software integration.",
      contribution: "Collaborated on team discussions analyzing recent advancements in multimodal AI models."
    },
    {
      role: "Event Volunteer",
      organization: "Annual College Technical & Cultural Fest",
      duration: "2025 / 2026",
      description: "Assisted the organizing committee in event coordination, participant registrations, and technical logistics.",
      contribution: "Managed on-ground coordination for coding and gaming competition tracks smoothly."
    }
  ],

  // 11. Coding & Online Profiles
  profiles: [
    {
      platform: "GitHub",
      username: "@ayushkumar",
      description: "Open source repositories, personal projects, and code commits.",
      url: "https://github.com/", // Add your username
      badge: "Projects & Code",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      username: "Ayush Kumar",
      description: "Professional networking, hackathon updates, and career journey.",
      url: "https://linkedin.com/in/", // Add your profile slug
      badge: "Networking",
      icon: "linkedin"
    },
    {
      platform: "LeetCode",
      username: "ayush_codes",
      description: "Algorithmic problem solving and data structure challenges.",
      url: "https://leetcode.com/", // Add your handle
      badge: "DSA Practice",
      icon: "code"
    },
    {
      platform: "CodeChef",
      username: "ayush_dev",
      description: "Competitive programming contests and rated challenges.",
      url: "https://www.codechef.com/", // Add your handle
      badge: "Contests",
      icon: "terminal"
    },
    {
      platform: "HackerRank",
      username: "ayush_k",
      description: "Domain skill badges in Python, Problem Solving, and C++.",
      url: "https://www.hackerrank.com/", // Add your handle
      badge: "Certifications",
      icon: "award"
    },
    {
      platform: "Kaggle",
      username: "ayushkumar_ml",
      description: "Data science notebooks, ML datasets, and predictive modeling.",
      url: "https://www.kaggle.com/", // Add your handle
      badge: "Machine Learning",
      icon: "database"
    }
  ]
};

// Export to window object for zero-dependency browser access
window.portfolioData = portfolioData;
