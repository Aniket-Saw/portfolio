export const profile = {
  name: "Aniket Saw",
  role: "AI/ML Engineer & Data Scientist",
  taglines: [
    "AI/ML Engineer",
    "Data Scientist",
    "Full-Stack Builder",
  ],
  location: "Navi Mumbai, India",
  email: "aniketsaw3131@gmail.com",
  phone: "+91 8356943868",
  linkedin: "https://linkedin.com/in/aniket-saw",
  github: "https://github.com/Aniket-Saw",
  heroLine:
    "I build machine learning systems end to end — from raw signal to shipped product.",
  about: [
    "I'm a dual-degree student reading Data Science at IIT Madras and Electronics & Computer Science at VIT Mumbai, where I spend most of my time turning messy, high-stakes data into models that actually hold up in production.",
    "My work spans the full pipeline — cleaning and engineering features, training deep learning and classical ML models, and deploying them behind real APIs. I've applied this across biomedical signal classification, financial time-series forecasting, and applied LLM integration.",
    "Right now I'm deep in an EEG-based neurodegenerative disease classifier, fusing autoencoder embeddings with domain signal features across a hybrid deep learning architecture.",
  ],
} as const;

export type Project = {
  title: string;
  status?: string;
  stack: string[];
  bullets: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered EEG Analysis for Neurodegenerative Disease Classification",
    status: "Ongoing",
    stack: ["Python", "TensorFlow", "Autoencoders", "Bidirectional LSTM", "Signal Processing"],
    bullets: [
      "Architected a hybrid deep learning model (Autoencoder + Bidirectional LSTM) to classify Alzheimer's Disease, Frontotemporal Dementia, and Cognitively Normal subjects from resting-state EEG signals across 3 classes.",
      "Processed 19-channel EEG data (500 Hz) using Artifact Subspace Reconstruction (ASR) and 0.5–45 Hz band-pass filtering to remove signal noise and motion artifacts.",
      "Engineered a feature extraction pipeline segmenting signals into overlapping epochs and fusing compressed Autoencoder embeddings with domain features (Spectral Entropy, multi-band power — Alpha/Beta/Gamma).",
    ],
  },
  {
    title: "Predicting Appreciation of the Indian Rupee",
    stack: ["XGBoost", "Pandas", "Streamlit", "Time-Series Forecasting"],
    bullets: [
      "Developed a predictive ML model using XGBoost on time-series financial and macroeconomic data, benchmarked against a naive baseline for directional accuracy.",
      "Engineered technical indicator features from raw market data and deployed the model via an interactive Streamlit dashboard for real-time inference.",
    ],
    github: "https://github.com/Aniket-Saw",
  },
  {
    title: "Intelligent Personal Finance Manager",
    stack: ["Python", "Scikit-learn", "FastAPI", "SQLite"],
    bullets: [
      "Built a Random Forest + TF-IDF NLP pipeline for automated transaction categorization.",
      "Developed asynchronous FastAPI endpoints for real-time CRUD operations and model inference at scale.",
      "Architected a SQLite schema and engineered multi-dimensional Pandas features; built an interactive JS dashboard visualizing fixed vs. variable spending trends.",
    ],
  },
  {
    title: "Suraksham",
    stack: ["Flutter", "Dart", "Firebase", "Google Gemini API"],
    bullets: [
      "Integrated the Google Gemini API with prompt-engineered safety queries to power a context-aware conversational AI chatbot for emergency response.",
      "Consumed real-time REST APIs (weather, seismic alerts); managed app state with Provider and secured user profiles via Firebase Authentication.",
    ],
    github: "https://github.com/Aniket-Saw",
  },
  {
    title: "CamDrop",
    stack: ["Python", "FastAPI", "PostgreSQL", "Supabase"],
    bullets: [
      "Architected an offline-first PWA with a FastAPI backend for PostgreSQL state management and automated background media processing.",
      "Implemented zero-data-loss local queuing via IndexedDB so uploads survive dropped connections.",
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Web Developer Intern",
    org: "Dattaram Foundation",
    period: "Dec 2025 – Feb 2026",
    bullets: [
      "Developed a full-stack SPA (React 18, TypeScript, Supabase, PostgreSQL) with role-based access control, payment processing (Razorpay), and a data visualization admin dashboard (Recharts, React Query).",
    ],
  },
  {
    role: "Creatives Head",
    org: "NSS – VIT",
    period: "Apr 2025 – Apr 2026",
    bullets: [
      "Led a creative team and directed operations for a 50-volunteer NSS residential camp, executing digital campaigns for intercollegiate events.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export const education: Education[] = [
  {
    school: "Indian Institute of Technology Madras",
    degree: "B.S. Data Science and Applications",
    period: "2024–2028",
    detail: "Diploma level · CGPA 7",
  },
  {
    school: "Vidyalankar Institute of Technology, Mumbai",
    degree: "B.Tech, Electronics & Computer Science",
    period: "2023–2027",
    detail: "Semester 6 · CGPA 9.41",
  },
  {
    school: "CBSE — 12th Boards",
    degree: "Central Board of Secondary Education",
    period: "Hazaribagh",
    detail: "Score: 88%",
  },
  {
    school: "D.Y. Patil Dnyan Pushpa Vidya Niketan",
    degree: "CBSE — 10th Boards",
    period: "Navi Mumbai",
    detail: "Score: 95.2%",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Machine Learning & Data Science",
    items: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "Random Forest",
      "Feature Engineering",
      "NLP (TF-IDF)",
      "Time-Series Forecasting",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "Seaborn",
    ],
  },
  {
    group: "Deep Learning",
    items: ["TensorFlow", "LSTM", "Bidirectional LSTM", "Autoencoders", "Signal Processing"],
  },
  {
    group: "AI Integration",
    items: ["Google Gemini API", "Prompt Engineering", "LLM Integration"],
  },
  {
    group: "Backend & Deployment",
    items: ["FastAPI", "PostgreSQL", "Supabase", "Firebase", "Streamlit", "REST API Design"],
  },
  {
    group: "Languages & Tools",
    items: ["Python", "Java", "C", "Dart", "MATLAB", "Git/GitHub", "Vercel", "Render"],
  },
];
