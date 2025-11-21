"use client";
import { Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 relative text-center">
      <div className="bg-gradient-to-b from-transparent to-purple-900/10 p-1 rounded-[3rem] inline-block w-full max-w-3xl">
        <div className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Let's collaborate.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            I'm available for data analysis and machine learning roles.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-purple-50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-sm text-gray-600 pb-20">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.</p>
      </footer>
    </section>
  );
}