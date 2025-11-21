"use client";
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 relative items-start">
      <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Open to Opportunities
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6">
          Hello, I'm <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            {PERSONAL_INFO.name}.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          {PERSONAL_INFO.bio}
        </p>

        <div className="flex flex-wrap gap-4">
          <a 
            href="/resume.pdf" 
            download="Hrudayesh_Resume.pdf"
            className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>

          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-colors"
          >
            View Work
          </button>
          <a 
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank" 
            rel="noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Linkedin size={24} />
          </a>
           <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
         <ChevronDown size={32} />
      </div>
    </section>
  );
}