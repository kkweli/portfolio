import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data/personal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission (in real implementation, this would send to the email)
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent Successfully!",
        description: `Thank you ${formData.name}! I'll get back to you at ${personalInfo.email} soon.`,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: `There was an error sending your message. Please try again or email me directly at ${personalInfo.email}.`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: "Feel free to reach out for opportunities or collaborations"
    },
    {
      icon: MapPin,
      title: "Location",
      info: personalInfo.location,
      link: null,
      description: "Available for remote work and on-site consultations"
    },
    {
      icon: Github,
      title: "GitHub",
      info: personalInfo.github.replace('https://', ''),
      link: personalInfo.github,
      description: "Check out my latest projects and contributions"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Professional Profile",
      link: personalInfo.linkedin,
      description: "Let's connect professionally"
    }
  ];

  return (
    <div className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
            Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                        className="transition-all duration-300 focus:shadow-card"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                        className="transition-all duration-300 focus:shadow-card"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                      className="transition-all duration-300 focus:shadow-card"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or question..."
                      rows={6}
                      disabled={isSubmitting}
                      className="transition-all duration-300 focus:shadow-card resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-hero group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your message will be sent to {personalInfo.email}
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Let's Connect
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and software engineering.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{contact.title}</h3>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {contact.info}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{contact.info}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="project-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <h3 className="font-semibold text-foreground">Currently Available</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    I'm currently open to new opportunities and interesting projects. 
                    Whether you're looking for:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      Full-time software engineering roles
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      DevOps and SRE consulting
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      Technical architecture reviews
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      Mentoring and technical guidance
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Let's discuss how I can contribute to your team's success!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Response Time Note */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                don't hesitate to reach out directly at{" "}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  {personalInfo.email}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;