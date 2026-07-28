export const SITE_NAME = "Abhinav Jagan Polimera";
export const SITE_DESCRIPTION = "Software Developer | Distributed Systems | AI/ML Engineer | Full-Stack Developer";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const SOCIAL_LINKS = {
  github: "https://github.com/abhinavjagan",
  linkedin: "https://linkedin.com/in/abhinavpolimera",
  email: "abhinavpolimera@gmail.com",
  twitter: "https://twitter.com/abhinavpolimera",
};

export const EXPERIENCE = [
  {
    company: "Cisco Systems",
    position: "Software Developer 2, Distributed Systems",
    duration: "Apr 2026 - Present",
    location: "On-site",
    highlights: [
      "Built graph-based AI and LLM infrastructure for agentic workflows, improving internal developer platform capabilities and tooling efficiency.",
      "Delivered distributed networking features across high-performance router operating systems and packet-mirroring infrastructure.",
      "Improved validation throughput and debugging speed using telemetry-driven workflows, automation, and customer-focused feature development.",
    ],
  },
  {
    company: "Cisco Systems",
    position: "Software Developer, Distributed Systems",
    duration: "Aug 2024 - Apr 2026",
    location: "On-site",
    highlights: [
      "Delivered traffic mirroring features for Cisco 8000 Silicon One routers across SPAN, Lawful Intercept, NetFlow, and ERSPAN workflows.",
      "Built a unified simulation and debugging platform that reduced triage time and accelerated feature validation for complex networking scenarios.",
      "Developed AI-assisted developer tooling and telemetry analysis workflows to speed debugging, improve product quality, and support customer evaluation.",
    ],
  },
  {
    company: "Cisco Systems",
    position: "Technical Intern, Distributed Systems",
    duration: "Jan 2024 - Jun 2024",
    location: "On-site",
    highlights: [
      "Automated router OS test and deployment workflows for networking features, improving reliability and reducing repeated manual effort.",
      "Led Python-based validation and configuration workflows for NTP VRF and OpenConfig feature delivery.",
      "Contributed to feature readiness with stronger test design, faster issue isolation, and measurable quality improvements.",
    ],
  },
];

export const PROJECTS = [
  {
    slug: "graph-based-agentic-platform",
    title: "Graph-Based Agentic Intelligence Platform",
    description: "A graph-driven AI workflow for connecting engineering context, relationships, and tool signals into more useful agentic experiences.",
    details: [
      "Explored a graph-based approach to retrieval and reasoning so AI systems could connect structured context across engineering workflows.",
      "Focused on making agentic experiences more useful by combining semantic relationships with practical developer context.",
      "Designed the work around real product constraints: explainability, reliability, and a clear path to deployment in developer-facing environments.",
    ],
    tech: ["Python", "LLMs", "Graph Systems", "Agentic AI"],
    links: [{ label: "Contact", href: "https://github.com/abhinavjagan" }],
    category: "AI/ML",
    skills: ["LLM Infrastructure", "Agentic AI", "Knowledge Graphs"],
  },
  {
    slug: "traffic-mirroring-simulation",
    title: "Traffic Mirroring Simulation Platform",
    description: "A unified simulation and debugging platform for Cisco network mirroring features spanning SPAN, Lawful Intercept, NetFlow, and ERSPAN workflows.",
    details: [
      "Built a productivity-focused platform that brought together multiple traffic mirroring features into one coherent test and debugging experience.",
      "Helped reduce validation effort and accelerate root-cause analysis for complex distributed networking scenarios.",
      "Combined product thinking with systems-level debugging to make network feature workflows easier to reason about and validate.",
    ],
    tech: ["Distributed Systems", "Python", "Automation", "Network Testing"],
    links: [{ label: "Contact", href: "https://github.com/abhinavjagan" }],
    category: "Distributed Systems",
    skills: ["Distributed Systems", "Automation", "Network Engineering"],
  },
  {
    slug: "ai-telemetry-prototype",
    title: "AI-Driven Network Telemetry Prototype",
    description: "An internal prototype that explored deploying quantized ML models on Cisco routers using telemetry-driven decision support.",
    details: [
      "Worked on an AI-assisted infrastructure prototype for applying quantized machine learning models in networking environments.",
      "Used telemetry and performance data to guide model selection and improve the practicality of prototype evaluation with customers.",
      "Connected model experimentation with real product constraints such as latency, deployment complexity, and hardware limitations.",
    ],
    tech: ["AI/ML", "Python", "Telemetry", "Router Systems"],
    links: [{ label: "Contact", href: "https://github.com/abhinavjagan" }],
    category: "AI/ML",
    skills: ["Machine Learning", "Distributed Systems"],
  },
  {
    slug: "playlistify",
    title: "Playlistify",
    description: "A full-stack Spotify utility that converts liked songs into shareable playlists with one click.",
    details: [
      "Identified a product usability gap in Spotify: liked songs are personal, but not easy to package into a shareable playlist.",
      "Independently built Playlistify as a Python and Flask web app that uses the Spotify Web API for authentication, liked-track retrieval, playlist creation, and library-to-playlist conversion.",
      "Designed a one-click flow that turns a private liked-song collection into a shareable playlist, emphasizing practical product thinking and full-stack execution.",
      "Used the project to demonstrate problem-solving initiative, curiosity, API integration, and a clean product workflow around a small but real user pain point.",
    ],
    tech: ["Python", "Flask", "Spotify API", "React"],
    links: [{ label: "GitHub", href: "https://github.com/abhinavjagan" }],
    category: "Web Development",
    skills: ["Python", "Flask", "React", "Full-Stack Development"],
  },
  {
    slug: "remote-drone-surveillance",
    title: "Remote Drone Surveillance",
    description: "A drone-based surveillance research project for real-time object detection and illegal-action flagging.",
    details: [
      "Researched and implemented an automated drone-based surveillance system for remote security monitoring.",
      "Used Python, OpenCV, YOLO, and image processing to detect and classify objects in real time from aerial video.",
      "Designed threshold-based algorithms using object count and activity duration to automatically flag suspicious or illegal actions.",
      "Focused the system on strengthening remote threat detection by turning raw visual feeds into higher-signal alerts for human review.",
    ],
    tech: ["Python", "OpenCV", "YOLO", "ML"],
    links: [
      {
        label: "Publication",
        href: "https://www.researchgate.net/publication/377547504_Detection_of_Suspicious_Activities_at_Remote_Locations_by_using_UAVs_and_Computer_Vision",
      },
    ],
    category: "Machine Learning",
    skills: ["Python", "Machine Learning"],
  },
  {
    slug: "nerf-vs-photogrammetry-study",
    title: "NeRF vs Photogrammetry Study",
    description: "A comparative 3D reconstruction study of Neural Radiance Fields and traditional photogrammetry.",
    details: [
      "Researched and implemented a comparative study between Neural Radiance Fields and traditional photogrammetry for 3D reconstruction.",
      "Evaluated reconstruction of both man-made and natural features, comparing the tradeoffs between learned scene representation and classical photogrammetric pipelines.",
      "Leveraged Python, neural networks, and volumetric rendering to assess reconstruction quality, workflow differences, and practical applicability.",
      "The work was selected and presented at the ICAART conference.",
    ],
    tech: ["Python", "Neural Networks", "3D Rendering"],
    links: [
      {
        label: "Publication",
        href: "https://www.researchgate.net/publication/378826735_Performance_Assessment_of_Neural_Radiance_Fields_NeRF_and_Photogrammetry_for_3D_Reconstruction_of_Man-Made_and_Natural_Features",
      },
    ],
    category: "Research",
    skills: ["Python", "Machine Learning"],
  },
];

export const SKILLS = {
  programming: ["Python", "C", "C++", "Shell Scripting"],
  aiAndMachineLearning: [
    "Large Language Models (LLMs)",
    "Agentic AI",
    "AI Agents",
    "Multi-Agent Systems",
    "Agentic Workflows",
    "Context-Prompt Engineering",
    "Retrieval-Augmented Generation (RAG)",
    "Knowledge Graphs",
    "Vector Databases",
    "Embedding Models",
    "Fine-tuning",
    "LLM Evaluation (Evals)",
    "Model Context Protocol (MCP)",
    "LangGraph",
    "Hugging Face",
    "Transformers",
  ],
  systemsAndNetworking: [
    "Distributed Systems",
    "Network Operating Systems",
    "Systems Programming",
    "Computer Networking",
    "Routing",
    "Cisco Silicon One",
    "Linux",
  ],
  computerVision: [
    "OpenCV",
    "Computer Vision",
    "Image Processing",
    "Object Detection",
    "Neural Radiance Fields (NeRFs)",
  ],
};
