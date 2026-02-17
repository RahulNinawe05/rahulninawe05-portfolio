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
    "Building with generative AI, LLMs, and multimodal AI to solve real-world problems.",
  summary:
    "I’m passionate about building intelligent applications and exploring the potential of large language models and multimodal AI. I love solving real-world problems, experimenting with cutting-edge AI technologies, and creating solutions that make an impact.",
  avatarUrl: "/me.png",
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
  title: "Next Word Prediction",
  href: "https://github.com/RahulNinawe05/GenFlow-.git",
  dates: "May 2025 - July 2025",
  active: true,
  description:
    "Developed an LSTM-based deep learning model to predict the next word in a sentence. Built an interactive Streamlit app that loads a trained model and tokenizer to perform real-time text predictions.",
  technologies: [
    "Python",
    "TensorFlow / Keras",
    "LSTM",
    "NumPy",
    "Streamlit",
    "NLP",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/RahulNinawe05/GenFlow-.git",
      icon: <Icons.github className="size-3" />,
    },
  ],
    image: "",
  },
  {
  title: "RAG Q&A Chatbot with PDF & Chat History",
  href: "https://github.com/RahulNinawe05/Chatbot",
  dates: "Jun 2025 - July 2025",
  active: true,
  description:
    "Built a conversational RAG-based Q&A chatbot that allows users to upload PDFs and ask context-aware questions. Implemented chat history memory, history-aware retrieval, and semantic search using embeddings and FAISS for accurate responses.",
  technologies: [
    "Python",
    "LangChain",
    "RAG (Retrieval-Augmented Generation)",
    "FAISS",
    "HuggingFace Embeddings",
    "Groq LLM (LLaMA 3.1)",
    "Streamlit",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/RahulNinawe05/Chatbot",
      icon: <Icons.github className="size-3" />,
    },
  ],
    image: "",
  },
  {
  title: "AI Vision & Voice Assistant",
  href: "https://github.com/RahulNinawe05/AI_Voice_bot",
  dates: "Dec 2025 - Jan 2026",
  active: true,
  description:
    "Built a multi-modal AI assistant that takes voice input and images, transcribes speech, analyzes visual content, and responds with concise answers. Integrated Groq LLM for reasoning, Whisper for speech-to-text, and gTTS for text-to-speech, enabling interactive voice and visual interactions.",
  technologies: [
    "Python",
    "Gradio",
    "Groq LLM (LLaMA 4 Maverick)",
    "Whisper STT",
    "gTTS (Text-to-Speech)",
    "Base64 Image Encoding",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/RahulNinawe05/AI_Voice_bot",
      icon: <Icons.github className="size-3" />,
    },
  ],
    image: "",
  },
],

  hackathons: [],
} as const;
