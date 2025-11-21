"use client";
import { Terminal, GraduationCap, Award } from 'lucide-react';
import { SKILLS, EDUCATION, CERTIFICATIONS } from '@/data/portfolio-data';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 relative">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-purple-500" />
            Technical Skills
          </h2>
          <div className="space-y-8">
            {SKILLS.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm hover:bg-white/10 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-blue-400" /> Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="border-l-2 border-blue-500/30 pl-4">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.school}</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{edu.year}</span>
                    <span className="text-blue-300">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-yellow-500" /> Certifications
             </h3>
             <ul className="space-y-2">
               {CERTIFICATIONS.map((cert, i) => (
                 <li key={i} className="text-gray-300 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                   {cert}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}