"use client";
import { useState } from 'react';
import { ExternalLink, Sparkles, Loader2 } from 'lucide-react';
import { callGemini } from '@/lib/gemini';

export default function ProjectCard({ project, index }: { project: any, index: number }) {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeStack = async () => {
    if (analysis) return;
    setLoading(true);
    const prompt = `Analyze why the following tech stack is good for a "${project.title}": ${project.tags.join(", ")}. Be concise and professional.`;
    const result = await callGemini(prompt);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="group relative rounded-3xl bg-gray-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col">
      <a href={project.link} target="_blank" rel="noreferrer" className="block">
        <div className={`h-32 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
          <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <ExternalLink size={14} className="text-white" />
          </div>
        </div>
      </a>

      <div className="p-6 flex-grow">
        <a href={project.link} target="_blank" rel="noreferrer" className="block">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {project.title}
          </h3>
        </a>
        <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5 group-hover:border-white/10 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {analysis && (
          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-500/20 rounded-xl text-sm text-purple-200 animate-fadeIn">
            <Sparkles size={14} className="inline mr-2 text-purple-400" />
            {analysis}
          </div>
        )}
      </div>

      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={analyzeStack}
          disabled={loading || !!analysis}
          className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-gray-300 transition-colors flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} className="text-yellow-500" />}
          {analysis ? "Stack Analyzed" : "Why this stack?"}
        </button>
      </div>
    </div>
  );
}