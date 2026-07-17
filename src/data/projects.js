import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";

export const projects = [
  {
    id: 1,
    title: "VentureForge AI",
    description:
      "An AI-powered startup incubator that transforms ideas into validated business concepts. Equipped with specialized AI agents for market research, business analysis, competitor insights, financial planning, and product strategy to help entrepreneurs build data-driven startups faster.",
    tech: ["Laravel", "OpenRouter API", "Blade", "Tailwind CSS"],
    image: project6,
    github: "github.com/AhlulFadhly/VentureForge-AI.git",
    demo: "github.com/AhlulFadhly/VentureForge-AI.git",
  },
  {
    id: 2,
    title: "Event Ticketing System",
    description:
      "A full-stack event management platform featuring role-based authentication, event publishing, ticket booking, and organizer dashboards built with Angular and Spring Boot.",
    tech: ["Angular", "TypeScript", "Spring Boot", "PostgreSQL"],
    image: project1,
    github: "https://github.com/AhlulFadhly/Backend-EventTicketing",
    demo: "https://frontend-event-ticketing-theta.vercel.app",
  },

  {
    id: 3,
    title: "Weather Application",
    description:
      "A responsive weather application that displays real-time forecasts using a public weather API with a clean, modern interface built in Angular.",
    tech: ["Angular"],
    image: project2,
    github: "https://github.com/AhlulFadhly/Weather-Angular",
    demo: "https://weather-angular-chi.vercel.app/",
  },

  {
    id: 4,
    title: "Braille Character Recognition",
    description:
      "An AI-powered application that recognizes Braille characters from images using a YOLOv8 model, providing fast and accurate character detection.",
    tech: ["Python", "YOLO", "AI Model"],
    image: project3,
    github: "https://github.com/AhlulFadhly/Braille-Character-Identification",
    demo: "https://github.com/AhlulFadhly/Braille-Character-Identification",
  },

  {
    id: 5,
    title: "Beyond Sign Language Translator",
    description:
      "A mobile application that translates BISINDO sign language into text using computer vision, developed as part of the Bangkit Academy capstone project.",
    tech: ["Cloud", "REST API", "Kotlin"],
    image: project4,
    github: "https://github.com/AhlulFadhly/LandingPage_BEYOND",
    demo: "https://beyondapp.vercel.app/",
  },

  {
    id: 6,
    title: "Company Profile Website",
    description:
      "A modern company profile website redesigned with WordPress, Elementor, and WooCommerce to improve visual presentation, usability, and content management.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    image: project5,
    github: "https://github.com/AhlulFadhly/",
    demo: "https://www.eacfurniture.xo.je/",
  },
];
