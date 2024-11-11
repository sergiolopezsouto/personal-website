import { Icons } from "@/components/icons";

export const DATA = {
  name: "Sergio López",
  initials: "SL",
  location: "Madrid, Spain",
  url: "https://www.sergio.lopez.souto.com",
  avatarUrl: "/personal/me.jpg",
  description: "Software Engineer.",

  navbar: [{ href: "/", icon: Icons.home, label: "Home" }],

  contact: {
    Gmail: {
      name: "Gmail",
      url: "mailto:sergio.lopez.souto@gmail.com",
      icon: Icons.email,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sergiolopezsouto",
      icon: Icons.linkedin,
      navbar: true,
    },
    GitHub: {
      name: "GitHub",
      url: "https://www.github.com/sergiolopezso",
      icon: Icons.github,
      navbar: true,
    },
  },

  about:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam turpis luctus, semper habitasse tristique venenatis elementum lectus mi tempor magnis. Aliquam vitae suscipit etiam porttitor elementum nibh praesent commodo lacus dictumst feugiat, massa proin conubia litora suspendisse iaculis at eget duis.",

  work: [
    {
      company: "GMV",
      logoUrl: "/companies/gmv.png",
      url: "https://gmv.com",
      location: "Madrid, Spain",
      title: "Software Engineer",
      start: "",
      end: "",
      description: "",
    },
    {
      company: "Denodo",
      logoUrl: "/companies/denodo.png",
      url: "https://denodo.com/",
      location: "A Coruna, Spain",
      title: "Software Engineer",
      start: "",
      end: "",
      description: "",
    },
    {
      company: "Ernst & Young",
      logoUrl: "/companies/ey.png",
      url: "https://ey.com",
      location: "A Corunña, Spain",
      title: "IT Business Consultant",
      start: "",
      end: "",
      description: "",
    },
  ],

  education: [
    {
      school: "University of A Coruna",
      logoUrl: "/education/udc.png",
      url: "https://www.udc.es/en/",
      degree: "BSc Software Engineering",
      start: "2016",
      end: "2021",
    },
    {
      school: "University of West Bohemia",
      logoUrl: "/education/uwb.png",
      url: "https://www.zcu.cz/en/",
      degree: "BSc Software Engineering - Exchange Program",
      start: "2019",
      end: "2020",
    },
  ],

  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Java",
    "Spring Framework",
    "Linux",
    "Docker",
    "Kubernetes",
    "AWS",
    "Salesforce",
  ],

  projects: [
    {
      image: "",
      title: "",
      url: "",
      description: "",
      technologies: [],
      links: [],
      active: true,
    },
  ],
} as const;
