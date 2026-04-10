"use client";

import { Circle, Clock, CheckCircle2, Zap } from "lucide-react";

const DATA = [
  { id: "T-101", title: "Complete Use Case Diagram", assignee: "Qorashi", xp: 150, priority: "High", status: "DONE" },
  { id: "T-102", title: "Setup Firebase Database", assignee: "Ismail", xp: 300, priority: "High", status: "IN_PROGRESS" },
  { id: "T-103", title: "Implement Auth Logic", assignee: "Mostafa", xp: 250, priority: "Medium", status: "IN_PROGRESS" },
  { id: "T-104", title: "Create Project Class Diagram", assignee: "Muhanad", xp: 150, priority: "Medium", status: "TO_DO" },
];

export default function SprintBoard() {
  const columns = [
    { id: "TO_DO", label: "To Do", icon: <Circle size={18} className="text-[#C9BBAF]" /> },
    { id: "IN_PROGRESS", label: "In Progress", icon: <Clock size={18} className="text-[#4A708B]" /> },
    { id: "DONE", label: "Done", icon: <CheckCircle2 size={18} className="text-green-600" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-[#1B3C53] flex items-center gap-3 uppercase tracking-tighter">
          <Zap className="text-[#1B3C53] fill-[#1B3C53]" /> Sprint Board
        </h1>
        <p className="text-[#4A708B] mt-1 text-sm">Manage project execution and team velocity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.id} className="bg-[#C9BBAF]/5 rounded-[2rem] border border-[#C9BBAF]/20 p-5 min-h-[600px]">
            <div className="flex items-center justify-between mb-6 px-3">
              <div className="flex items-center gap-2">
                {col.icon}
                <h2 className="font-black text-[#1B3C53] uppercase text-[10px] tracking-widest">{col.label}</h2>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {DATA.filter(t => t.status === col.id).map(task => (
                <div key={task.id} className="bg-white border border-[#C9BBAF]/20 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-mono text-[#C9BBAF]">#{task.id}</span>
                    <span className={`text-[8px] px-2 py-0.5 rounded-full font-black uppercase ${task.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-[#1B3C53]/5 text-[#1B3C53]'}`}>{task.priority}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1B3C53] mb-4">{task.title}</h3>
                  <div className="flex items-center justify-between pt-4 border-t border-[#FAF5F0]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#1B3C53] rounded-full flex items-center justify-center text-[8px] text-white font-bold uppercase">{task.assignee[0]}</div>
                      <span className="text-[10px] font-bold text-[#4A708B]">{task.assignee}</span>
                    </div>
                    <div className="text-[#1B3C53] text-[10px] font-black">+{task.xp} XP</div>
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