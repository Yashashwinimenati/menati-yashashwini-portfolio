import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { downloadResumeAsPDF } from '@/utils/resumeDownload';
import { 
  Download, 
  GraduationCap, 
  Award, 
  Target,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';

export function Resume() {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      await downloadResumeAsPDF();
      toast({
        title: "Success!",
        description: "Resume downloaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };
  const education = {
    degree: "Bachelor's of Technology in Computer Science and Engineering",
    institution: "MADANAPALLE INSTITUTE OF TECHNOLOGY & SCIENCE",
    location: "Madanapalle",
    duration: "2020-2024"
  };

  const achievements = [
    "Won Gen AI Hackathon in Nxtwave building full-stack project",
    "Certified by HackerRank on clearing 'Python(Basic)' skill test",
    "Certified by Coursera on 'Google Data Analytics'",
    "Certified by Azure Data Engineer by Microsoft",
    "Coordinated various department events as a team leader"
  ];

  const projects = [
    {
      title: "Stress Detection Project (Major)",
      description: "Detection of Stress in IT Employees using Machine Learning",
      details: [
        "The Stress can be detected as the employee gives the inputs like sleeping hours, Body Temperature, Heart rate, Oxygen, Working hours, Snoriq rate, Respiration rate, Headache",
        "The stress will be categorised as High stress, Low stress, Extreme stress, Positive stress",
        "Technology used: Python, Random Forest Algorithm"
      ],
      type: "Major Project"
    },
    {
      title: "Building a Chatbot using Machine Learning",
      description: "A chatbot built using ML algorithms",
      details: [
        "A chatbot is built using ML algorithm",
        "Technologies used: Python"
      ],
      type: "Minor Project"
    },
    {
      title: "Full Stack Projects",
      description: "Multiple full-stack web applications",
      details: [
        "AI Audio Analyser",
        "AI Resume Analyzer",
        "Blog content Generator",
        "Travel-gemini planner"
      ],
      type: "Portfolio Projects"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "SQL"],
    "Technologies": ["AI Tools", "Machine Learning", "Web Development"],
    "Soft Skills": ["Problem-Solving & Analytical Thinking", "Time Management", "Leadership", "Active Listening", "Adaptability", "Enthusiastic"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-portfolio-section py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">Resume</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive overview of my education, projects, and achievements
            </p>
            <Button 
              onClick={handleDownloadResume}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Objective */}
        <Card className="mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <Target className="w-6 h-6 mr-3 text-primary" />
              Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              AI enthusiast with proficiency in Java Full Stack and MERN Stack development, 
              specializing in Machine Learning. Passionate about building intelligent, 
              AI-integrated full-stack applications using modern AI tools. Active open-source 
              contributor committed to collaborative, impactful development.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-portfolio-section rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {education.degree}
              </h3>
              <p className="text-primary font-medium mb-2">{education.institution}</p>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {education.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {education.duration}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <Target className="w-6 h-6 mr-3 text-primary" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-portfolio-section rounded-lg p-6">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.type}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 font-medium">{project.description}</p>
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-muted-foreground flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-foreground">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-portfolio-section rounded-lg p-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Action */}
        <div className="text-center">
          <Card className="bg-hero-gradient border-0 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
              <p className="mb-6 opacity-90">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href="/contact">
                    Get In Touch
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="/projects">
                    View Projects
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}