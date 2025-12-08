export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string;
  yearsExperience: number;
}

export const personalInfo: PersonalInfo = {
  name: "George Wanjohi",
  title: "Site Reliability Engineer | SRE Specialist",
  email: "wanjohi_gm@live.com",
  location: "Nairobi, Kenya",
  github: "https://github.com/kkweli",
  linkedin: "https://linkedin.com/in/wanjohigm",
  bio: "Site Reliability Engineer with 10+ years of experience in Financial Technology. Specializes in Platform Monitoring, Kubernetes Orchestration, and AI-driven Process Automation (RAG/ML). Proven track record of transitioning mission-critical banking systems from manual operations to automated pipelines, reducing toil and improving deployment consistency.",
  yearsExperience: 10
};
