import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import { personalInfo } from "@/data/personal";
import { services } from "@/data/services";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional software engineering workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                <span className="text-primary">{personalInfo.name}</span>
              </h1>
              <div className="text-xl md:text-2xl text-tech-gray font-medium">
                {personalInfo.title}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {personalInfo.yearsExperience}+ years of experience in Financial Technology. Specializing in Platform Monitoring, 
                Kubernetes Orchestration, and AI-driven Process Automation. Passionate about turning complex challenges into elegant solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/about">
                <Button className="btn-hero group">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="btn-secondary group">
                  View My Projects
                  <Github className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Building Reliable Systems in Financial Technology
              </h2>
              <p className="text-xl text-muted-foreground">
                Currently leading Site Reliability Engineering initiatives at Stanbic Bank, with a passion for observability, automation, and cost-effective monitoring solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
                <div className="text-4xl font-bold text-primary">{personalInfo.yearsExperience}+</div>
                <div className="text-lg font-semibold text-foreground">Years Experience</div>
                <p className="text-muted-foreground">
                  Deep expertise in Site Reliability Engineering, Platform Monitoring, and Financial Technology.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-lg font-semibold text-foreground">Projects Delivered</div>
                <p className="text-muted-foreground">
                  From observability stacks to AI/ML applications, delivering innovative solutions.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-lg font-semibold text-foreground">System Uptime</div>
                <p className="text-muted-foreground">
                  Ensuring high availability and performance for mission-critical banking systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Services <span className="text-primary">Offered</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leveraging {personalInfo.yearsExperience}+ years of experience to help organizations build reliable, scalable, and cost-effective systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2 mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="btn-hero group">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;