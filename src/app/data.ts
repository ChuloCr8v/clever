export const skills = [
  {
    skill: "HTML",
    icon: "",
    type: "language",
  },
  {
    skill: "CSS",
    icon: "",
    type: "style",
  },
  {
    skill: "Sass",
    icon: "",
    type: "style",
  },
  {
    skill: "TailwindCss",
    icon: "",
    type: "style",
  },
  {
    skill: "Boostrap",
    icon: "",
    type: "style",
  },
  {
    skill: "AntD",
    icon: "",
    type: "style",
  },
  {
    skill: "ChakraUI",
    icon: "",
    type: "style",
  },
  {
    skill: "JavaScript",
    icon: "",
    type: "language",
  },
  {
    skill: "Git/Github",
    icon: "",
    type: "versionControl",
  },
  {
    skill: "TypeScript",
    icon: "",
    type: "language",
  },
  {
    skill: "React.js",
    icon: "",
    type: "framework",
  },
  {
    skill: "Next.js",
    icon: "",
    type: "framework",
  },
  {
    skill: "Express.js",
    icon: "",
    type: "framework",
  },
  {
    skill: "MongoDb",
    icon: "",
    type: "database",
  },
  {
    skill: "Firebase",
    icon: "",
    type: "database",
  },
  {
    skill: "Node.js",
    icon: "",
    type: "language",
  },
  {
    skill: "Redux",
    icon: "",
    type: "others",
  },
  {
    skill: "Framer",
    icon: "",
    type: "others",
  },
  {
    skill: "Photoshop",
    icon: "",
    type: "design",
  },
  {
    skill: "Canva",
    icon: "",
    type: "design",
  },
  {
    skill: "Figma",
    icon: "",
    type: "design",
  },
  {
    skill: "Illustrator",
    icon: "",
    type: "design",
  },
];

export const stacks = [
  {
    stack: "HTML",
  },
  {
    stack: "CSS",
  },
  // {
  //   stack: "TailwindCss",
  // },
  {
    stack: "JavaScript",
  },
  {
    stack: "TypeScript",
  },
  {
    stack: "React.js",
  },
  {
    stack: "Next.js",
  },
  {
    stack: "Nest.js",
  },
  // {
  //   stack: "Node.js",
  // },
  // {
  //   stack: "Express.js",
  // },
  // {
  //   stack: "MongoDB",
  // },
];

export const projects = [
  {
    title: "SugBox",
    description:
      "A full stack (MERN) digital suggestion box with portals for admin and employees. Features include anonymous suggestions, attachment uploads, upvotes, downvotes, and comments. Built with React, Node.js, Express, MongoDB, and Redux Toolkit.",
    img: "/projects/sugbox/portal.png",
    url: "https://sugbox.vercel.app",
    year: "2023",
    category: "full stack application",
    tools:
      "HTML, CSS, React, Typescript, AntD, TailwindCss, Node.js, Express.js, MongoDB, Redux Toolkit, RTK Query",
    projectImages: [
      {
        title: "Portal",
        images: [{ src: "/projects/sugbox/portal.png" }],
      },
      {
        title: "Login Page",
        images: [{ src: "/projects/sugbox/login.png" }],
      },
      {
        title: "Signup Page",
        images: [{ src: "/projects/sugbox/signup.png" }],
      },
      {
        title: "Admin Dashboard",
        images: [{ src: "/projects/sugbox/admin-dashboard.png" }],
      },
      {
        title: "Employee Dashboard",
        images: [{ src: "/projects/sugbox/employee-dashboard.png" }],
      },
      {
        title: "New Suggestion Modal",
        images: [{ src: "/projects/sugbox/new-suggestion.png" }],
      },
      {
        title: "Suggestion Page",
        images: [{ src: "/projects/sugbox/suggestion.png" }],
      },
    ],
  },
  {
    title: "Uorda Customer Mobile App",
    description:
      "A cross-platform mobile app built with React Native (Expo) for customers to browse, order, and manage deliveries. Integrated with secure authentication, order history tracking, and payment support. Connected to the Uorda Vendor App, Admin Dashboard, and Landing Page for seamless business operations.",
    img: "/projects/uorda/customer.png",
    url: "#", // replace with store/testflight link
    year: "2024",
    category: "mobile application",
    tools:
      "React Native (Expo), TypeScript, React Native Paper, NestJS, Prisma, PostgreSQL, Cloudinary",
    projectImages: [
      {
        title: "Customer App Screens",
        images: [
          { src: "/projects/uorda/customer-home.png" },
          { src: "/projects/uorda/customer-orders.png" },
        ],
      },
    ],
  },
  {
    title: "Uorda Vendor Mobile App",
    description:
      "A vendor-facing mobile app built with React Native (Expo) that allows sellers to list products, track and fulfill customer orders, and manage their store. Vendors are connected to customers via the Uorda Customer App, while the Uorda Admin Dashboard manages compliance and operations.",
    img: "/projects/uorda/vendor.png",
    url: "#", // replace with store/testflight link
    year: "2024",
    category: "mobile application",
    tools:
      "React Native (Expo), TypeScript, React Native Paper, NestJS, Prisma, PostgreSQL, Cloudinary",
    projectImages: [
      {
        title: "Vendor App Screens",
        images: [
          { src: "/projects/uorda/vendor-home.png" },
          { src: "/projects/uorda/vendor-products.png" },
        ],
      },
    ],
  },
  {
    title: "Uorda Admin Dashboard",
    description:
      "An admin dashboard for managing customers, vendors, transactions, and compliance. Features include role-based authentication, analytics, and order management. Acts as the central hub for data from both the Uorda Customer and Vendor apps. Built with Next.js, TailwindCSS, and NestJS backend.",
    img: "/projects/uorda/admin.png",
    url: "#", // replace with live/demo link
    year: "2024",
    category: "web applications",
    tools:
      "Next.js, React, TypeScript, TailwindCSS, NestJS, Prisma, PostgreSQL, Cloudinary",
    projectImages: [
      {
        title: "Admin Dashboard",
        images: [
          { src: "/projects/uorda/admin-dashboard.png" },
          { src: "/projects/uorda/admin-analytics.png" },
        ],
      },
    ],
  },
  {
    title: "Uorda Landing Page",
    description:
      "A modern, responsive landing page built with Next.js and TailwindCSS, designed to showcase Uorda’s services to customers and vendors. Acts as the public-facing entry point that links to both the Uorda Customer and Vendor apps, as well as providing insights into the platform.",
    img: "/projects/uorda/landing.png",
    url: "#", // replace with live/demo link
    year: "2024",
    category: "frontend",
    tools: "Next.js, React, TypeScript, TailwindCSS",
    projectImages: [
      {
        title: "Landing Page Screens",
        images: [
          { src: "/projects/uorda/landing.png" },
          { src: "/projects/uorda/landing-2.png" },
        ],
      },
    ],
  },
  {
    title: "Amazon Web Scraping App",
    description:
      "A full-stack web application that scrapes Amazon for product pricing, reviews, costs, and images. The scraped data is automatically converted into an Excel sheet and sent to the requester via email. Includes a dashboard for submitting scrape requests, tracking status, and managing history. Built with Next.js frontend, NestJS backend, Prisma ORM, and PostgreSQL.",
    img: "/projects/webscraper/main.png",
    url: "#", // replace with live/demo link
    year: "2024",
    category: "full stack application",
    tools:
      "Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, TailwindCSS, Nodemailer, ExcelJS",
    projectImages: [
      {
        title: "Dashboard",
        images: [
          { src: "/projects/webscraper/dashboard.png" },
          { src: "/projects/webscraper/results.png" },
        ],
      },
      {
        title: "Sample Excel Export",
        images: [{ src: "/projects/webscraper/excel.png" }],
      },
    ],
  },

  // ... continue with existing older projects (LaChiommy, Uknight, FitFam, etc.)
];

