export interface Project {
  number: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Credex Audit",
    description:
      "AI-powered financial auditing platform combining structured financial data with LLM-assisted analysis.",
    details:
      "Built with Next.js and TypeScript, using Supabase/PostgreSQL for data management and Gemini for AI-assisted financial analysis. Includes authentication, RBAC, application state management and transactional email workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Gemini",
    ],
    featured: true,
  },

  {
    number: "02",
    title: "Flashcard Frenzy",
    description:
      "Real-time multiplayer trivia platform with rooms, timed questions, competitive scoring and live leaderboards.",
    details:
      "Designed around a multiplayer game flow with room creation, host controls, timed questions and synchronized player state.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Supabase",
      "TypeScript",
    ],
    featured: true,
  },

  {
    number: "03",
    title: "ForkMap",
    description:
      "Restaurant discovery platform combining geospatial search, mapping and algorithmic ranking.",
    details:
      "Uses Leaflet and Nominatim for location functionality, Haversine distance calculations for geographic search, and algorithmic ranking with QuickSort and Dijkstra.",
    technologies: [
      "PHP",
      "MySQL",
      "Leaflet",
      "Nominatim",
      "Algorithms",
    ],
    featured: true,
  },

  {
    number: "04",
    title: "Scribble Chat",
    description:
      "Real-time collaborative messaging and whiteboard platform supporting direct and group conversations with synchronized live drawing.",
    details:
      "Built with Flutter and a Node.js/Express backend using Socket.io for real-time messaging, typing indicators and whiteboard sync, JWT authentication, MongoDB, and Provider-based state management with a feature-first architecture.",
    technologies: [
      "Flutter",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Provider",
    ],
    featured: true,
  },

  {
    number: "05",
    title: "ResumeForge",
    description:
      "AI-powered resume builder with live preview, multiple professional templates, PDF export, and job-description tailoring using the Claude API.",
    details:
      "Built with Next.js 14 App Router, TypeScript and Tailwind CSS. The AI tailoring API rewrites resume summaries and filters relevant skills based on a provided job description, with PDF export via jsPDF and html2canvas.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Claude API",
      "jsPDF",
      "html2canvas",
    ],
    github: "https://github.com/tatseek/resume",
    featured: true,
  },
];