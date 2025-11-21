"use client";
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio-data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 relative">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-400">Data analysis and ML models I've built.</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}