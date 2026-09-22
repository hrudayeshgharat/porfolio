"use client";
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { callGemini } from '@/lib/gemini';
export default function ChatWidget(){
 const [open,setOpen]=useState(false);const [input,setInput]=useState('');const [busy,setBusy]=useState(false);
 const [messages,setMessages]=useState([{role:'assistant',text:'Hi! Ask me about Hrudayesh’s projects, skills, or experience.'}]);
 const scroll=useRef<HTMLDivElement>(null);const field=useRef<HTMLInputElement>(null);const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(scroll.current)scroll.current.scrollTop=scroll.current.scrollHeight;},[messages,busy]);
 useEffect(()=>{if(open)field.current?.focus();},[open]);
 const close=()=>{setOpen(false);toggle.current?.focus();};
 const send=async()=>{if(!input.trim()||busy)return;const q=input.trim();setInput('');setMessages(m=>[...m,{role:'user',text:q}]);setBusy(true);try{const text=await callGemini(q);setMessages(m=>[...m,{role:'assistant',text}]);}finally{setBusy(false);}};
 return <>{open&&<section className="chat-panel" aria-label="Portfolio assistant" onKeyDown={e=>{if(e.key==='Escape')close();}}><div className="chat-heading"><h3>Portfolio assistant</h3><button className="icon-button" onClick={close} aria-label="Close assistant"><X size={18}/></button></div><div ref={scroll} className="chat-messages" role="log" aria-live="polite">{messages.map((m,i)=><div key={i} className={'chat-message '+m.role}>{m.text}</div>)}{busy&&<p>Thinking…</p>}</div><form className="chat-form" onSubmit={e=>{e.preventDefault();void send();}}><input ref={field} aria-label="Ask about Hrudayesh" value={input} onChange={e=>setInput(e.target.value)} maxLength={1000} placeholder="Ask about a project…"/><button disabled={busy||!input.trim()} aria-label="Send message"><Send size={18}/></button></form><p className="chat-note">AI responses may be inaccurate. Verify details in the projects.</p></section>}<button ref={toggle} className="chat-launcher" onClick={()=>open?close():setOpen(true)} aria-label={open?'Close portfolio assistant':'Open portfolio assistant'} aria-expanded={open}>{open?<X size={23}/>:<MessageSquare size={23}/>}</button></>;
}
