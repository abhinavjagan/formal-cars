export const SITE_NAME = "Abhinav Jagan Polimera";
export const SITE_DESCRIPTION = "Software Developer | Distributed Systems | AI/ML Engineer | Full-Stack Developer";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const SOCIAL_LINKS = {
  github: "https://github.com/abhinavpolimera",
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
      "Designed a next-generation ERSPAN solution using GUE (UDP-based) encapsulation as a scalable alternative to GRE.",
      "Led customer-driven feature development for Microsoft packet mirroring requirements with hardware-accelerated performance optimization.",
      "Contributed to an AI-driven Infrastructure-as-a-Service prototype for deploying quantized ML models on Cisco routers.",
      "Applied data-driven model selection on large-scale network telemetry and helped move the prototype into customer evaluation.",
    ],
  },
  {
    company: "Cisco Systems",
    position: "Software Developer, Distributed Systems",
    duration: "Aug 2024 - Apr 2026",
    location: "On-site",
    highlights: [
      "Led end-to-end delivery of egress traffic mirroring for Cisco 8000 Silicon One routers, enabling functional parity with NCS 5000 for SoftBank migration.",
      "Owned delivery, debugging, and proof-of-concept execution across SPAN, Lawful Intercept, and NetFlow features in Cisco's OS stack.",
      "Reduced delivery time by 60% through component design expertise and AI-assisted development.",
      "Spearheaded scalable automation infrastructure for sanity testing, faster debugging, and improved product quality.",
      "Built AI-powered productivity tools including a leadership metrics analyzer and a unified traffic mirroring simulation platform.",
    ],
  },
  {
    company: "Cisco Systems",
    position: "Technical Intern, Distributed Systems",
    duration: "Jan 2024 - Jun 2024",
    location: "On-site",
    highlights: [
      "Optimized router OS feature testing and deployment through refined test design and parallel execution.",
      "Earned an internal Cisco excellence award for the testing optimization initiative.",
      "Led Python automation lifecycle for NTP VRF OpenConfig feature delivery.",
    ],
  },
];

export const PROJECTS = [
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
    links: [
      { label: "GitHub", href: "https://github.com/abhinavjagan" },
    ],
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
  languages: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  frameworks: ["React", "Next.js", "Flask", "Express.js", "Node.js"],
  tools: ["Docker", "Kubernetes", "Git", "AWS", "GCP", "Linux"],
  specialties: ["Distributed Systems", "Machine Learning", "Network Engineering", "Full-Stack Development"],
};
