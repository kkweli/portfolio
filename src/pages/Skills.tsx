import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Monitor,
  Shield,
  Layers
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/data/skills";
import { certificationsByCategory } from "@/data/education";
import { personalInfo } from "@/data/personal";

const Skills = () => {
  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-success";
    if (level >= 80) return "bg-primary";
    if (level >= 70) return "bg-warning";
    return "bg-muted";
  };

  return (
    <div className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical <span className="text-primary">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive overview of my technical expertise, built through {personalInfo.yearsExperience}+ years 
            of hands-on experience in Site Reliability Engineering, Platform Monitoring, and Financial Technology.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="skill-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center mr-3">
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <div className="text-right">
                            <span className="text-xs text-muted-foreground">
                              {skill.experience}
                            </span>
                            <div className="text-xs font-semibold text-primary">
                              {skill.level}%
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress
                            value={skill.level}
                            className="h-2"
                          />
                          <div
                            className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-300 ${getSkillColor(skill.level)}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center">
                  <Monitor className="mr-3 h-5 w-5 text-primary" />
                  SRE & Technical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {certificationsByCategory.technical.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <div>
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">{cert.issuer} ({cert.year})</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center">
                  <Database className="mr-3 h-5 w-5 text-primary" />
                  Banking & Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {certificationsByCategory.banking.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <div>
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">{cert.issuer} ({cert.year})</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground flex items-center">
                  <Shield className="mr-3 h-5 w-5 text-primary" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  {certificationsByCategory.leadership.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <div>
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">{cert.issuer} ({cert.year})</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="card-gradient shadow-card">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying at the forefront. 
                I regularly invest time in learning new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community. My goal is to build systems that 
                are not just functional, but elegant, maintainable, and future-proof.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;