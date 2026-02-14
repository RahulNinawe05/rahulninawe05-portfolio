import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Rahul",
  initials: "R",
  url: "https://github.com/RahulNinawe05", 
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "AI Engineering Student. I love building AI tools and learning Generative AI.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "ninawerahul818@gmail.com",
    tel: "+91",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RahulNinawe05",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-ninawe/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ninawerahul818@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RahulNinaw78858",
        icon: Icons.x,

        navbar: true,
      },
    },
  },
  projects: [
  {
    title: "Multi-Agent AI System (LangGraph)",
    href: "https://github.com/RahulNinawe05/langgraph-multi-agent",
    dates: "Jan 2025 - Feb 2025",
    active: true,
    description:
      "Built a multi-agent AI system using LangGraph where agents collaborate to plan, reason, and execute tasks. Implemented tool calling, memory, and state-based workflows.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "OpenAI / Groq LLMs",
      "FastAPI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/RahulNinawe05/langgraph-multi-agent",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
  },

  {
    title: "RAG-based AI Chatbot",
    href: "https://github.com/RahulNinawe05/rag-chatbot",
    dates: "Dec 2024 - Jan 2025",
    active: true,
    description:
      "Developed a Retrieval-Augmented Generation (RAG) chatbot that answers questions from PDFs using vector search and LLM reasoning.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS / ChromaDB",
      "OpenAI / HuggingFace",
      "Streamlit",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/RahulNinawe05/rag-chatbot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
  },

  {
    title: "AI Customer Support Chatbot",
    href: "https://github.com/RahulNinawe05/ai-support-bot",
    dates: "Nov 2024 - Dec 2024",
    active: true,
    description:
      "Built an AI-powered customer support chatbot that automatically resolves queries using LLMs, conversation memory, and tool calling.",
    technologies: [
      "Python",
      "LangChain",
      "LLMs (GPT / LLaMA)",
      "FastAPI",
      "PostgreSQL",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/RahulNinawe05/ai-support-bot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
  },

  {
    title: "MCP-based AI Tool Integration",
    href: "https://github.com/RahulNinawe05/mcp-ai-tools",
    dates: "Feb 2025 - Present",
    active: true,
    description:
      "Implemented Model Context Protocol (MCP) to connect LLMs with external tools, APIs, and databases in a secure and scalable way.",
    technologies: [
      "Python",
      "MCP",
      "LLMs",
      "FastAPI",
      "Docker",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/RahulNinawe05/mcp-ai-tools",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
  },
],

  hackathons: [],
} as const;
