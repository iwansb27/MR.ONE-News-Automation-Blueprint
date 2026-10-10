export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-900 to-blue-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <i className="fas fa-newspaper text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">MR.ONE News Automation</h1>
              <p className="text-sm text-gray-400">Master Handoff Document — Dashboard Status</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-yellow-300 text-xs font-medium">MASA UJI COBA</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30">
              <i className="fas fa-lock text-red-400 text-xs"></i>
              <span className="text-red-300 text-xs font-medium">PUBLISHING BLOCKED</span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Target Posting" value="90" sub="30 hari × 3/hari" icon="fa-bullseye" color="blue" />
          <StatCard label="Berhasil Terbit" value="0" sub="Berdasarkan bukti" icon="fa-check-circle" color="green" />
          <StatCard label="Gagal" value="1" sub="Run 38066224761" icon="fa-times-circle" color="red" />
          <StatCard label="Status Produksi" value="BLOCKED" sub="Menunggu persetujuan" icon="fa-shield-halved" color="yellow" />
        </div>
      </div>
    </header>
  );
}

function StatCard({ label, value, sub, icon, color }: { label: string; value: string; sub: string; icon: string; color: string }) {
  const colors: Record<string, string> = {
    blue: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 text-blue-400',
    green: 'from-green-500/10 to-green-600/5 border-green-500/20 text-green-400',
    red: 'from-red-500/10 to-red-600/5 border-red-500/20 text-red-400',
    yellow: 'from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 text-yellow-400',
  };

  return (
    <div className={`rounded-lg bg-gradient-to-br ${colors[color]} border p-3`}>
      <div className="flex items-center gap-2 mb-1">
        <i className={`fas ${icon} text-xs ${colors[color].split(' ').pop()}`}></i>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <p className="text-lg font-bold text-white">{value}</p>
      <p className="text-xs text-gray-500">{sub}</p>
    </div>
  );
}
