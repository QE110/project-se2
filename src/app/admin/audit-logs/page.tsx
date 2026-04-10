import { ShieldCheck, User as UserIcon, Activity, Calendar, Lock } from "lucide-react";

// تمثيل لكلاس الـ Audit Log (Audit Logging Class)
interface AuditLog {
  id: string;
  timestamp: string;
  actor: string; // الشخص اللي عمل الأكشن (من أعضاء التيم)
  action: string; // نوع العملية (Create, Update, Delete, Login)
  target: string; // إيه الحاجة اللي اتأثرت (Task, Sprint, User)
  status: "Success" | "Failed";
}

// بيانات وهمية لسجلات النظام بأسماء التيم
const MOCK_LOGS: AuditLog[] = [
  { id: "LOG-882", timestamp: "2026-04-10 09:15:22", actor: "Ismail", action: "CREATED_TASK", target: "Database Setup", status: "Success" },
  { id: "LOG-881", timestamp: "2026-04-10 09:10:05", actor: "Mostafa", action: "UPDATED_STATUS", target: "Auth Logic", status: "Success" },
  { id: "LOG-880", timestamp: "2026-04-10 08:55:12", actor: "Qorashi", action: "LOGIN", target: "Admin Dashboard", status: "Success" },
  { id: "LOG-879", timestamp: "2026-04-10 08:45:30", actor: "Muhanad", action: "DELETED_TASK", target: "Old Assets", status: "Failed" },
  { id: "LOG-878", timestamp: "2026-04-10 08:30:00", actor: "Momen", action: "ASSIGNED_XP", target: "Team Leaderboard", status: "Success" },
  { id: "LOG-877", timestamp: "2026-04-10 08:20:15", actor: "Mokhlis", action: "CREATED_SPRINT", target: "Sprint 02", status: "Success" },
];

export default function AuditLogsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* الرأس - Header */}
      <div className="mb-10 flex items-center justify-between border-b border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3 uppercase tracking-tighter">
            <ShieldCheck className="text-red-500" size={32} />
            System Audit Logs
          </h1>
          <p className="text-slate-500 mt-2 italic font-mono text-sm">Traceability & Security Monitoring (Admin Only)</p>
        </div>
        <div className="flex gap-4">
            <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 text-xs text-slate-400">
                System Status: <span className="text-green-500 font-bold">Secure</span>
            </div>
        </div>
      </div>

      {/* جدول السجلات - Logs Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-800/50 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
              <th className="p-5">Timestamp</th>
              <th className="p-5">Actor (User)</th>
              <th className="p-5">Action</th>
              <th className="p-5">Entity (Target)</th>
              <th className="p-5 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {MOCK_LOGS.map((log) => (
              <tr key={log.id} className="hover:bg-slate-800/30 transition-colors group">
                <td className="p-5">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                    <Calendar size={14} />
                    {log.timestamp}
                  </div>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-slate-800 rounded-md flex items-center justify-center border border-slate-700">
                        <UserIcon size={14} className="text-blue-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-200">{log.actor}</span>
                  </div>
                </td>
                <td className="p-5 text-sm">
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded font-mono text-[11px] font-bold border border-blue-500/20">
                    {log.action}
                  </span>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Activity size={14} className="text-slate-600" />
                    {log.target}
                  </div>
                </td>
                <td className="p-5 text-center">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase
                    ${log.status === 'Success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* تنبيه أمان بسيط في الأسفل */}
      <div className="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-xl flex items-start gap-4">
        <Lock className="text-red-500/50 shrink-0" size={20} />
        <div>
            <h4 className="text-red-500 text-xs font-bold uppercase mb-1">Confidentiality Note</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
                All actions within this dashboard are recorded and hashed. Unauthorized access to these logs is strictly prohibited under the system security policy.
            </p>
        </div>
      </div>
    </div>
  );
}