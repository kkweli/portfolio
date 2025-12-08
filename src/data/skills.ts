import { LucideIcon, Code, Server, Cloud, Database, GitBranch, Monitor, Shield, Layers } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  tag: string;
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
      { name: "IBM Instana", level: 90, tag: "Emerging" },
      { name: "Grafana", level: 95, tag: "Modern Standard" },
      { name: "Prometheus", level: 95, tag: "Modern Standard" },
      { name: "Dynatrace", level: 80, tag: "Specialized" },
      { name: "Splunk", level: 85, tag: "Specialized" },
      { name: "AppDynamics", level: 75, tag: "Specialized" },
      { name: "Loki", level: 85, tag: "Emerging" },
      { name: "Jaeger", level: 80, tag: "Emerging" },
      { name: "OpenTelemetry", level: 85, tag: "Emerging" }
    ]
  },
  {
    category: "Cloud & Container Orchestration",
    icon: Cloud,
    skills: [
      { name: "Kubernetes", level: 90, tag: "Modern Standard" },
      { name: "Docker", level: 95, tag: "Modern Standard" },
      { name: "Podman", level: 85, tag: "Emerging" },
      { name: "Azure", level: 85, tag: "Modern Standard" },
      { name: "AWS", level: 80, tag: "Modern Standard" },
      { name: "RedHat OpenShift", level: 85, tag: "Modern Standard" }
    ]
  },
  {
    category: "Automation & Scripting",
    icon: Code,
    skills: [
      { name: "Python", level: 95, tag: "Modern Standard" },
      { name: "Bash/Shell", level: 90, tag: "Core" },
      { name: "Ansible", level: 85, tag: "Modern Standard" },
      { name: "Microsoft Copilot Studio", level: 80, tag: "Emerging" },
      { name: "Power Automate", level: 80, tag: "Modern Standard" },
      { name: "Selenium", level: 85, tag: "Modern Standard" },
      { name: "Lua", level: 70, tag: "Specialized" }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "Oracle", level: 90, tag: "Core" },
      { name: "MSSQL", level: 85, tag: "Core" },
      { name: "PostgreSQL", level: 90, tag: "Modern Standard" },
      { name: "MySQL", level: 85, tag: "Core" },
      { name: "Redis", level: 85, tag: "Modern Standard" },
      { name: "Knowledge Graph", level: 75, tag: "Emerging" }
    ]
  },
  {
    category: "DevOps & CI/CD",
    icon: GitBranch,
    skills: [
      { name: "Jenkins", level: 90, tag: "Core" },
      { name: "Git/GitHub", level: 95, tag: "Core" },
      { name: "GitLab CI", level: 85, tag: "Modern Standard" },
      { name: "GitHub Actions", level: 90, tag: "Modern Standard" },
      { name: "Argo CD", level: 80, tag: "Emerging" },
      { name: "Postman", level: 85, tag: "Modern Standard" },
      { name: "Trivy", level: 85, tag: "Emerging" }
    ]
  },
  {
    category: "AI/ML Technologies",
    icon: Layers,
    skills: [
      { name: "RAG (Retrieval-Augmented Generation)", level: 85, tag: "Emerging" },
      { name: "TensorFlow", level: 80, tag: "Modern Standard" },
      { name: "PyTorch", level: 75, tag: "Modern Standard" },
      { name: "scikit-learn", level: 85, tag: "Modern Standard" },
      { name: "Google Gemini API", level: 85, tag: "Emerging" },
      { name: "spaCy", level: 80, tag: "Specialized" },
      { name: "Gradio", level: 80, tag: "Emerging" }
    ]
  },
  {
    category: "Message Queues & Integration",
    icon: Server,
    skills: [
      { name: "RabbitMQ", level: 80, tag: "Modern Standard" },
      { name: "Apache Kafka", level: 75, tag: "Modern Standard" },
      { name: "REST APIs", level: 95, tag: "Core" },
      { name: "GraphQL", level: 75, tag: "Emerging" },
      { name: "Microservices", level: 85, tag: "Modern Standard" },
      { name: "Event-Driven Architecture", level: 85, tag: "Modern Standard" }
    ]
  },
  {
    category: "Core Competencies",
    icon: Shield,
    skills: [
      { name: "Root Cause Analysis", level: 95, tag: "Core" },
      { name: "ITIL Service Management", level: 90, tag: "Core" },
      { name: "Cost Optimization", level: 90, tag: "Modern Standard" },
      { name: "Disaster Recovery", level: 90, tag: "Core" },
      { name: "Team Leadership & Coaching", level: 85, tag: "Modern Standard" },
      { name: "SLO/SLI Management", level: 90, tag: "Modern Standard" }
    ]
  }
];
