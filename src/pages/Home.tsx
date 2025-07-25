import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '/lovable-uploads/c92ed6ab-36d6-4436-aebf-8c30bf304998.png';
import heroBackground from '/lovable-uploads/9c9d218c-4571-49ae-9eac-de7df6d34b52.png';

export function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Menati Yashashwini
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-6 text-white/90">
            I'm a{' '}
            <span className="text-accent font-semibold border-b-2 border-accent animate-pulse">
              Software Development Mentor, Nxtwave
            </span>
          </div>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            AI enthusiast with proficiency in Java Full Stack and MERN Stack development, 
            specializing in Machine Learning. Passionate about building intelligent, 
            AI-integrated full-stack applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent text-white hover:bg-accent/90 active:bg-accent focus:bg-accent px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent bg-accent/20 text-white hover:bg-accent hover:text-white active:bg-accent focus:bg-accent px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/resume">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/menati-yashashwini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Yashashwinimenati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:menatiyashashwini@gmail.com"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </div>
  );
}