import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Deepak Barwal",
  initials: "DB",
  url: "https://deepakbarwal.work",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "Full-Stack Engineer building scalable web apps with React, Next.js, and n8n-powered AI workflows.",
  summary: `I'm a full-stack engineer building scalable web applications. Currently at [RedSoft Solutions](https://www.redsoftsolutions.com), I developed a [React geospatial app for solar plant design](/#work) and a [crypto/DeFi intelligence system](/#work) with LangGraph + FastAPI achieving sub-2s response times. I won RedSoft Games 2025 with an AI-powered WhatsApp automation reducing clinic no-shows by 70%. Previously at [IBM](/#work), I maintained energy trading systems with 99.9% uptime and led an Oracle-to-PostgreSQL migration. I've built projects like [pdf-gupshup](https://pdf-gupshup.vercel.app) and [Banalo](https://banalo.vercel.app), and work with React, Next.js, TypeScript, Python, FastAPI, and AWS.`,
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AWS",
    "LangChain",
    "MongoDB",
    "Express.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://blogs.deepakbarwal.com",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "deepakbarwal.work@gmail.com",
    tel: "+918130140963",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DeepakBarwal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/d-barwal",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/__aizen_sama",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:deepakbarwal.work@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "RedSoft Solutions Pvt. Ltd.",
      href: "https://redsoft.in",
      badges: [],
      location: "Surat, Gujarat",
      title: "Full-Stack Engineer",
      logoUrl: "/redsoft.png",
      start: "September 2023",
      end: "Present",
      description:
        "Developed a React SPA geospatial application for utility-scale solar plant and BESS design with Google Maps integration, enabling automated solar panel placement with azimuth optimization, KML/KMZ boundary imports, interactive polygon drawing, real-time power capacity calculations, and professional PDF report generation with multi-language support. Architected production-grade multi-agent crypto/DeFi financial intelligence system with LangGraph + FastAPI handling 46 tools across CoinMarketCap/CoinGecko/Yodlee APIs, real-time intent parsing, event-driven architecture with Redis caching, sub-2s avg. response times, and full Chainlit UI. Winner of RedSoft Games 2025: Architected AI-powered WhatsApp automation for ERPNext-base CRM using n8n workflows with multi-language NLP, 7-stage lead nurturing pipeline, intelligent appointment scheduling via Frappe CRUD APIs, reducing clinic no-shows by up to 70%.",
    },
    {
      company: "IBM",
      badges: [],
      href: "https://ibm.com",
      location: "Gurugram, India",
      title: "Software Engineer",
      logoUrl: "/ibm.svg",
      start: "May 2021",
      end: "August 2023",
      description:
        "Architected and maintained mission-critical energy trading infrastructure across multi-vendor ecosystems (IBM proprietary and third-party systems), ensuring 99.9%+ uptime for upstream/downstream applications while implementing zero-downtime deployment strategies using ServiceNow for production releases. Delivered 10/10 NPS client satisfaction by engineering custom reporting solutions for EnergyOneTrading App that reduced back-office report acquisition time by 99%. Led enterprise cloud migration initiative converting Oracle-to-PostgreSQL database layer across EnergyOneTrading, EnergyOffer, and EnergyFlow applications.",
    },
  ],
  education: [
    {
      school: "DPGITM",
      href: "https://dpgitm.ac.in",
      degree:
        "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      logoUrl: "/dpgitm.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "pdf-gupshup",
      href: "https://pdf-gupshup.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Architected full-stack AI document assistant enabling conversational PDF querying through Next.js, LangChain, and OpenAI embeddings, implementing dual-parser fallback strategy to handle diverse document structures. Engineered scalable vector search pipeline using Pinecone with per-file namespace isolation and batched embedding generation. Built end-to-end monetization infrastructure integrating Stripe subscription webhooks, Clerk authentication with SSR guards, and S3 presigned URLs for reliable region-aware uploads.",
      technologies: [
        "Next.js",
        "LangChain",
        "OpenAI",
        "Pinecone",
        "Clerk",
        "AWS S3",
        "Stripe",
        "Prisma",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Live Link",
          href: "https://pdf-gupshup.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/DeepakBarwal/pdf-gupshup",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "",
    },
    {
      title: "Banalo",
      href: "https://banalo.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Architected a full-stack design platform using Next.js 15 and Fabric.js for canvas manipulation, enabling users to create and edit designs with 20+ tools including shapes, text styling, image filters, and freehand drawing with real-time state management. Built type-safe API layer with Hono and Zod validation handling project CRUD operations, subscription management, and integrated Replicate AI for background removal and Stable Diffusion 3 for AI image generation.",
      technologies: [
        "Next.js 15",
        "React 19",
        "Fabric.js",
        "Hono",
        "Drizzle ORM",
        "Neon Postgres",
        "Replicate AI",
        "Stripe",
      ],
      links: [
        {
          type: "Live Link",
          href: "https://banalo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/DeepakBarwal/banalo",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
