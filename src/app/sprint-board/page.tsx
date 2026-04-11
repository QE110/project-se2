"use client";

import { Circle, Clock, CheckCircle2, Zap, Calendar, Plus } from "lucide-react";

const DATA = [
  { id: "T-101", name: "Complete Use Case Diagram", assignee: "Qorashi", xp: 150, difficulty: "High", type: "Docs", est: "4h", status: "DONE" },
  { id: "T-102", name: "Setup Firebase Database", assignee: "Ismail", xp: 300, difficulty: "High", type: "Backend", est: "8h", status: "IN_PROGRESS" },
  { id: "T-103", name: "Implement Auth Logic", assignee: "Mostafa", xp: 250, difficulty: "Medium", type: "Security", est: "6h", status: "IN_PROGRESS" },
  { id: "T-104", name: "Create Class Diagram", assignee: "Muhanad", xp: 150, difficulty: "Medium", type: "Design", est: "3h", status: "TO_DO" },
];

export default function SprintBoard() {
  const columns = [
    { id: "TO_DO", label: "To Do", icon: <Circle size={18} className="text-[#C9BBAF]" /> },
    { id: "IN_PROGRESS", label: "In Progress", icon: <Clock size={18} className="text-[#4A708B]" /> },
    { id: "DONE", label: "Done", icon: <CheckCircle2 size={18} className="text-green-600" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#1B3C53] flex items-center gap-3 uppercase tracking-tighter"><Zap className="fill-[#1B3C53]" /> Sprint 01</h1>
          <div className="flex gap-4 mt-2 text-[10px] font-black text-[#4A708B] uppercase tracking-widest">
            <span className="flex items-center gap-1"><Calendar size={12}/> Start: 2026-04-01</span>
            <span className="flex items-center gap-1"><Calendar size={12}/> End: 2026-04-15</span>
            <span className="text-green-600 italic">State: Active</span>
          </div>
        </div>
        <button className="bg-[#1B3C53] text-[#FAF5F0] px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg text-sm uppercase tracking-widest active:scale-95 transition-all"><Plus size={18}/> Create Sprint</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.id} className="bg-[#C9BBAF]/5 rounded-[2.5rem] border border-[#C9BBAF]/20 p-6 min-h-[600px]">
            <div className="flex items-center gap-2 mb-8 px-2 uppercase font-black text-[#1B3C53] text-[10px] tracking-[0.2em]">{col.icon} {col.label}</div>
            <div className="flex flex-col gap-5">
              {DATA.filter(t => t.status === col.id).map(task => (
                <div key={task.id} className="bg-white border border-[#C9BBAF]/20 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-mono text-[#C9BBAF]">#{task.id}</span>
                    <span className={`text-[8px] px-2 py-0.5 rounded-full font-black uppercase ${task.difficulty === 'High' ? 'bg-red-50 text-red-600' : 'bg-[#1B3C53]/5 text-[#1B3C53]'}`}>{task.difficulty}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1B3C53] mb-1">{task.name}</h3>
                  <p className="text-[10px] font-bold text-[#4A708B] uppercase mb-4 tracking-tighter">{task.type}</p>
                  <div className="pt-4 border-t border-[#FAF5F0] flex items-center justify-between">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#1B3C53] rounded-full flex items-center justify-center text-[8px] text-white font-bold">{task.assignee[0]}</div><span className="text-[10px] font-bold text-[#4A708B]">{task.assignee}</span></div>
                    <div className="text-right"><div className="text-[#1B3C53] text-[10px] font-black">+{task.xp} XP</div><div className="text-[8px] text-[#C9BBAF] font-mono flex items-center gap-1 justify-end mt-1"><Clock size={10}/> Est: {task.est}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}