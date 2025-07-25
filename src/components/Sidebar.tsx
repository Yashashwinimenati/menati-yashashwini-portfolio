import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  FileText, 
  FolderOpen, 
  Code, 
  Mail,
  Github,
  Linkedin,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profilePhoto from '/lovable-uploads/c92ed6ab-36d6-4436-aebf-8c30bf304998.png';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Resume', href: '/resume', icon: FileText },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Skills', href: '/skills', icon: Code },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/menati-yashashwini', 
    icon: Linkedin 
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/Yashashwinimenati', 
    icon: Github 
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`fixed left-0 top-0 h-full bg-portfolio-sidebar border-r border-portfolio-sidebar/20 transition-all duration-300 z-50 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full p-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-20 h-20 mb-4 border-2 border-portfolio-sidebarAccent transition-all duration-300 hover:scale-110 hover:border-portfolio-sidebarAccent/80">
            <AvatarImage src={profilePhoto} alt="Menati Yashashwini" className="object-cover" />
            <AvatarFallback className="bg-portfolio-sidebarAccent text-white text-xl font-bold">
              MY
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <>
              <h2 className="text-xl font-bold text-portfolio-sidebarText mb-1">
                Menati Yashashwini
              </h2>
              <p className="text-sm text-portfolio-sidebarText/70 text-center">
                Full Stack Developer & AI Enthusiast
              </p>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'bg-slate-600 text-white'
                        : 'text-portfolio-sidebarText hover:bg-slate-100 hover:text-slate-800'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.name}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        {!isCollapsed && (
          <div className="mt-8 pt-4 border-t border-portfolio-sidebarText/20">
            <div className="space-y-2 text-sm text-portfolio-sidebarText/70">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-xs">menatiyashashwini@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 8374231402</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2 mt-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-portfolio-sidebarText hover:text-portfolio-sidebarAccent hover:bg-portfolio-sidebarAccent/20"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Collapse Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mt-4 text-portfolio-sidebarText hover:text-white hover:bg-portfolio-sidebarAccent/20"
        >
          {isCollapsed ? '→' : '←'}
        </Button>
      </div>
    </div>
  );
}