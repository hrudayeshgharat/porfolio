"use client";
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ChatWidget from '@/components/ChatWidget';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <main className="bg-black min-h-screen text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden font-sans">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div 
          className="absolute w-[600px] h-[600px] bg-white/3 rounded-full blur-[100px] transition-all duration-75 ease-out mix-blend-overlay"
          style={{ 
            left: mousePos.x - 300, 
            top: mousePos.y - 300 
          }}
        />
      </div>

      <Navigation activeSection={activeSection} scrollTo={scrollTo} />
      <ChatWidget />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <Hero scrollTo={scrollTo} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}