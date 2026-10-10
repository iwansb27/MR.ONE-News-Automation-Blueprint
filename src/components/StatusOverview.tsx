export default function StatusOverview() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-info-circle text-blue-400"></i>
          Tujuan Utama
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Membangun sistem otomatisasi berita MR.ONE yang mengambil berita nyata, memvalidasi sumber dan gambar,
          menyusun ringkasan bahasa Indonesia, lalu menerbitkan konten ke Facebook melalui integrasi Zernio dan GitHub Actions.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <i className="fas fa-motorcycle text-blue-400 text-sm"></i>
              </span>
              <span className="font-medium text-white">08.00 WIB</span>
            </div>
            <p className="text-sm text-gray-400">MotoGP — 1 posting</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <i className="fas fa-fire text-purple-400 text-sm"></i>
              </span>
              <span className="font-medium text-white">13.00 WIB</span>
            </div>
            <p className="text-sm text-gray-400">Berita Viral Indonesia — 1 posting</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <i className="fas fa-flag text-green-400 text-sm"></i>
              </span>
              <span className="font-medium text-white">19.00 WIB</span>
            </div>
            <p className="text-sm text-gray-400">Berita Nasional — 1 posting</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-exclamation-triangle text-yellow-400"></i>
          Prinsip Wajib
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
              <i className={`fas ${p.icon} ${p.color} mt-0.5 text-sm`}></i>
              <div>
                <p className="text-sm font-medium text-white">{p.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-list-check text-green-400"></i>
          Standar Setiap Posting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {standards.map((s, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded bg-gray-800/40">
              <i className="fas fa-check text-green-400 text-xs"></i>
              <span className="text-sm text-gray-300">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-calendar-alt text-blue-400"></i>
          Periode Uji Coba
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <p className="text-xs text-blue-300">Mulai</p>
            <p className="text-sm font-bold text-white">10 Oktober 2026</p>
          </div>
          <i className="fas fa-arrow-right text-gray-600"></i>
          <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <p className="text-xs text-blue-300">Selesai</p>
            <p className="text-sm font-bold text-white">9 November 2026</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Durasi</p>
            <p className="text-sm font-bold text-white">30 hari</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-xs text-gray-400">Target</p>
            <p className="text-sm font-bold text-white">90 posting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const principles = [
  { icon: 'fa-vial', color: 'text-blue-400', title: 'Proof Before Build', desc: 'Buktikan fungsi dengan pengujian nyata' },
  { icon: 'fa-dollar-sign', color: 'text-green-400', title: 'Free-First', desc: 'Prioritaskan jalur gratis atau yang sudah tersedia' },
  { icon: 'fa-shield-halved', color: 'text-red-400', title: 'Fail-safe', desc: 'Jika bermasalah, lewati publikasi' },
  { icon: 'fa-ban', color: 'text-red-400', title: 'No Fabricated News', desc: 'Dilarang mengarang berita atau data' },
  { icon: 'fa-lock', color: 'text-yellow-400', title: 'No Premature Publishing', desc: 'Tidak boleh publish sebelum pengujian' },
  { icon: 'fa-rotate', color: 'text-blue-400', title: 'Continuity', desc: 'AI penerus wajib baca checkpoint terbaru' },
  { icon: 'fa-user-gear', color: 'text-green-400', title: 'Minimize User Workload', desc: 'Periksa kode dan log sebelum minta uji ulang' },
  { icon: 'fa-circle-xmark', color: 'text-red-400', title: 'No False Completion', desc: 'Selesai hanya jika ada bukti yang dapat diperiksa' },
];

const standards = [
  'Judul berita yang benar-benar ada',
  'Ringkasan bahasa Indonesia berdasarkan isi',
  'Tautan ke artikel sumber asli',
  'Gambar yang valid dan sesuai',
  'Kategori yang tepat',
  'Format teks layak untuk Facebook',
  'Pemeriksaan duplikasi',
  'Validasi sebelum publikasi',
];
