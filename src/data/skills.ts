import { LucideIcon, Code, Server, Cloud, Database, GitBranch, Monitor, Shield, Layers } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  experience: string;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Platform Monitoring",
    icon: Monitor,
    skills: [
      { name: "IBM Instana", level: 90, experience: "3+ years" },
      { name: "Grafana", level: 95, experience: "4+ years" },
      { name: "Prometheus", level: 95, experience: "4+ years" },
      { name: "Dynatrace", level: 80, experience: "2+ years" },
      { name: "Splunk", level: 85, experience: "3+ years" },
      { name: "AppDynamics", level: 75, experience: "2+ years" },
      { name: "Loki", level: 85, experience: "2+ years" },
      { name: "Jaeger", level: 80, experience: "2+ years" },
      { name: "OpenTelemetry", level: 85, experience: "2+ years" }
    ]
  },
  {
    category: "Cloud & Container Orchestration",
    icon: Cloud,
    skills: [
      { name: "Kubernetes", level: 90, experience: "4+ years" },
      { name: "Docker", level: 95, experience: "5+ years" },
      { name: "Podman", level: 85, experience: "2+ years" },
      { name: "Azure", level: 85, experience: "3+ years" },
      { name: "AWS", level: 80, experience: "3+ years" },
      { name: "RedHat OpenShift", level: 85, experience: "3+ years" }
    ]
  },
  {
    category: "Automation & Scripting",
    icon: Code,
    skills: [
      { name: "Python", level: 95, experience: "6+ years" },
      { name: "Bash/Shell", level: 90, experience: "8+ years" },
      { name: "Ansible", level: 85, experience: "3+ years" },
      { name: "Microsoft Copilot Studio", level: 80, experience: "1+ years" },
      { name: "Power Automate", level: 80, experience: "2+ years" },
      { name: "Selenium", level: 85, experience: "4+ years" },
      { name: "Lua", level: 70, experience: "1+ years" }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "Oracle", level: 90, experience: "8+ years" },
      { name: "MSSQL", level: 85, experience: "6+ years" },
      { name: "PostgreSQL", level: 90, experience: "5+ years" },
      { name: "MySQL", level: 85, experience: "6+ years" },
      { name: "Redis", level: 85, experience: "3+ years" },
      { name: "Knowledge Graph", level: 75, experience: "1+ years" }
    ]
  },
  {
    category: "DevOps & CI/CD",
    icon: GitBranch,
    skills: [
      { name: "Jenkins", level: 90, experience: "5+ years" },
      { name: "Git/GitHub", level: 95, experience: "8+ years" },
      { name: "GitLab CI", level: 85, experience: "4+ years" },
      { name: "GitHub Actions", level: 90, experience: "3+ years" },
      { name: "Argo CD", level: 80, experience: "2+ years" },
      { name: "Postman", level: 85, experience: "5+ years" },
      { name: "Trivy", level: 85, experience: "2+ years" }
    ]
  },
  {
    category: "AI/ML Technologies",
    icon: Layers,
    skills: [
      { name: "RAG (Retrieval-Augmented Generation)", level: 85, experience: "1+ years" },
      { name: "TensorFlow", level: 80, experience: "2+ years" },
      { name: "PyTorch", level: 75, experience: "2+ years" },
      { name: "scikit-learn", level: 85, experience: "3+ years" },
      { name: "Google Gemini API", level: 85, experience: "1+ years" },
      { name: "spaCy", level: 80, experience: "2+ years" },
      { name: "Gradio", level: 80, experience: "1+ years" }
    ]
  },
  {
    category: "Message Queues & Integration",
    icon: Server,
    skills: [
      { name: "RabbitMQ", level: 80, experience: "3+ years" },
      { name: "Apache Kafka", level: 75, experience: "2+ years" },
      { name: "REST APIs", level: 95, experience: "8+ years" },
      { name: "GraphQL", level: 75, experience: "2+ years" },
      { name: "Microservices", level: 85, experience: "4+ years" },
      { name: "Event-Driven Architecture", level: 85, experience: "3+ years" }
    ]
  },
  {
    category: "Core Competencies",
    icon: Shield,
    skills: [
      { name: "Root Cause Analysis", level: 95, experience: "8+ years" },
      { name: "ITIL Service Management", level: 90, experience: "6+ years" },
      { name: "Cost Optimization", level: 90, experience: "5+ years" },
      { name: "Disaster Recovery", level: 90, experience: "8+ years" },
      { name: "Team Leadership & Coaching", level: 85, experience: "4+ years" },
      { name: "SLO/SLI Management", level: 90, experience: "3+ years" }
    ]
  }
];
