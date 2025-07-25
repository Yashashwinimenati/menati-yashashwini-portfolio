import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Code, 
  Globe, 
  Heart, 
  GraduationCap,
  Target,
  Coffee,
  BookOpen
} from 'lucide-react';

export function About() {
  const interests = [
    { name: 'Learning Languages', icon: Globe },
    { name: 'Volunteering', icon: Heart },
    { name: 'AI Projects', icon: Brain },
    { name: 'Open Source', icon: Code },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to create cutting-edge solutions.'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analytical thinking combined with creative approaches to tackle complex challenges.'
    },
    {
      icon: Heart,
      title: 'Collaboration',
      description: 'Committed to collaborative development and active contribution to the tech community.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Dedicated to staying updated with emerging technologies and best practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-portfolio-section py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate AI enthusiast and full stack developer with a strong foundation in 
              modern web technologies and machine learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-2xl p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <GraduationCap className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-2xl font-semibold">Computer Science</p>
                  <p className="text-lg opacity-90">Graduate</p>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Full Stack Developer & AI Enthusiast
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a recent Computer Science graduate from Madanapalle Institute of Technology & Science 
                  with a deep passion for artificial intelligence and full-stack development. My journey in 
                  technology began with curiosity about how intelligent systems work, leading me to specialize 
                  in machine learning and modern web development.
                </p>
                
                <p>
                  With proficiency in Java Full Stack and MERN Stack development, I focus on creating 
                  intelligent, AI-integrated applications that solve real-world problems. My experience 
                  spans from developing stress detection systems using machine learning to building 
                  responsive full-stack applications.
                </p>

                <p>
                  I believe in collaborative development and am committed to contributing to the 
                  open-source community while continuously learning and adapting to new technologies.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-card border-border">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">2024</div>
                    <div className="text-sm text-muted-foreground">Graduate</div>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">My Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide my work and development philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-portfolio-section">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Personal Interests</h2>
            <p className="text-xl text-muted-foreground">
              Beyond coding, here's what keeps me passionate and motivated
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <Badge 
                key={interest.name} 
                variant="secondary" 
                className="px-6 py-3 text-lg bg-card border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
              >
                <interest.icon className="w-5 h-5 mr-2" />
                {interest.name}
              </Badge>
            ))}
          </div>

          {/* Fun Fact */}
          <div className="mt-16 text-center">
            <Card className="bg-card border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Fun Fact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new programming languages, 
                  contributing to open-source projects, or volunteering in my community. 
                  I believe that technology should be used to make a positive impact on society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}