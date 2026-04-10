"use client";

import { Lock, Mail, ArrowRight, Zap, ShieldCheck, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const USERS_DB = [
  { email: "admin@agile.com", password: "admin@2026", role: "ADMIN", name: "Qorashi" },
  { email: "po@agile.com", password: "po@backlog", role: "PRODUCT_OWNER", name: "Ismail" },
  { email: "sm@agile.com", password: "sm@scrum", role: "SCRUM_MASTER", name: "Mostafa" },
  { email: "muhanad@agile.com", password: "dev@task1", role: "DEVELOPER", name: "Muhanad" },
  { email: "momen@agile.com", password: "dev@task2", role: "DEVELOPER", name: "Momen" },
  { email: "mokhlis@agile.com", password: "dev@task3", role: "DEVELOPER", name: "Mokhlis" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const user = USERS_DB.find(u => u.email === email && u.password === password);
    setTimeout(() => {
      if (user) {
        localStorage.clear();
        localStorage.setItem("userRole", user.role);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("isLoggedIn", "true");
        router.push("/sprint-board");
      } else {
        setError("Invalid credentials.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF5F0] p-4 font-sans antialiased">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#1B3C53] rounded-[2rem] mb-5 shadow-2xl shadow-[#1B3C53]/20">
            <Zap size={36} className="text-[#FAF5F0] fill-[#FAF5F0]" />
          </div>
          <h1 className="text-4xl font-black text-[#1B3C53] tracking-tighter uppercase">AgileMaster</h1>
        </div>
        <div className="bg-white border border-[#C9BBAF]/30 p-10 rounded-[2.5rem] shadow-xl">
          {error && <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-xs font-bold"><AlertCircle size={16} /> {error}</div>}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase font-black text-[#4A708B] mb-2 ml-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9BBAF]" />
                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="user@agile.com" className="w-full bg-[#FAF5F0] border border-[#C9BBAF]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#1B3C53] focus:outline-none focus:border-[#1B3C53]" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-black text-[#4A708B] mb-2 ml-2">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9BBAF]" />
                <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="w-full bg-[#FAF5F0] border border-[#C9BBAF]/20 rounded-2xl pl-12 pr-4 py-4 text-sm text-[#1B3C53] focus:outline-none focus:border-[#1B3C53]" />
              </div>
            </div>
            <button disabled={loading} type="submit" className="w-full bg-[#1B3C53] hover:bg-[#1B3C53]/95 text-[#FAF5F0] font-bold py-4.5 rounded-2xl flex items-center justify-center gap-2 transition-all">
              {loading ? "Authenticating..." : "Sign In"} <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}