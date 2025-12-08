import { LucideIcon, Monitor, Activity, Brain, GitBranch } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "sre-consulting",
    title: "SRE Consulting & Implementation",
    description: "Transform your operations with Site Reliability Engineering best practices. From monitoring strategy design to incident management, I help organizations build reliable, scalable systems.",
    icon: Monitor,
    features: [
      "Monitoring strategy design and implementation",
      "Observability culture adoption and team mentoring",
      "SLO/SLI definition and error budget management",
      "Incident management and post-mortem processes",
      "On-call rotation and escalation procedures",
      "Capacity planning and performance optimization"
    ]
  },
  {
    id: "observability-solutions",
    title: "Observability & Monitoring Solutions",
    description: "Build cost-effective, comprehensive monitoring solutions using open-source tools. Reduce operational costs while improving system visibility and reliability.",
    icon: Activity,
    features: [
      "Prometheus and Grafana setup and configuration",
      "Custom dashboard design and implementation",
      "Alert management and notification systems",
      "Log aggregation with Loki and ELK stack",
      "Distributed tracing with Jaeger and OpenTelemetry",
      "Cost optimization by replacing expensive third-party tools"
    ]
  },
  {
    id: "ai-ml-integration",
    title: "AI/ML Integration & Automation",
    description: "Leverage AI and machine learning to automate processes and gain insights. From RAG implementations to process automation, bring intelligence to your operations.",
    icon: Brain,
    features: [
      "RAG (Retrieval-Augmented Generation) implementation",
      "Process automation with Python and AI",
      "ML model deployment and integration",
      "AI-powered insights and recommendations",
      "Chatbot and virtual assistant development",
      "Automated testing and quality assurance"
    ]
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD Pipeline Setup",
    description: "Streamline your development and deployment processes with modern DevOps practices. Build automated pipelines that reduce toil and improve deployment consistency.",
    icon: GitBranch,
    features: [
      "Jenkins and GitLab CI/CD configuration",
      "GitHub Actions workflow automation",
      "Container orchestration with Kubernetes",
      "Infrastructure as Code with Ansible and Terraform",
      "Deployment automation and rollback strategies",
      "Security scanning with Trivy and vulnerability management"
    ]
  }
];
