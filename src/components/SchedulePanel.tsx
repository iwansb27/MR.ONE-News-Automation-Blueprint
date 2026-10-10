export default function SchedulePanel() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <i className="fas fa-clock text-blue-400"></i>
          Jadwal Publikasi Harian
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Zona waktu: WIB (UTC+7). Jadwal ini adalah target konfigurasi, bukan bukti posting sudah berjalan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScheduleCard
            time="08.00"
            category="MotoGP"
            icon="fa-motorcycle"
            color="blue"
            description="Berita terbaru MotoGP, hasil balapan, klasemen, dan analisis pembalap."
            status="FAIL"
            statusDetail="Gagal pada run 38066224761 (HTTP 500)"
          />
          <ScheduleCard
            time="13.00"
            category="Berita Viral Indonesia"
            icon="fa-fire"
            color="purple"
            description="Berita viral dan trending di Indonesia dari berbagai sumber terpercaya."
            status="UNTESTED"
            statusDetail="Belum ada pengujian untuk slot ini"
          />
          <ScheduleCard
            time="19.00"
            category="Berita Nasional"
            icon="fa-flag"
            color="green"
            description="Berita nasional Indonesia meliputi politik, ekonomi, dan sosial."
            status="UNTESTED"
            statusDetail="Belum ada pengujian untuk slot ini"
          />
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-calendar-check text-green-400"></i>
          Target 30 Hari
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-gray-400">Progress:</span>
              <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <span className="text-xs font-bold text-white">0/90</span>
            </div>
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm bg-gray-800 border border-gray-700 flex items-center justify-center"
                  title={`Hari ${i + 1}`}
                >
                  <span className="text-[8px] text-gray-600">{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-gray-800 border border-gray-700"></span>
                <span className="text-xs text-gray-500">Belum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-green-500"></span>
                <span className="text-xs text-gray-500">Berhasil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-red-500"></span>
                <span className="text-xs text-gray-500">Gagal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-yellow-500"></span>
                <span className="text-xs text-gray-500">Skip</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-list-check text-purple-400"></i>
          Kriteria Konten Layak Terbit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {criteria.map((c, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
              <i className="fas fa-check-double text-blue-400 text-xs mt-1"></i>
              <span className="text-sm text-gray-300">{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
          <p className="text-sm text-red-300 flex items-center gap-2">
            <i className="fas fa-exclamation-triangle"></i>
            Jika salah satu pemeriksaan kritis gagal: lewati publikasi, catat alasan, simpan informasi diagnostik.
          </p>
        </div>
      </div>
    </div>
  );
}

function ScheduleCard({ time, category, icon, color, description, status, statusDetail }: {
  time: string; category: string; icon: string; color: string; description: string; status: string; statusDetail: string;
}) {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/5 border-purple-500/30',
    green: 'from-green-500/20 to-green-600/5 border-green-500/30',
  };

  const iconColor: Record<string, string> = {
    blue: 'text-blue-400 bg-blue-500/20',
    purple: 'text-purple-400 bg-purple-500/20',
    green: 'text-green-400 bg-green-500/20',
  };

  const statusStyle: Record<string, string> = {
    FAIL: 'bg-red-500/20 text-red-300 border-red-500/30',
    UNTESTED: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    PASS: 'bg-green-500/20 text-green-300 border-green-500/30',
  };

  return (
    <div className={`rounded-xl bg-gradient-to-br ${colorMap[color]} border p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`w-10 h-10 rounded-lg ${iconColor[color]} flex items-center justify-center`}>
          <i className={`fas ${icon}`}></i>
        </span>
        <span className={`px-2 py-0.5 rounded text-xs font-bold border ${statusStyle[status]}`}>{status}</span>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{time}</p>
      <p className="text-sm font-medium text-gray-300 mb-2">WIB — {category}</p>
      <p className="text-xs text-gray-400 mb-3">{description}</p>
      <p className="text-xs text-gray-500 italic">{statusDetail}</p>
    </div>
  );
}

const criteria = [
  'Artikel nyata tersedia',
  'Judul dapat ditelusuri ke sumber',
  'Ringkasan sesuai dengan isi sumber',
  'Tautan sumber asli valid',
  'Gambar tersedia dan relevan',
  'Kategori sesuai',
  'Konten tidak duplikat',
  'Format Facebook tidak rusak',
  'Respons sistem dan status validasi jelas',
];
