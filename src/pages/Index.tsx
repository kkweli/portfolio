import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, Github, Linkedin, Mail, ChevronDown, Monitor, Activity, Brain, GitBranch,
  MapPin, Calendar, Shield, Cloud, Code, Award, ExternalLink, Send, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { certificationsByCategory } from "@/data/education";

const Index = () => {
  const { toast } = useToast();
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  // Contact form state
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const errors = { name: "", email: "", message: "" };
    let hasErrors = false;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      toast({ title: "Validation Error", description: "Please fix the errors in the form.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/xanyqvvb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
          _subject: `[Portfolio - HIGH PRIORITY] ${formData.subject || 'New Contact Form Submission'}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({ 
          title: "Message Sent Successfully!", 
          description: "I'll get back to you soon." 
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormErrors({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again or email me directly.", 
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "SRE/Monitoring": "bg-success/10 text-success border-success/30",
      "Full-Stack": "bg-primary/10 text-primary border-primary/30",
      "AI/ML": "bg-warning/10 text-warning border-warning/30",
      "API Development": "bg-accent/10 text-accent border-accent/30",
      "DevOps": "bg-destructive/10 text-destructive border-destructive/30",
    };
    return colors[category] || "bg-muted/10 text-muted-foreground border-muted/30";
  };

  const allCertifications = [
    ...certificationsByCategory.technical,
    ...certificationsByCategory.leadership,
    ...certificationsByCategory.banking
  ];

  return (
    <div className="bg-background">
      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 border border-border/50 rounded-full backdrop-blur-sm">
              <span className="text-primary font-mono text-sm">~/portfolio</span>
              <span className="text-muted-foreground font-mono text-sm mx-2">$</span>
              <span className="text-foreground font-mono text-sm">whoami</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
              </h1>
              <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-muted-foreground font-mono">
                <span className="text-primary">&gt;</span>
                <span>Site Reliability Engineer</span>
                <span className="terminal-cursor" />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {personalInfo.yearsExperience}+ years building reliable systems in Financial Technology. 
                Specializing in Platform Monitoring, Kubernetes Orchestration, and AI-driven automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="btn-primary group" onClick={() => scrollToSection("projects")}>
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 pt-6">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
                { icon: Mail, href: `mailto:${personalInfo.email}` }
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="p-3 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => scrollToSection("about")} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <ChevronDown className="h-8 w-8 text-primary/60" />
        </button>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 border border-border/50 rounded-full mb-6">
              <span className="text-primary font-mono text-sm">~/about</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
          </div>

          {/* Expertise */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Site Reliability Engineering", desc: "Monitoring strategy, SLO/SLI management, incident response." },
                { icon: Cloud, title: "Platform Monitoring", desc: "IBM Instana, Grafana, Prometheus, cost-effective solutions." },
                { icon: Code, title: "Automation & AI/ML", desc: "Python automation, RAG implementations, AI-driven insights." }
              ].map((item, i) => (
                <div key={i} className="glass-card glow-border p-6 text-center">
                  <div className="inline-flex p-3 bg-primary/10 border border-primary/30 rounded-lg mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="glass-card glow-border p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 md:mt-0">
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{exp.startDate} - {exp.endDate}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {exp.achievements.slice(0, 3).map((a, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2">▹</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Training & Certifications</h3>
            
            {/* Technical Certifications */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Recent & Advanced Tech</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsByCategory.technical.map((cert, i) => (
                  <div key={i} className="glass-card p-4 flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 border border-primary/30 rounded-lg flex-shrink-0">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground">{cert.name}</h5>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Certifications */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Leadership</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsByCategory.leadership.map((cert, i) => (
                  <div key={i} className="glass-card p-4 flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 border border-primary/30 rounded-lg flex-shrink-0">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground">{cert.name}</h5>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banking & Governance Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Banking & Governance</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsByCategory.banking.map((cert, i) => (
                  <div key={i} className="glass-card p-4 flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 border border-primary/30 rounded-lg flex-shrink-0">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground">{cert.name}</h5>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section id="skills" ref={skillsRef} className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 border border-border/50 rounded-full mb-6">
              <span className="text-primary font-mono text-sm">~/skills</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground">Built through {personalInfo.yearsExperience}+ years of hands-on experience</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, ci) => {
              const IconComponent = category.icon;
              return (
                <div key={ci} className="glass-card glow-border p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-primary/10 border border-primary/30 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, si) => (
                      <div key={si}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            skill.tag === "Core" ? "bg-blue-500/10 text-blue-400 border border-blue-500/30" :
                            skill.tag === "Modern Standard" ? "bg-green-500/10 text-green-400 border border-green-500/30" :
                            skill.tag === "Emerging" ? "bg-purple-500/10 text-purple-400 border border-purple-500/30" :
                            "bg-orange-500/10 text-orange-400 border border-orange-500/30"
                          }`}>{skill.tag}</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
                            style={{
                              width: skillsVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${(ci * 0.1) + (si * 0.05)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 border border-border/50 rounded-full mb-6">
              <span className="text-primary font-mono text-sm">~/projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground">SRE, observability, AI/ML, and full-stack development</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="glass-card glow-border p-6 flex flex-col hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" /><span>Code</span>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" /><span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary">
                <Github className="mr-2 h-5 w-5" />View More on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground">Have a project in mind? Let's discuss.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Links - Simple and Direct */}
            <div className="mb-12 text-center">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://github.com/kkweli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/wanjohigm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form - Simplified */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Send a Message</h3>
              <form 
                action="https://formspree.io/f/xanyqvvb" 
                method="POST" 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <input type="hidden" name="_subject" value="[Portfolio - HIGH PRIORITY] New Contact Form Submission" />
                <input type="hidden" name="_next" value="https://kkweli.github.io/portfolio/#contact" />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
