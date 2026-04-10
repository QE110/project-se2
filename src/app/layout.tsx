import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { 
  LayoutDashboard, 
  ListTodo, 
  Trophy, 
  Settings, 
  Users, 
  Archive, 
  ShieldAlert 
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgileMaster - SE2 Project",
  description: "Gamified Agile Management System",
};

type UserRole = "PRODUCT_OWNER" | "SCRUM_MASTER" | "DEVELOPER" | "ADMIN";

const CURRENT_USER = {
  name: "Qorashi",
  role: "ADMIN" as UserRole, // خليه أدمن عشان تشوف كل الصفحات حالياً
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} bg-slate-950 text-slate-100 flex min-h-screen`}>
        {/* Sidebar */}
        <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col gap-8 shadow-xl">
          <div className="text-2xl font-black text-blue-500 flex items-center gap-3 tracking-tighter">
            <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center text-white">A</div>
            AGILE MASTER
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            <SidebarItem href="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            
            {(["DEVELOPER", "SCRUM_MASTER", "PRODUCT_OWNER"] as UserRole[]).includes(CURRENT_USER.role) && (
              <SidebarItem href="/sprint-board" icon={<ListTodo size={20} />} label="Sprint Board" />
            )}

            {(["PRODUCT_OWNER", "SCRUM_MASTER"] as UserRole[]).includes(CURRENT_USER.role) && (
              <SidebarItem href="/product-backlog" icon={<Archive size={20} />} label="Product Backlog" />
            )}

            {CURRENT_USER.role === "ADMIN" && (
              <SidebarItem href="/admin/audit-logs" icon={<ShieldAlert size={20} />} label="Audit Logs" />
            )}

            <SidebarItem href="/leaderboard" icon={<Trophy size={20} />} label="Leaderboard" />
            <SidebarItem href="/team" icon={<Users size={20} />} label="Team Members" />
          </nav>

          <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">User</p>
            <p className="text-sm font-bold text-white uppercase">{CURRENT_USER.name}</p>
            <p className="text-[10px] text-blue-400 font-mono">{CURRENT_USER.role}</p>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

function SidebarItem({ href, icon, label }: { href: string, icon: any, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-3 rounded-xl transition-all text-slate-400 hover:bg-slate-800 hover:text-white group">
      <span className="group-hover:text-blue-400 transition-colors">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}