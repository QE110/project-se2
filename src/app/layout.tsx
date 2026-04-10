"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { 
  ListTodo, Trophy, Users, Archive, 
  ShieldAlert, User, LogOut, Zap, Shield, Star, Settings 
} from "lucide-react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState({ name: "Guest", role: "DEVELOPER" });

  useEffect(() => {
    setMounted(true);
    const savedRole = localStorage.getItem("userRole") || "DEVELOPER";
    const savedName = localStorage.getItem("userName") || "Guest";
    setUserData({ name: savedName, role: savedRole });
  }, [pathname]);

  if (pathname === "/") return <html lang="en"><body>{children}</body></html>;
  if (!mounted) return <html lang="en"><body className="bg-[#FAF5F0]" /></html>;

  return (
    <html lang="en">
      <body className="bg-[#FAF5F0] text-[#1B3C53] flex min-h-screen font-sans antialiased">
        <aside className="w-72 bg-[#C9BBAF]/10 border-r border-[#C9BBAF]/30 p-8 flex flex-col gap-10 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1B3C53] rounded-2xl flex items-center justify-center text-[#FAF5F0] shadow-lg shadow-[#1B3C53]/20">
              <Zap size={22} className="fill-[#FAF5F0]" />
            </div>
            <span className="text-xl font-black tracking-tighter text-[#1B3C53]">AGILE MASTER</span>
          </div>

          <nav className="flex flex-col gap-1.5 flex-1">
            <SidebarItem href="/sprint-board" icon={<ListTodo size={18} />} label="Sprint Board" />
            <SidebarItem href="/leaderboard" icon={<Trophy size={18} />} label="Leaderboard" />

            {(userData.role === "ADMIN" || userData.role === "PRODUCT_OWNER" || userData.role === "SCRUM_MASTER") && (
              <SidebarItem href="/backlog" icon={<Archive size={18} />} label="Product Backlog" />
            )}
            
            <div className="h-px bg-[#C9BBAF]/30 my-6 mx-2" />
            
            {userData.role === "ADMIN" && (
              <>
                <p className="text-[10px] text-[#4A708B] font-black px-3 mb-3 uppercase tracking-[0.2em]">Management</p>
                <SidebarItem href="/admin/audit-logs" icon={<ShieldAlert size={18} />} label="Audit Logs" />
                <SidebarItem href="/team" icon={<Users size={18} />} label="Team Members" />
              </>
            )}
          </nav>

          <div className="pt-6 border-t border-[#C9BBAF]/30">
            <div className="flex items-center gap-4 mb-5 px-2">
              <div className="w-10 h-10 bg-[#1B3C53] rounded-xl flex items-center justify-center text-[#FAF5F0]">
                {userData.role === "ADMIN" && <Shield size={20} />}
                {userData.role === "DEVELOPER" && <User size={20} />}
                {userData.role === "PRODUCT_OWNER" && <Star size={20} />}
                {userData.role === "SCRUM_MASTER" && <Settings size={20} />}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-[#1B3C53] truncate uppercase">{userData.name}</p>
                <p className="text-[10px] text-[#4A708B] font-black uppercase">{userData.role}</p>
              </div>
            </div>
            <button onClick={() => {localStorage.clear(); router.push("/");}} className="w-full flex items-center gap-3 p-3.5 rounded-xl text-red-600 hover:bg-red-50 font-bold text-xs transition-all">
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </aside>
        <main className="flex-1 p-10 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}

function SidebarItem({ href, icon, label }: { href: string, icon: any, label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`flex items-center gap-3 p-3.5 rounded-xl transition-all text-sm font-bold ${isActive ? 'bg-[#1B3C53] text-[#FAF5F0] shadow-xl shadow-[#1B3C53]/15' : 'text-[#4A708B] hover:bg-[#C9BBAF]/20 hover:text-[#1B3C53]'}`}>
      {icon} {label}
    </Link>
  );
}