import { LucideIcon, Code, Server, Monitor, Database, Shield, Brain, Globe } from "lucide-react";

export type ProjectCategory = 
  | "SRE/Monitoring" 
  | "AI/ML" 
  | "DevOps" 
  | "Full-Stack" 
  | "API Development"
  | "Automation";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory;
  icon: LucideIcon;
  github: string;
  demo?: string;
  features: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "e-smart-learning",
    title: "E-Smart Learning",
    description: "AI-powered e-learning platform with course catalog, video lessons, quizzes, progress tracking, certificates, personalized dashboards, and Google Gemini-powered chat/recommendations. Fully responsive SPA with dark mode and secure RLS.",
    longDescription: "A comprehensive e-learning platform that leverages AI to provide personalized learning experiences. Features include course management, video lessons, interactive quizzes, progress tracking, certificate generation, and AI-powered recommendations using Google Gemini API.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query", "Supabase", "Google Gemini API", "PostgreSQL"],
    category: "Full-Stack",
    icon: Brain,
    github: "https://github.com/kkweli/e-smart-learning",
    demo: "https://e-smart-learning.vercel.app",
    features: [
      "AI-powered course recommendations",
      "Real-time progress tracking",
      "Interactive quizzes and assessments",
      "Certificate generation",
      "Personalized learning dashboards",
      "Dark mode support"
    ],
    featured: true
  },
  {
    id: "observability-stack",
    title: "Observability Stack OSS",
    description: "Secure local-only observability stack (Prometheus + Node Exporter + Grafana) running in isolated Docker containers with read-only filesystems, localhost binding, local registry, and cross-platform build/update scripts. Zero external exposure.",
    longDescription: "A production-ready observability solution designed for secure local development and monitoring. Features isolated Docker containers, read-only filesystems, and comprehensive monitoring capabilities without external dependencies.",
    tech: ["Docker", "Docker Compose", "Prometheus", "Grafana", "Node Exporter", "Bash", "PowerShell", "YAML"],
    category: "SRE/Monitoring",
    icon: Monitor,
    github: "https://github.com/kkweli/Observerbility_Stack_OSS",
    features: [
      "Secure local-only deployment",
      "Prometheus metrics collection",
      "Grafana visualization dashboards",
      "Node Exporter system metrics",
      "Cross-platform scripts",
      "Zero external exposure"
    ],
    featured: true
  },
  {
    id: "african-capitals",
    title: "AfricanCapitals API",
    description: "Production-grade FastAPI service delivering African countries/capitals data + World Bank economic indicators, interactive WebGL map with hover tooltips, country profiles, Redis caching, structured logging, and full Docker/Jenkins/Trivy support.",
    longDescription: "A comprehensive REST API providing detailed information about African countries and capitals, integrated with World Bank economic data. Features Redis caching for performance, structured logging, and complete CI/CD pipeline.",
    tech: ["Python", "FastAPI", "Redis", "JavaScript", "WebGL", "Docker", "Jenkins", "Trivy"],
    category: "API Development",
    icon: Globe,
    github: "https://github.com/kkweli/AfricanCapitals",
    features: [
      "RESTful API design",
      "World Bank API integration",
      "Interactive WebGL map",
      "Redis caching layer",
      "Structured logging",
      "CI/CD with Jenkins and Trivy"
    ],
    featured: true
  },
  {
    id: "docker-tools",
    title: "Docker Development Tools",
    description: "Local Docker development & security suite for Windows: private registry (localhost:5000), Trivy vulnerability scanner with web UI + Redis caching (localhost:8080), optimized for offline workflows and secure image scanning.",
    longDescription: "A comprehensive Docker toolset for local development featuring a private registry and integrated Trivy vulnerability scanner with web interface. Designed for secure, offline-capable development workflows.",
    tech: ["Docker", "Docker Compose", "Trivy", "Redis", "Web UI"],
    category: "DevOps",
    icon: Shield,
    github: "https://github.com/kkweli/docker_tools",
    features: [
      "Private Docker registry",
      "Trivy vulnerability scanning",
      "Web-based scanner UI",
      "Redis caching for scan results",
      "Localhost-only services",
      "Offline workflow support"
    ],
    featured: true
  },
  {
    id: "afya-intelligence",
    title: "Afya Intelligence",
    description: "Full-stack personal & family health tracker with Gemini AI insights, symptom pattern detection, medication/appointment management, M-Pesa subscriptions, offline-first PWA, encrypted data donation for global research.",
    longDescription: "A comprehensive health intelligence platform that combines personal health tracking with AI-powered insights. Features include symptom tracking, medication management, appointment scheduling, and secure data sharing for research purposes.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Google Gemini API", "M-Pesa", "PWA"],
    category: "Full-Stack",
    icon: Brain,
    github: "https://github.com/PLP-Academy/Afya-Intelligence",
    features: [
      "AI-powered health insights",
      "Symptom pattern detection",
      "Medication tracking",
      "Appointment management",
      "M-Pesa payment integration",
      "Offline-first PWA"
    ],
    featured: true
  },
  {
    id: "avaya-automation",
    title: "Avaya Automation Scripts",
    description: "Python Selenium automation suite for Avaya telephony/contact-center system testing and workflows. Streamlines repetitive tasks and improves operational efficiency.",
    longDescription: "A comprehensive automation framework for Avaya systems using Selenium WebDriver. Automates testing and operational workflows for telephony and contact center systems.",
    tech: ["Python", "Selenium WebDriver", "Automation"],
    category: "Automation",
    icon: Server,
    github: "https://github.com/kkweli/Avaya",
    features: [
      "Selenium-based automation",
      "Avaya system integration",
      "Automated testing workflows",
      "Operational efficiency tools",
      "Contact center automation"
    ],
    featured: true
  },
  {
    id: "ai-healthcare",
    title: "AI in Healthcare - Cancer Classification",
    description: "Breast cancer prediction pipeline (>85% accuracy), Selenium automated testing with Page Object Model, AI vs manual code comparison, healthcare bias assessment.",
    longDescription: "A comprehensive machine learning project for breast cancer classification featuring automated testing, bias detection, and ethical AI considerations in healthcare applications.",
    tech: ["Python", "scikit-learn", "pandas", "numpy", "Selenium", "pytest", "GridSearchCV"],
    category: "AI/ML",
    icon: Brain,
    github: "https://github.com/PLP-Academy/ai_se_week4_assignment",
    features: [
      "85%+ prediction accuracy",
      "Automated testing with Selenium",
      "Healthcare bias assessment",
      "Page Object Model implementation",
      "AI vs manual code comparison"
    ],
    featured: true
  },
  {
    id: "ml-showcase",
    title: "Classical ML + Deep Learning + NLP Showcase",
    description: "Iris classification (decision tree), MNIST CNN digit recognition, Amazon reviews sentiment + NER with spaCy, Gradio live demo, auto-narrated HTML presentation.",
    longDescription: "A comprehensive showcase of machine learning techniques including classical ML, deep learning, and NLP. Features interactive demos and automated presentation generation.",
    tech: ["Python", "scikit-learn", "TensorFlow", "spaCy", "Gradio", "HTML/CSS/JS"],
    category: "AI/ML",
    icon: Brain,
    github: "https://github.com/PLP-Academy/ai_se_week3_assignment_ai_tools",
    features: [
      "Iris classification with decision trees",
      "MNIST CNN digit recognition",
      "Sentiment analysis with NLP",
      "Named Entity Recognition",
      "Interactive Gradio demo",
      "Auto-narrated presentation"
    ],
    featured: true
  },
  {
    id: "mnist-classifier",
    title: "Gradio MNIST Digit Classifier",
    description: "Production-ready web app where users draw digits and get real-time 99.42% accurate predictions (desktop + mobile, <100ms inference).",
    longDescription: "A high-performance digit classification web application with real-time predictions. Optimized for both desktop and mobile with sub-100ms inference times.",
    tech: ["Python", "Gradio", "TensorFlow", "NumPy", "TensorFlow Lite", "Poetry"],
    category: "AI/ML",
    icon: Brain,
    github: "https://github.com/PLP-Academy/gradio_machine_learning",
    features: [
      "99.42% prediction accuracy",
      "Real-time inference (<100ms)",
      "Desktop and mobile support",
      "TensorFlow Lite optimization",
      "Interactive drawing interface"
    ],
    featured: false
  },
  {
    id: "ai-bias-detection",
    title: "Algorithmic Bias Detection & Fairness",
    description: "Full fairness audit on the COMPAS recidivism model – detect disparities, implement fairness metrics, apply mitigation techniques, and integrate ethical workflows.",
    longDescription: "A comprehensive study on algorithmic bias in criminal justice systems, featuring fairness metrics, bias detection, and mitigation strategies for the COMPAS recidivism prediction model.",
    tech: ["Python", "Jupyter", "pandas", "scikit-learn", "fairlearn", "matplotlib", "seaborn"],
    category: "AI/ML",
    icon: Shield,
    github: "https://github.com/PLP-Academy/ai_se_week7_assignment",
    features: [
      "COMPAS model fairness audit",
      "Bias detection algorithms",
      "Fairness metrics implementation",
      "Mitigation techniques",
      "Ethical AI workflows"
    ],
    featured: false
  },
  {
    id: "sustainable-cities",
    title: "UN SDG 11 - Sustainable Cities Dashboard",
    description: "K-Means clustering on UN urban data with Silhouette/DB evaluation, PCA visualization, Folium maps, interactive Streamlit dashboard, AI-generated reports, narrated presentation.",
    longDescription: "An interactive data science project analyzing urban sustainability using UN data. Features clustering analysis, interactive visualizations, and AI-generated insights.",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit", "Folium", "plotly", "Jupyter"],
    category: "AI/ML",
    icon: Globe,
    github: "https://github.com/PLP-Academy/ai_se_week2_assignment_machine_learning",
    features: [
      "K-Means clustering analysis",
      "Interactive Streamlit dashboard",
      "Folium map visualizations",
      "PCA dimensionality reduction",
      "AI-generated reports"
    ],
    featured: false
  }
];

export const featuredProjects = projects.filter(p => p.featured);
