export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "sre-stanbic",
    title: "Site Reliability Engineer",
    company: "Stanbic Bank",
    location: "Nairobi, Kenya",
    startDate: "April 2022",
    endDate: "Present",
    current: true,
    description: "Leading site reliability engineering initiatives, focusing on platform monitoring, observability culture, and performance optimization. Driving cost optimization by developing in-house monitoring solutions and establishing SLO-driven practices.",
    achievements: [
      "Monitoring Strategy & Implementation: Led the design and refinement of a comprehensive monitoring strategy utilizing IBM Instana, Grafana, and Prometheus. Reduced operational costs by building cost-effective, in-house monitoring solutions, minimizing reliance on expensive third-party tools",
      "Team Stewardship & Observability Culture: Evangelized key observability concepts, including error budgets, to balance operations and stability. Mentored the Monitoring Operations Center team, guiding them to adopt observability standards and better understand system performance",
      "Performance Optimization: Proactively identified and resolved performance bottlenecks through data-driven analysis on hybrid environments (on-prem/cloud), significantly improving system reliability",
      "Stakeholder Engagement: Collaborated with business stakeholders to establish Service Level Objectives (SLOs) and customer experience metrics, ensuring system performance directly supports business goals"
    ],
    technologies: ["IBM Instana", "Grafana", "Prometheus", "Kubernetes", "Docker", "Python", "Ansible"]
  },
  {
    id: "sysadmin-stanbic",
    title: "System Administrator",
    company: "Stanbic Bank",
    location: "Nairobi, Kenya",
    startDate: "January 2014",
    endDate: "May 2022",
    current: false,
    description: "Managed core banking system availability, led multiple T24 upgrades, and implemented disaster recovery procedures. Focused on process automation and enterprise backup systems management.",
    achievements: [
      "Core Banking Availability: Managed T24 system availability monitoring, support, and Close of Business reporting, ensuring consistent system performance",
      "Upgrade & Migration Leadership: Key member in multiple T24 upgrades (R08R, R13, R17, and R23). Currently leading the implementation of observability on the new Tafj framework",
      "Disaster Recovery: Conducted disaster recovery testing for core banking systems and channels, improving failover capabilities and organizational resilience",
      "Process Re-engineering: Managed enterprise backup systems and led process automation initiatives to enhance operational efficiency"
    ],
    technologies: ["T24", "Tafj", "Oracle", "AIX", "Shell Scripting", "Backup Systems"]
  },
  {
    id: "operations-stanbic",
    title: "Operations Officer",
    company: "Stanbic Bank",
    location: "Nairobi, Kenya",
    startDate: "January 2011",
    endDate: "January 2014",
    current: false,
    description: "Focused on process improvement and data integrity management. Automated statement dispatch processes and implemented quality data management procedures for compliance.",
    achievements: [
      "Process Improvement: Automated statement dispatch confirmation processes, reducing manual workloads and enhancing operational accuracy",
      "Data Integrity: Implemented quality data management procedures for customer tax audit compliance"
    ]
  }
];
