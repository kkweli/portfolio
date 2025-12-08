export interface Education {
  degree: string;
  institution: string;
  status: "completed" | "in-progress";
  year?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  category: "technical" | "leadership" | "banking";
}

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Mount Kenya University",
    status: "in-progress"
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Mount Kenya University",
    status: "completed"
  }
];

export const certifications: Certification[] = [
  {
    name: "AI For Software Engineering",
    issuer: "Power Learn Project",
    year: "2025",
    category: "technical"
  },
  {
    name: "Developing Google SRE Culture",
    issuer: "Coursera",
    year: "2024",
    category: "technical"
  },
  {
    name: "SBG Team Leadership Programme",
    issuer: "Grow Consulting SA",
    year: "2024",
    category: "leadership"
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft Learn",
    year: "2023",
    category: "technical"
  },
  {
    name: "Google SRE: Measuring & Managing Reliability",
    issuer: "Coursera",
    year: "2021",
    category: "technical"
  },
  {
    name: "ITIL 4 Foundation",
    issuer: "Axelos PeopleCert",
    year: "2020",
    category: "technical"
  },
  {
    name: "T24 Interaction & Design Framework",
    issuer: "MCB Consulting",
    year: "2019",
    category: "banking"
  },
  {
    name: "Sustainable Finance Initiative",
    issuer: "SFI & Kenya Bankers",
    year: "2017",
    category: "banking"
  },
  {
    name: "Occupation & Health Safety",
    issuer: "DOSH",
    year: "2015 - 2022",
    category: "banking"
  },
  {
    name: "System Administration T24",
    issuer: "Jethro LTD",
    year: "2015",
    category: "banking"
  },
  {
    name: "AIX Administration",
    issuer: "Tri-Continental LTD",
    year: "2014",
    category: "technical"
  }
];

export const certificationsByCategory = {
  technical: certifications.filter(c => c.category === "technical"),
  leadership: certifications.filter(c => c.category === "leadership"),
  banking: certifications.filter(c => c.category === "banking")
};
