"use client";
import { EXPERIENCES } from '@/data/portfolio-data';

const TimelineItem = ({ exp }: { exp: any }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Desktop Layout */}
    <div className="hidden md:flex items-center justify-between group">
      <div className="w-5/12 text-right pr-8">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{exp.company}</h3>
        <p className="text-sm text-gray-400 mb-1">{exp.period}</p>
      </div>
      
      {/* Center Line & Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-800 border-2 border-purple-500 z-10 group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300"></div>
      
      <div className="w-5/12 pl-8">
        <h4 className="text-lg font-semibold text-gray-200 mb-2">{exp.role}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="md:hidden pb-12 relative border-l-2 border-gray-800 last:border-0 ml-2">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-purple-500"></div>
      <div className="pl-6">
        <span className="text-xs font-mono text-purple-400 mb-1 block">{exp.period}</span>
        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
        <h4 className="text-md font-medium text-gray-300 mb-2">{exp.role}</h4>
        <p className="text-sm text-gray-400">{exp.description}</p>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 relative">
      <h2 className="text-4xl font-bold mb-16 text-center">Experience Timeline</h2>
      <div className="relative max-w-4xl mx-auto w-full">
        {/* Central Line for desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 hidden md:block"></div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}