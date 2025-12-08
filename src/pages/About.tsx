import { MapPin, Calendar, Award, Code, Cloud, Shield, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { education, certificationsByCategory } from "@/data/education";

const About = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Site Reliability Engineering",
      description: "Expert in monitoring strategy design, observability culture, SLO/SLI management, and incident response for mission-critical banking systems."
    },
    {
      icon: Cloud,
      title: "Platform Monitoring & Observability",
      description: "Extensive experience with IBM Instana, Grafana, Prometheus, and building cost-effective in-house monitoring solutions."
    },
    {
      icon: Code,
      title: "Automation & AI/ML",
      description: "Specializing in Python automation, RAG implementations, process optimization, and AI-driven insights for operational efficiency."
    }
  ];

  return (
    <div className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">{personalInfo.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Professional Summary */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Location</div>
                      <div className="text-muted-foreground">{personalInfo.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Experience</div>
                      <div className="text-muted-foreground">{personalInfo.yearsExperience}+ Years</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Education</div>
                      <div className="text-muted-foreground">BSc Information Technology (In Progress)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Current Role</div>
                      <div className="text-muted-foreground">Site Reliability Engineer at Stanbic Bank</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specializing in Platform Monitoring, Kubernetes Orchestration, and AI-driven Process Automation in the Financial Technology sector. 
                Expert in driving cost optimization by developing in-house observability solutions and transitioning mission-critical banking systems 
                from manual operations to automated pipelines.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Areas of Expertise */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Areas of <span className="text-primary">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="skill-card group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="text-sm font-medium text-tech-gray">{exp.startDate} - {exp.endDate}</div>
                      <div className="text-sm text-muted-foreground flex items-center md:justify-end">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="skill-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-primary font-medium">
                      {edu.status === "in-progress" ? "Currently Pursuing" : "Completed"}
                      {edu.year && ` - ${edu.year}`}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technical Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technical</h4>
                <ul className="space-y-3">
                  {certificationsByCategory.technical.map((cert, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-medium text-foreground">{cert.name}</div>
                      <div className="text-muted-foreground">{cert.issuer} ({cert.year})</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Banking Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Banking & Finance</h4>
                <ul className="space-y-3">
                  {certificationsByCategory.banking.map((cert, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-medium text-foreground">{cert.name}</div>
                      <div className="text-muted-foreground">{cert.issuer} ({cert.year})</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leadership Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Leadership</h4>
                <ul className="space-y-3">
                  {certificationsByCategory.leadership.map((cert, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-medium text-foreground">{cert.name}</div>
                      <div className="text-muted-foreground">{cert.issuer} ({cert.year})</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;