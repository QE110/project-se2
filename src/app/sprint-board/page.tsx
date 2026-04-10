import { Circle, Clock, CheckCircle2, Zap } from "lucide-react";

// تعريف كلاس المهمة Task
interface Task {
  id: string;
  title: string;
  assignee: string;
  experiencePoints: number;
  priority: "High" | "Medium" | "Low";
  status: "TO_DO" | "IN_PROGRESS" | "DONE";
}

const MOCK_TASKS: Task[] = [
  { id: "T-101", title: "Complete Use Case Diagram", assignee: "Qorashi", experiencePoints: 150, priority: "High", status: "DONE" },
  { id: "T-102", title: "Setup Firebase Database", assignee: "Ismail", experiencePoints: 300, priority: "High", status: "IN_PROGRESS" },
  { id: "T-103", title: "Implement Auth Logic", assignee: "Mostafa", experiencePoints: 250, priority: "Medium", status: "IN_PROGRESS" },
  { id: "T-104", title: "Create Project Class Diagram", assignee: "Muhanad", experiencePoints: 150, priority: "Medium", status: "TO_DO" },
  { id: "T-105", title: "Write System Audit Logs", assignee: "Momen", experiencePoints: 200, priority: "High", status: "TO_DO" },
  { id: "T-106", title: "Develop Leaderboard UI", assignee: "Mokhlis", experiencePoints: 100, priority: "Low", status: "DONE" },
];

export default function SprintBoard() {
  const columns = [
    { id: "TO_DO", label: "To Do", icon: <Circle size={18} className="text-slate-500" /> },
    { id: "IN_PROGRESS", label: "In Progress", icon: <Clock size={18} className="text-blue-500" /> },
    { id: "DONE", label: "Done", icon: <CheckCircle2 size={18} className="text-green-500" /> },
  ];

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
          <Zap className="text-yellow-400 fill-yellow-400" />
          Sprint Board
        </h1>
        <p className="text-slate-500 mt-2 italic">Manage team tasks and distribute XP (Agile Workflow)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="bg-slate-900/50 rounded-2xl border border-slate-800 p-4 min-h-[600px]">
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-2">
                {column.icon}
                <h2 className="font-bold text-slate-200 uppercase text-xs tracking-widest">{column.label}</h2>
              </div>
              <span className="bg-slate-800 text-[10px] px-2 py-1 rounded-md text-slate-400 font-mono">
                {MOCK_TASKS.filter(t => t.status === column.id).length}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {MOCK_TASKS.filter(task => task.status === column.id).map(task => (
                <div key={task.id} className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-lg hover:border-blue-500/50 transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-slate-500">{task.id}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded uppercase font-bold 
                      ${task.priority === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-400'}`}>
                      {task.priority}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 mb-4">{task.title}</h3>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[8px] font-bold uppercase">{task.assignee[0]}</div>
                      <span className="text-[10px] text-slate-400">{task.assignee}</span>
                    </div>
                    <div className="text-yellow-500 text-[10px] font-black">+{task.experiencePoints} XP</div>
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