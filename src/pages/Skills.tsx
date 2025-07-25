import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Brain, 
  Wrench, 
  Users, 
  Target,
  Lightbulb,
  Clock,
  CheckCircle
} from 'lucide-react';

export function Skills() {
  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, description: "Machine Learning, Data Analysis, Backend Development" },
        { name: "Java", level: 85, description: "Full Stack Development, Object-Oriented Programming" },
        { name: "JavaScript", level: 80, description: "Frontend & Backend Development, React, Node.js" },
        { name: "SQL", level: 75, description: "Database Design, Query Optimization, Data Manipulation" }
      ]
    },
    {
      category: "Frameworks & Technologies",
      icon: Wrench,
      skills: [
        { name: "React.js", level: 85, description: "Component-based UI Development, State Management" },
        { name: "Node.js", level: 80, description: "Server-side Development, API Creation" },
        { name: "Express.js", level: 75, description: "Web Application Framework, REST APIs" },
        { name: "MongoDB", level: 70, description: "NoSQL Database, Document-based Storage" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 85, description: "Supervised Learning, Classification, Regression" },
        { name: "Random Forest", level: 80, description: "Ensemble Learning, Decision Trees" },
        { name: "Data Analysis", level: 85, description: "Statistical Analysis, Pattern Recognition" },
        { name: "AI Integration", level: 75, description: "AI APIs, Intelligent Applications" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: Database,
      skills: [
        { name: "Git/GitHub", level: 80, description: "Version Control, Collaboration, Open Source" },
        { name: "Azure", level: 70, description: "Cloud Computing, Data Engineering" },
        { name: "Google Analytics", level: 75, description: "Data Analytics, Insights Generation" },
        { name: "VS Code", level: 90, description: "Development Environment, Extensions" }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Problem-Solving & Analytical Thinking",
      icon: Lightbulb,
      description: "Breaking down complex problems into manageable solutions",
      level: 90
    },
    {
      name: "Time Management",
      icon: Clock,
      description: "Efficient project planning and deadline management",
      level: 85
    },
    {
      name: "Leadership",
      icon: Users,
      description: "Team coordination and department event management",
      level: 80
    },
    {
      name: "Active Listening",
      icon: Target,
      description: "Understanding requirements and stakeholder needs",
      level: 85
    },
    {
      name: "Adaptability",
      icon: CheckCircle,
      description: "Learning new technologies and adapting to changes",
      level: 90
    }
  ];

  const certifications = [
    {
      name: "HackerRank Python (Basic)",
      issuer: "HackerRank",
      type: "Programming"
    },
    {
      name: "Google Data Analytics",
      issuer: "Coursera",
      type: "Data Analytics"
    },
    {
      name: "Azure Data Engineer",
      issuer: "Microsoft",
      type: "Cloud Computing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-portfolio-section py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, soft skills, and professional certifications 
              that enable me to build innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Technical Skills</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-foreground">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <span className="text-sm text-primary font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-secondary"
                      />
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-portfolio-section">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Soft Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground">Proficiency</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-secondary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Certifications</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground mb-3">{cert.issuer}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {cert.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Always Learning, Always Growing</h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Technology evolves rapidly, and so do I. I'm committed to continuous learning and 
            staying updated with the latest trends in AI, machine learning, and full-stack development.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Technologies & Frameworks</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-lg opacity-90">Professional Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}