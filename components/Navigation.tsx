"use client";
import { User, Code, Briefcase, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
};

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`relative group p-3 rounded-2xl transition-all duration-300 ease-out
      ${active
        ? 'bg-white text-black shadow-lg -translate-y-2 scale-110'
        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white hover:-translate-y-1'
      }`}
    aria-label={label}
  >
    <Icon size={24} strokeWidth={2} />
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-sm">
      {label}
    </span>
  </button>
);

export default function Navigation({ activeSection, scrollTo }: { activeSection: string, scrollTo: (id: string) => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
        <NavItem icon={User} label="About" active={activeSection === 'home' || activeSection === 'about'} onClick={() => scrollTo('home')} />
        <NavItem icon={Code} label="Projects" active={activeSection === 'projects'} onClick={() => scrollTo('projects')} />
        <NavItem icon={Briefcase} label="Experience" active={activeSection === 'experience'} onClick={() => scrollTo('experience')} />
        <div className="w-px h-6 bg-white/20 mx-1"></div>
        <NavItem icon={Mail} label="Contact" active={activeSection === 'contact'} onClick={() => scrollTo('contact')} />
      </div>
    </div>
  );
}