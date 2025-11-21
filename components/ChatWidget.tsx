"use client";
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronDown, Sparkles } from 'lucide-react';
import { callGemini } from '@/lib/gemini';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS } from '@/data/portfolio-data';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'system', text: "Hi! I'm Hrudayesh's AI Assistant. Ask me anything about his skills or experience." }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const systemContext = `You are an AI assistant for Hrudayesh Gharat's portfolio. 
    Use this resume data to answer: ${JSON.stringify({ PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS })}. 
    Keep answers brief, professional, and friendly.`;

    const reply = await callGemini(userMsg, systemContext);
    
    setMessages(prev => [...prev, { role: 'system', text: reply }]);
    setIsTyping(false);
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slideUp">
          <div className="p-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-purple-400" /> AI Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={18} /></button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-purple-600 text-white rounded-tr-sm' : 'bg-white/10 text-gray-200 rounded-tl-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-gray-500 animate-pulse ml-2">Typing...</div>}
          </div>
          <div className="p-3 bg-white/5 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my skills..."
              className="flex-1 bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
            />
            <button onClick={handleSend} className="p-2 bg-purple-600 rounded-xl text-white hover:bg-purple-500"><Send size={18} /></button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 hover:scale-110 transition-transform"
      >
        {isOpen ? <ChevronDown size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}