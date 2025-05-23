import { Icons } from "@/components/icons";

export const DATA = {
  name: "Sergio López",
  initials: "SL",
  location: "Madrid, Spain",
  url: "https://www.sergiolopezsouto.com",
  avatarUrl: "/personal/me.jpg",
  description:
    "Software Engineer with a passion for cloud solutions and applied AI to drive innovation and scalability.",
  keywords: [
    "Software Engineer",
    "Personal Website",
    "Portfolio",
    "Technology",
  ] as string[],

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
    "SQL",
    "NoSQL",
    "Git",
    "Linux",
    "Docker",
    "Kubernetes",
    "AWS",
    "Salesforce",
    "Veeva",
  ],

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
      description:
        "Software development in satellite communication projects, using a JavaScript environment with Node.js and Express.js oriented to microservices with Docker and Kubernetes.",
    },
    {
      company: "Denodo",
      logoUrl: "/companies/denodo.png",
      url: "https://denodo.com/",
      location: "A Coruna, Spain",
      title: "Software Engineer",
      start: "",
      end: "",
      description:
        "Developed UI components to improve the user experience using React and CSS, connecting these elements to the company's Java and Spring-powered backend.",
    },
    {
      company: "Ernst & Young",
      logoUrl: "/companies/ey.png",
      url: "https://ey.com",
      location: "A Corunña, Spain",
      title: "IT Business Consultant",
      start: "",
      end: "",
      description:
        "Provided consulting services assisting in decision-making and project presentations by creating and analyzing comprehensive reports, using tools and technologies such as Python, SQL, Excel and Power BI to streamline data processing and visualize insights, enhancing the effectiveness of strategic planning and decision-making.",
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

  projects: [
    {
      title: "Apartamentos Costa",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
      technologies: ["Next.js", "TailwindCSS", "Aceternity UI"],
      links: [
        {
          label: "Website",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.globe className="size-3" />,
        },
        {
          label: "Source",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // active: true,
    },

    {
      title: "LoFi Music",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
      technologies: ["Next.js", "TailwindCSS", "Shadcn UI", "Aceternity UI"],
      links: [
        {
          label: "Website",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.globe className="size-3" />,
        },
        {
          label: "Source",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // active: true,
    },

    {
      title: "AI Summarizr",
      description:
        "First approach playing and testing the OpenAI API with this mini SaaS.",
      image: "/projects/summarizerAI.png",
      video: "",
      technologies: ["Next.js", "TailwindCSS", "OpenAI API"],
      links: [
        {
          label: "Website",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.globe className="size-3" />,
        },
        {
          label: "Source",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // active: true,
    },

    {
      title: "LetsGonna",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/projects/letsgonna.png",
      video: "",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Google Maps API",
        "Stripe API",
      ],
      links: [
        {
          label: "Website",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.globe className="size-3" />,
        },
        {
          label: "Backend",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.github className="size-3" />,
        },
        {
          label: "Frontend",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // active: true,
    },

    {
      title: "Flappy Bird 2.0",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/projects/flappybird.png",
      video: "",
      technologies: ["HTML", "CSS", "Javascript", "Canvas"],
      links: [
        {
          label: "Website",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.globe className="size-3" />,
        },
        {
          label: "Source",
          url: "https://github.com/sergiolopezsouto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // active: true,
    },
  ],
} as const;
