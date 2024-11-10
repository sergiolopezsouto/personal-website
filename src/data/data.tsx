import { Icons } from "@/components/icons";

export const DATA = {
  name: "Sergio López",
  initials: "SL",
  location: "Madrid, Spain",
  url: "https://www.sergio.lopez.souto.com",
  avatarUrl: "/personal/me.jpg",
  description: "Software Engineer.",

  about:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam turpis luctus, semper habitasse tristique venenatis elementum lectus mi tempor magnis. Aliquam vitae suscipit etiam porttitor elementum nibh praesent commodo lacus dictumst feugiat, massa proin conubia litora suspendisse iaculis at eget duis.",

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

  work: [
    {
      company: "GMV",
      href: "https://gmv.com",
      location: "Madrid, Spain",
      title: "Software Engineer",
      logoUrl: "/companies/gmv.png",
      start: "",
      end: "",
      description: "",
    },
    {
      company: "Denodo",
      href: "https://denodo.com/",
      location: "A Coruna, Spain",
      title: "Software Engineer",
      logoUrl: "/companies/denodo.png",
      start: "",
      end: "",
      description: "",
    },
    {
      company: "Ernst & Young",
      href: "https://ey.com",
      location: "A Corunña, Spain",
      title: "IT Business Consultant",
      logoUrl: "/companies/ey.png",
      start: "",
      end: "",
      description: "",
    },
  ],

  education: [
    {
      school: "University of A Coruna",
      href: "https://www.udc.es/en/",
      degree: "BSc Software Engineering",
      logoUrl: "/education/udc.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "University of West Bohemia",
      href: "https://www.zcu.cz/en/",
      degree: "BSc Software Engineering - Exchange Program",
      logoUrl: "/education/uwb.png",
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
