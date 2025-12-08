import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              Site Reliability Engineer specializing in Platform Monitoring, Kubernetes Orchestration, and AI-driven Process Automation. 
              Passionate about building reliable, scalable systems in Financial Technology.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-card"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-card"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-card"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;