import { Mail, User, Code, Shield, Palette, Database, Lock, Globe } from "lucide-react";

// Team Member Interface (Class: User)
interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  email: string;
  icon: any;
}

const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Qorashi", role: "Admin / Full-Stack", specialty: "System Architecture", email: "qorashi@example.com", icon: <Shield className="text-red-500" /> },
  { id: 2, name: "Ismail", role: "Developer", specialty: "Back-end & Firebase", email: "ismail@example.com", icon: <Database className="text-blue-500" /> },
  { id: 3, name: "Mostafa", role: "Developer", specialty: "Authentication Logic", email: "mostafa@example.com", icon: <Lock className="text-purple-500" /> },
  { id: 4, name: "Muhanad", role: "Developer", specialty: "UML & Documentation", email: "muhanad@example.com", icon: <Code className="text-green-500" /> },
  { id: 5, name: "Momen", role: "Developer", specialty: "Security & Audit Logs", email: "momen@example.com", icon: <Shield className="text-orange-500" /> },
  { id: 6, name: "Mokhlis", role: "Developer", specialty: "Frontend UI/UX", email: "mokhlis@example.com", icon: <Palette className="text-pink-500" /> },
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">Team Members</h1>
        <p className="text-slate-500 italic font-mono text-sm">Class: User | Agile Roles & Specialties</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/50 transition-all group relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                {member.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{member.role}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Specialty</p>
                <p className="text-sm text-slate-300 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50 inline-block">
                  {member.specialty}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/50">
                <Mail size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                <Globe size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                <User size={18} className="text-slate-500 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}