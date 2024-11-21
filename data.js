// data.js
import showcase from "./src/assets/images/showcase.png"
import passGen from "./src/assets/images/passGen.png"
const data = {
  personalInfo: {
    name: "Shaikh Unais",
    email: "unaissk1577@gmail.com",
    phone: "8180013399",
    links: {
      github: "https://github.com/Unais01",
      leetcode: "https://leetcode.com/u/Unais_08",
      code360:
        "https://www.naukri.com/code360/profile/a998f6a6-dec9-4c67-9c0f-9bd75c528bae",
      linkedin: "https://www.linkedin.com/in/unais-shaikh-42b111231/",
      instagram: "https://www.instagram.com/shaikh_unais_08", // Placeholder link
      portfolio: "https://personal-portfolio-us.netlify.app/",
    },
  },
  projects: [
    {
      title: "Book Trading Mobile App",
      techStack: ["React Native", "Expo", "JavaScript", "Appwrite"],
      period: "Aug 2024 – Present",
      location: "KCE'S COEM",
      description: [
        "Developed a mobile application for trading books, enabling users to list, browse, and trade books.",
        "Implemented user authentication, real-time chat functionality, and secure data storage using Appwrite.",
        "Integrated backend APIs for book listing, search, and chat features.",
        "Utilized Gifted Chat for real-time communication between users.",
        "Managed real-time updates including message delivery, user status, and book listings.",
      ],
    },
    {
      title: "Resource Hub",
      techStack: ["HTML", "CSS", "JavaScript", "Express"],
      period: "Jan 2024 – Mar 2024",
      location: "KCE'S COEM",
      description: [
        "Developed a website for accessing university resources like previous year questions, notes, and books.",
        "Designed responsive, user-friendly web pages for easy navigation and resource access.",
        "Implemented backend functionality with Express for efficient resource management.",
      ],
    },
    {
      title: "File Conversion",
      techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
      period: "Aug 2023 – Nov 2023",
      location: "KCE'S COEM",
      description: [
        "Created a website for converting MS Office files to PDF.",
        "Integrated backend APIs for secure file uploads and conversion.",
        "Designed responsive web pages for seamless user interaction.",
      ],
    },
  ],
  education: [
    {
      institution: "KCE’S College of Engineering",
      degree: "Bachelor of Technology in Computer Engineering",
      graduationDate: "Expected May 2025",
      location: "Jalgaon, India",
      details: ["Dean’s List (Till 7th Semester)", "Cumulative GPA: 7.39 / 10"],
    },
    {
      institution: "H.N.M.C College of Science and Arts",
      degree: "HSC Science",
      graduationDate: "Mar 2021",
      location: "Jalgaon, India",
      details: ["Percentage: 83%"],
    },
    {
      institution: "Iqra Urdu High School",
      degree: "SSC",
      graduationDate: "Mar 2019",
      location: "Jalgaon, India",
      details: ["Percentage: 83.80%"],
    },
  ],
  skills: {
    programming: ["C/C++", "JavaScript", "Core Java"],
    technology: [
      "HTML + CSS",
      "Javascript",
      "React 18",
      "Appwrite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Git/Github",
    ],
    tools: [
      "Postman",
      "MS Word",
      "MS Excel",
      "Windows",
      "LaTeX",
      "Draw.io",
      "Artificial Intelligence",
    ],
  },
  coursework: [
    "Data Structures",
    "Analysis of Algorithms",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
    "OOP in Java",
    "Computer Programming in C",
    "Compiler Design",
    "Cloud Computing",
    "Artificial Intelligence",
  ],
  certifications: [
    {
      title: "Introduction to Enterprise-grade AI",
      provider: "IBM",
      credentialUrl:
        "https://www.credly.com/badges/3e73d760-3b5a-4c34-b1e2-2bcb4bd65d18/public_url",
    },
  ],
};

export const projects = [
  {
    title: "Booktrade Mobile App",
    description:
      "BookTrading application where user can trade books with integrated chat capabilities",
    imageUrl: passGen,
    link: "https://github.com/Unais01/BooksTrade",
    altText: "BookTrade",
  },
  {
    title: "Project Showcase",
    description:
      "Showcase of projects where all basic react project are placed at one place",
    imageUrl: showcase,
    link: "https://project-showcase-unais.netlify.app/",
    altText: "ProjectShowcase",
  },
  {
    title: "Random Password Generator",
    description:
      "Generate a randome password string in combination with special character/no choices",
    imageUrl: passGen,
    link: "https://password-generation-react.netlify.app/",
    altText: "A detailed description of Project Three image",
  },
];

export default data;
