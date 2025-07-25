import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Brain, 
  MessageSquare, 
  Music, 
  FileText, 
  Plane,
  Activity
} from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Topic to Blog Blast",
      description: "AI-powered blog content generation platform that transforms topics into engaging articles",
      longDescription: "Advanced content creation tool that uses artificial intelligence to generate high-quality, SEO-optimized blog content from simple topics, helping content creators produce engaging articles efficiently.",
      category: "Full Stack + AI",
      type: "Live Project",
      technologies: ["React", "AI APIs", "Content Generation", "SEO Tools"],
      features: [
        "Topic-to-blog transformation",
        "AI-powered content generation",
        "SEO optimization",
        "Multiple content formats"
      ],
      icon: Brain,
      color: "from-orange-500 to-red-500",
      liveUrl: "https://topic-to-blog-blast.lovable.app",
      githubUrl: "https://github.com/Yashashwinimenati/topic-to-blog-blast"
    },
    {
      title: "Explorer AI Compass",
      description: "Intelligent travel planning application with AI-powered itinerary generation",
      longDescription: "Smart travel planning platform that creates personalized itineraries using AI, considering user preferences, budget, and real-time travel information for seamless trip planning.",
      category: "Full Stack + AI",
      type: "Live Project",
      technologies: ["React", "Node.js", "Google APIs", "AI Planning", "Maps Integration"],
      features: [
        "AI-generated itineraries",
        "Real-time travel updates",
        "Budget optimization",
        "Local recommendations"
      ],
      icon: Plane,
      color: "from-cyan-500 to-blue-500",
      liveUrl: "https://explorer-ai-compass.lovable.app",
      githubUrl: "https://github.com/Yashashwinimenati/explorer-ai-compass.git"
    },
    {
      title: "ProcureBridge AI Insights",
      description: "AI-powered procurement management platform for streamlined business operations",
      longDescription: "Comprehensive procurement solution that leverages artificial intelligence to optimize supplier management, cost analysis, and purchase decisions for enhanced business efficiency.",
      category: "Full Stack + AI",
      type: "Live Project",
      technologies: ["React", "AI Analytics", "Business Intelligence", "Data Visualization"],
      features: [
        "AI-driven procurement insights",
        "Supplier performance analytics",
        "Cost optimization suggestions",
        "Real-time procurement tracking"
      ],
      icon: Activity,
      color: "from-purple-500 to-indigo-500",
      liveUrl: "https://procure-bridge-ai-insights.lovable.app/"
    },
    {
      title: "Create Blueprint AI",
      description: "AI-powered Product Requirements Document (PRD) generation platform",
      longDescription: "Intelligent tool that assists product managers and teams in creating comprehensive PRDs using AI, streamlining the product development process with structured documentation.",
      category: "Full Stack + AI",
      type: "Live Project",
      technologies: ["React", "AI Document Generation", "Product Management", "Collaborative Tools"],
      features: [
        "AI-assisted PRD creation",
        "Template-based documentation",
        "Collaborative editing",
        "Export functionality"
      ],
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://create-blueprint-ai.lovable.app",
      githubUrl: "https://github.com/Yashashwinimenati/create-blueprint-ai.git"
    }
  ];

  const categories = ["All", "Full Stack + AI"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-portfolio-section py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work in full-stack development, machine learning, and AI integration. 
              Each project represents a unique challenge and innovative solution.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="secondary"
                className="px-6 py-2 text-sm bg-card border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-500 group overflow-hidden hover:scale-[1.02] animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-border hover:bg-secondary transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-portfolio-section">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Want to see more?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            These are just a few highlights from my portfolio. I'm constantly working on new projects 
            and experimenting with cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <a href="https://github.com/Yashashwinimenati" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary px-8"
              asChild
            >
              <a href="/contact">
                <ExternalLink className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}