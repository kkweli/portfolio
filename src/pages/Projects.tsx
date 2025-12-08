import { Github, ExternalLink, Code, Server, Monitor, Database, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/data/projects";
import { personalInfo } from "@/data/personal";

const Projects = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "SRE/Monitoring": return Monitor;
      case "Backend Reliability": return Server;
      case "Open Source/Java": return Code;
      case "Fintech/Enterprise": return Database;
      case "DevOps/Automation": return Shield;
      case "API Development": return Code;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "SRE/Monitoring": return "bg-success/10 text-success border-success/20";
      case "Backend Reliability": return "bg-primary/10 text-primary border-primary/20";
      case "Open Source/Java": return "bg-warning/10 text-warning border-warning/20";
      case "Fintech/Enterprise": return "bg-tech-blue/10 text-tech-blue border-tech-blue/20";
      case "DevOps/Automation": return "bg-destructive/10 text-destructive border-destructive/20";
      case "API Development": return "bg-accent/10 text-accent border-accent/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A showcase of my GitHub repositories demonstrating expertise in software engineering, 
            DevOps, SRE, and full-stack development. Each project reflects real-world problem-solving 
            and industry best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <Card key={index} className="project-card group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <Badge 
                            variant="outline" 
                            className={`mt-2 ${getCategoryColor(project.category)}`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button
                        asChild
                        className={project.demo ? "flex-1 group/btn" : "flex-1 group/btn"}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                          View Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          variant="outline"
                          asChild
                          className="flex-1 group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* GitHub Profile CTA */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <Card className="card-gradient shadow-card">
            <CardContent className="pt-8">
              <Github className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explore More on GitHub
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                These are just a few highlights from my portfolio. Visit my GitHub profile 
                to explore more projects, contributions to open-source software, and code samples 
                showcasing various technologies and architectural patterns.
              </p>
              <Button asChild className="btn-hero">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Technical Achievements */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Technical <span className="text-primary">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
              <Code className="h-12 w-12 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-lg font-semibold text-foreground">GitHub Projects</div>
              <p className="text-muted-foreground">
                From SRE tools to AI/ML applications, showcasing diverse technical expertise.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
              <Server className="h-12 w-12 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-lg font-semibold text-foreground">Featured Projects</div>
              <p className="text-muted-foreground">
                Production-ready applications with live demos and comprehensive documentation.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
              <Shield className="h-12 w-12 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-lg font-semibold text-foreground">System Reliability</div>
              <p className="text-muted-foreground">
                Maintaining high availability for mission-critical banking systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;