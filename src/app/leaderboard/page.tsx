import { Trophy, Medal } from "lucide-react";

// تمثيل لكلاس User بسمات الـ Gamification
interface UserStats {
  id: number;
  username: string;
  totalXP: number;
  level: number;
  rankName: string;
}

const TEAM_MEMBERS: UserStats[] = [
  { id: 1, username: "Qorashi", totalXP: 3200, level: 15, rankName: "Legendary" },
  { id: 2, username: "Ismail", totalXP: 2800, level: 13, rankName: "Elite" },
  { id: 3, username: "Mostafa", totalXP: 2400, level: 11, rankName: "Senior" },
  { id: 4, username: "Muhanad", totalXP: 2100, level: 10, rankName: "Pro" },
  { id: 5, username: "Momen", totalXP: 1800, level: 8, rankName: "Advanced" },
  { id: 6, username: "Mokhlis", totalXP: 1500, level: 7, rankName: "Intermediate" },
];

export default function LeaderboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3 uppercase tracking-tight">
          <Trophy className="text-yellow-400" size={36} />
          Leaderboard
        </h1>
        <p className="text-slate-400 italic">Top performing developers based on experience points (XP)</p>
      </div>

      <div className="bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
        <table className="w-full text-left"> {/* التغيير لليسار */}
          <thead>
            <tr className="bg-slate-800/40 text-slate-500 text-xs uppercase tracking-widest">
              <th className="p-6">Rank</th>
              <th className="p-6">Developer (Class: User)</th>
              <th className="p-6">Level</th>
              <th className="p-6">Points (totalXP)</th>
              <th className="p-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {TEAM_MEMBERS.map((user, index) => (
              <tr key={user.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-all">
                <td className="p-6">
                  {index < 3 ? (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg 
                      ${index === 0 ? 'bg-yellow-500/20 text-yellow-500' : ''}
                      ${index === 1 ? 'bg-slate-400/20 text-slate-400' : ''}
                      ${index === 2 ? 'bg-orange-600/20 text-orange-600' : ''}`}>
                      <Medal size={20} />
                    </div>
                  ) : (
                    <span className="text-slate-600 font-mono ml-2">{index + 1}</span>
                  )}
                </td>
                <td className="p-6 font-bold text-white text-lg">{user.username}</td>
                <td className="p-6 text-blue-400 font-mono">Lv. {user.level}</td>
                <td className="p-6 text-yellow-500 font-black">{user.totalXP.toLocaleString()} XP</td>
                <td className="p-6 text-slate-400 text-xs uppercase">{user.rankName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}