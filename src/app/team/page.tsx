"use client";

import { Mail, Shield, Database, Lock, Code, Palette } from "lucide-react";

const MEMBERS = [
  { name: "Qorashi", role: "Admin", specialty: "Architecture", icon: <Shield size={20}/> },
  { name: "Ismail", role: "Product Owner", specialty: "Backend", icon: <Database size={20}/> },
  { name: "Mostafa", role: "Scrum Master", specialty: "Auth", icon: <Lock size={20}/> },
  { name: "Muhanad", role: "Developer", specialty: "Documentation", icon: <Code size={20}/> },
  { name: "Momen", role: "Developer", specialty: "Security", icon: <Shield size={20}/> },
  { name: "Mokhlis", role: "Developer", specialty: "UI/UX", icon: <Palette size={20}/> },
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-black text-[#1B3C53] mb-10 uppercase tracking-tighter">Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEMBERS.map((m) => (
          <div key={m.name} className="bg-white border border-[#C9BBAF]/30 rounded-[2.5rem] p-8 hover:shadow-xl transition-all group">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-[#FAF5F0] rounded-2xl flex items-center justify-center text-[#1B3C53] border border-[#C9BBAF]/20">
                {m.icon}
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1B3C53]">{m.name}</h3>
                <p className="text-[10px] font-black text-[#4A708B] uppercase tracking-widest">{m.role}</p>
              </div>
            </div>
            <div className="pt-5 border-t border-[#FAF5F0] flex justify-between items-center">
              <span className="text-xs font-bold text-[#C9BBAF] italic">{m.specialty}</span>
              <Mail size={16} className="text-[#C9BBAF] hover:text-[#1B3C53] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}