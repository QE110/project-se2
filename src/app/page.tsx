export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
      {/* هيدر بسيط */}
      <h1 className="text-5xl font-extrabold text-blue-400 mb-4 animate-bounce">
        Project SE2 🚀
      </h1>
      <p className="text-xl text-slate-400 mb-8">
        نظام إدارة مشاريع Agile بلمسة جيمفيكيشن
      </p>

      {/* كارت عرض مستوى المستخدم (Gamification) */}
      <div className="p-8 bg-slate-800 rounded-3xl border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:scale-105">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold border-2 border-white">
            Q
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider">الرتبة: مطور خبير</h2>
            <p className="text-blue-400">المستوى (Level 5)</p>
          </div>
        </div>

        {/* شريط الـ XP */}
        <p className="text-sm mb-1 text-slate-300">التقدم للمستوى القادم (XP): 75%</p>
        <div className="w-80 h-4 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
          <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>

      <p className="mt-12 text-slate-500 text-sm italic">
        ملاحظة: الباك إيند لسه بيجهزوا الجداول، إحنا بنبني الواجهات دلوقتي! 😉
      </p>
    </div>
  );
}