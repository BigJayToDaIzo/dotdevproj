// Resume data for josephmyers.dev

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github?: string;
  website?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  minor?: string;
  startYear: number;
  endYear: number;
}

export interface SkillCategory {
  level: string;
  skills: string[];
}

export interface ResumeData {
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  tools: string[];
  misc: string[];
}

export const resume: ResumeData = {
  contact: {
    name: "Joseph Myers",
    title: "Software Developer",
    email: "webinquiries@josephmyers.dev",
    linkedin: "https://www.linkedin.com/in/josephlmyers",
    github: "https://github.com/BigJayToDaIzo",
    website: "https://josephmyers.dev",
  },

  experience: [
    {
      company: "Aria Cosmetic Surgery",
      role: "CTO",
      startDate: "Mar 2025",
      endDate: "Present",
      bullets: [
        "Manage small team of technology professionals including a web developer and a network administrator",
        "Deployed a 30 user Windows Server with Active Directory",
        "Self hosting web server to migrate web presence away from wordpress and godaddy to on site hosting and built with modern technologies",
        "Deployed Vaultwarden password manager for secure credential management",
        "Configured and maintain 80TB NAS for data storage",
        "Oversee all infrastructure - if it is plugged into the wall or wifi, it is under my watchful care",
      ],
    },
    {
      company: "Independent Consultant",
      role: "Software Developer",
      startDate: "Sept 2022",
      endDate: "Mar 2025",
      bullets: [
        "Wrote small scheduling app as a contractor for Aria using Angular and C#",
        "Wrote automation scripts for businesses to streamline menial tasks",
        "Provided 3D printing design and prototyping services",
        "Learned Golang, Rust, and Gleam. Various toy projects available on <a href='https://github.com/BigJayToDaIzo' target='_blank'>my GitHub</a>",
      ],
    },
    {
      company: "Boeing",
      role: "Programmer Analyst",
      startDate: "2017",
      endDate: "Sept 2022",
      bullets: [
        "Wrote Blue/Green Deploy CI/CD Pipeline for Pivotal Cloud Foundry in Python",
        "Built SPAs with .NET, ASP, Java, Angular and React",
        "Parsed Historical User Data from Various API Endpoints Using Python",
        "Modernized Flash/ColdFusion apps by migrating them into Pivotal Cloud Foundry using .NET/Entity Framework/Angular 11",
        "Collaborated with teams on automation of low level tasks",
        "Built HR Collective Bargaining and Discipline tracking application in .NET/Angular and deployed in a CI/CD pipeline in ADO",
      ],
    },
    {
      company: "Astronomical Society of the Pacific",
      role: "Intern",
      startDate: "Oct 2017",
      endDate: "Dec 2018",
      bullets: [
        "Wrote Astrometry plugins for ImageJ Graphical Suite in Java",
        "Collaborated with PhD Astrophysicists including Dr. Pamela Gay for advanced mathematics and astronomy knowledge transfer",
        "Refactored WebApp from PHP to Laravel",
        "Worked Project Outreach via monthly booths at St. Louis Science Center",
        "Attended conferences in Washington D.C. to present work to NASA Scientists and Engineers",
      ],
    },
    {
      company: "Various Restaurants and Bars",
      role: "Bartender",
      startDate: "Jan 2003",
      endDate: "Oct 2017",
      bullets: [],
    },
  ],

  education: [
    {
      institution: "Southern Illinois University Edwardsville",
      degree: "Bachelor of Science",
      field: "Computer Science",
      minor: "Mathematics",
      startYear: 2011,
      endYear: 2017,
    },
  ],

  skills: [
    {
      level: "500+ Hours",
      skills: ["C#", ".NET", "Angular", "React"],
    },
    {
      level: "300 Hours",
      skills: ["Java", "Python", "C/C++"],
    },
    {
      level: "200 Hours",
      skills: ["Gleam", "Lustre", "MVC", "PHP", "JavaScript", "TypeScript"],
    },
    {
      level: "100 Hours",
      skills: ["Rust", "Go", "SQL Server", "MySQL", "HTML5", "CSS/SASS"],
    },
  ],

  tools: [
    "Helix",
    "Zellij",
    "Git",
    "Linux",
  ],

  misc: [
    "Agile methodology",
    "Strong documentation skills",
    "Linux",
    "ChromeOS",
    "Google Suite",
  ],
};

// Site navigation configuration
export interface NavItem {
  label: string;
  command: string;
  path: string;
  prompt: string;
}

export const navigation: NavItem[] = [
  { label: "home", command: "cd ~", path: "/", prompt: "home" },
  { label: "about", command: "cat about.md", path: "/about", prompt: "about" },
  { label: "blog", command: "ls blog/", path: "/blog", prompt: "blog" },
  { label: "projects", command: "tree projects/", path: "/projects", prompt: "projects" },
  { label: "hire", command: "cat hire.md", path: "/hire", prompt: "hire" },
];

// ASCII art for different pages
export const asciiArt = {
  home: `    _                      _
   (_) ___  ___  ___ _ __ | |__    _ __ ___  _   _  ___ _ __ ___
   | |/ _ \\/ __|/ _ \\ '_ \\| '_ \\  | '_ \` _ \\| | | |/ _ \\ '__/ __|
   | | (_) \\__ \\  __/ |_) | | | |_| | | | | | |_| |  __/ |  \\__ \\
  _/ |\\___/|___/\\___| .__/|_| |_(_)_| |_| |_|\\__, |\\___|_|  |___/
 |__/               |_|                      |___/`,

  about: `        _                 _
   __ _| |__   ___  _   _| |_   _ __ ___   ___
  / _\` | '_ \\ / _ \\| | | | __| | '_ \` _ \\ / _ \\
 | (_| | |_) | (_) | |_| | |_  | | | | | |  __/
  \\__,_|_.__/ \\___/ \\__,_|\\__| |_| |_| |_|\\___|`,

  blog: `  _     _
 | |__ | | ___   __ _
 | '_ \\| |/ _ \\ / _\` |
 | |_) | | (_) | (_| |
 |_.__/|_|\\___/ \\__, |
                |___/`,

  projects: `                  _           _
  _ __  _ __ ___ (_) ___  ___| |_ ___
 | '_ \\| '__/ _ \\| |/ _ \\/ __| __/ __|
 | |_) | | | (_) | |  __/ (__| |_\\__ \\
 | .__/|_|  \\___// |\\___|\\___|\\__|___/
 |_|           |__/`,

  hire: `  _     _
 | |__ (_)_ __ ___   _ __ ___   ___
 | '_ \\| | '__/ _ \\ | '_ \` _ \\ / _ \\
 | | | | | | |  __/ | | | | | |  __/
 |_| |_|_|_|  \\___| |_| |_| |_|\\___|`,
};
