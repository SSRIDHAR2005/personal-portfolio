import SplitText from "./SplitText";
import BlurSection from "./BlurSection";
import Particles from "./Particles";
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Award,
  Trophy,
  Calendar,
  Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const projects = [
    {
      title: 'Todo App',
      description: 'A full-featured todo application built with MERN stack. Features include task management, categories, and real-time updates.',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern design principles, smooth animations, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React', 'Tailwind', 'TypeScript', 'Vite']
    },
    {
      title: 'Blog Application',
      description: 'A full-stack blogging platform with user authentication, rich text editor, and content management system.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React', 'Node.js', 'PostgreSQL', 'JWT']
    }
  ];

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.'
    },
    {
      title: 'Subject Matter Expert',
      company: 'LetsUpgrade',
      period: '2021 - 2023',
      description: 'Provided technical expertise and training in full-stack development technologies.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2019 - 2021',
      description: 'Developed and maintained web applications using modern JavaScript frameworks.'
    }
  ];

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js', level: 90, color: 'bg-green-500' },
    { name: 'TypeScript', level: 85, color: 'bg-purple-500' },
    { name: 'MongoDB', level: 80, color: 'bg-emerald-500' },
    { name: 'AWS', level: 75, color: 'bg-orange-500' },
    { name: 'DevOps', level: 70, color: 'bg-red-500' }
  ];

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024',
      icon: Award,
      color: 'text-orange-500'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2024',
      icon: Award,
      color: 'text-blue-500'
    },
    {
      title: 'Hackathon Winner 2024',
      issuer: 'Tech Conference',
      year: '2024',
      icon: Trophy,
      color: 'text-yellow-500'
    }
  ];
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};


  return (
  <div className="relative min-h-screen overflow-hidden">
    {/* 🔹 Particle Background */}
    <div className="fixed inset-0 -z-10 bg-black">
  <Particles particleCount={200} particleColor="#ffffff" />
</div>

    {/* 🔸 Main Content */}
    <div className="min-h-screen bg-transparent relative z-10">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              S Sridhar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <SplitText
  text="Hi, I'm S Sridhar"
  className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subject Matter Expert | JAVA & MERN FSD Instructor | DevOps Engineer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                See My Work
                <ChevronDown className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <Mail className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      

{/* About Section */}
<section id="about" className="py-20 relative">
  <BlurSection delay={100} direction="bottom">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Passionate about creating innovative solutions and mentoring the next generation of developers
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white/20"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm a self-motivated and detail-oriented web expert and instructor with a passion for creating 
            a bright future for my learners. I specialize in creating beautiful, responsive, and user-friendly websites.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in Full Stack Development with expertise in cloud technologies and DevOps, 
            always staying updated with the latest industry trends and best practices.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
              <MapPin className="text-blue-400 mb-2" size={20} />
              <div className="text-white font-semibold">Location</div>
              <div className="text-gray-400">Chennai, India</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
              <Mail className="text-purple-400 mb-2" size={20} />
              <div className="text-white font-semibold">Email</div>
              <div className="text-gray-400">sridhars0305@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BlurSection>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
            <p className="text-gray-400 text-lg">My professional journey and achievements</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                
                <div className={`flex-1 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-400 text-lg">Some of my recent work and contributions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                    <ExternalLink size={16} className="text-white" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills</h2>
            <p className="text-gray-400 text-lg">Technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Certificates & Achievements</h2>
            <p className="text-gray-400 text-lg">Recognition of my professional accomplishments</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`${cert.color}`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-purple-400">
                  <Calendar size={16} />
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Me</h2>
            <p className="text-gray-400 text-lg">Let's work together on your next project</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">sridhars0305@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Phone className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">+91 9259124051</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a href="https://www.linkedin.com/in/s-sridhar-2553a2276/" className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors duration-200">
                    <Linkedin className="text-blue-400" size={20} />
                  </a>
                  <a href="https://github.com/SSRIDHAR2005/sridhar-s-tech" className="p-3 bg-gray-600/20 rounded-lg hover:bg-gray-600/30 transition-colors duration-200">
                    <Github className="text-gray-400" size={20} />
                  </a>
                  <a href="#" className="p-3 bg-blue-400/20 rounded-lg hover:bg-blue-400/30 transition-colors duration-200">
                    <Twitter className="text-blue-400" size={20} />
                  </a>
                  <a href="#" className="p-3 bg-pink-600/20 rounded-lg hover:bg-pink-600/30 transition-colors duration-200">
                    <Instagram className="text-pink-400" size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="name@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 S Sridhar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default App;