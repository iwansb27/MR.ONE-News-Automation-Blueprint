export default function PhaseTracker() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <i className="fas fa-list-check text-blue-400"></i>
          Rencana Kerja AI Penerus
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Ikuti urutan berikut. Jangan melompati tahap.
        </p>

        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div key={i} className={`rounded-xl border p-5 ${phase.borderClass}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${phase.iconBg}`}>
                  <span className={`text-sm font-bold ${phase.iconColor}`}>{String.fromCharCode(65 + i)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-md font-bold text-white">{phase.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${phase.statusClass}`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{phase.description}</p>
                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-500 mb-2">Langkah:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {phase.steps.map((step, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className="text-xs text-gray-600 mt-0.5">{j + 1}.</span>
                          <span className="text-xs text-gray-400">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-flag-checkered text-green-400"></i>
          Kriteria Penerimaan Produksi
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Proyek hanya boleh dinyatakan siap produksi apabila SEMUA kriteria berikut terpenuhi:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {acceptanceCriteria.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
              <i className="fas fa-circle text-gray-600 text-xs"></i>
              <span className="text-sm text-gray-300">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const phases = [
  {
    title: 'FASE A — Audit Read-Only',
    description: 'Mengetahui keadaan sistem yang benar-benar terbaru tanpa mengubah produksi.',
    status: 'IN PROGRESS',
    statusClass: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    borderClass: 'border-blue-500/20 bg-blue-500/5',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    steps: [
      'Buka repository, periksa commit HEAD',
      'Baca workflow versi HEAD',
      'Periksa perubahan setelah commit 49e607a',
      'Periksa run GitHub Actions terbaru',
      'Baca log kegagalan lengkap',
      'Cocokkan run dengan commit SHA',
      'Periksa nama secrets tanpa menampilkan nilai',
      'Pastikan MRONE_PUBLISH_ENABLED aman',
    ],
  },
  {
    title: 'FASE B — Memperbaiki Pengambilan Berita',
    description: 'Mencari akar masalah FreeNews HTTP 500.',
    status: 'PENDING',
    statusClass: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    borderClass: 'border-gray-700 bg-gray-800/30',
    iconBg: 'bg-gray-700',
    iconColor: 'text-gray-400',
    steps: [
      'Identifikasi URL endpoint dan parameter aktual',
      'Periksa dokumentasi API yang sesuai',
      'Periksa respons HTTP dan isi error',
      'Pastikan autentikasi header benar',
      'Periksa query alternatif',
      'Pastikan fail-stop berfungsi',
      'Periksa batas retry',
    ],
  },
  {
    title: 'FASE C — Validasi Tiga Slot',
    description: 'Uji masing-masing kategori secara terpisah menggunakan dry run.',
    status: 'PENDING',
    statusClass: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    borderClass: 'border-gray-700 bg-gray-800/30',
    iconBg: 'bg-gray-700',
    iconColor: 'text-gray-400',
    steps: [
      'Uji slot MotoGP (dry run)',
      'Uji slot Viral Indonesia (dry run)',
      'Uji slot Nasional (dry run)',
      'Validasi judul, isi, URL, gambar',
      'Validasi ringkasan bahasa Indonesia',
      'Periksa deteksi duplikasi',
      'Periksa format konten Facebook',
    ],
  },
  {
    title: 'FASE D — Dry Run End-to-End',
    description: 'Pastikan seluruh rangkaian berjalan dari awal sampai akhir.',
    status: 'PENDING',
    statusClass: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    borderClass: 'border-gray-700 bg-gray-800/30',
    iconBg: 'bg-gray-700',
    iconColor: 'text-gray-400',
    steps: [
      'Konfigurasi',
      'Pengambilan berita',
      'Pemilihan artikel',
      'Validasi',
      'Penyusunan konten',
      'Pemeriksaan duplikasi',
      'Laporan dry run',
    ],
  },
  {
    title: 'FASE E — Uji Publikasi',
    description: 'Membutuhkan persetujuan eksplisit Iwan sebelum membuat posting publik.',
    status: 'BLOCKED',
    statusClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    borderClass: 'border-yellow-500/20 bg-yellow-500/5',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
    steps: [
      'Pastikan dry run sudah PASS',
      'Pastikan akun Facebook tujuan benar',
      'Pastikan format posting benar',
      'Minta persetujuan sebelum publish',
      'Verifikasi respons Zernio',
      'Verifikasi ID dan URL posting',
      'Pastikan tidak ada posting ganda',
    ],
  },
  {
    title: 'FASE F — Aktivasi Bertahap',
    description: 'Aktivasi hanya setelah semua pengujian PASS dan persetujuan eksplisit.',
    status: 'BLOCKED',
    statusClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    borderClass: 'border-yellow-500/20 bg-yellow-500/5',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
    steps: [
      'Dry run end-to-end PASS',
      'Tiga slot sudah diuji',
      'Validasi konten PASS',
      'Pengujian publikasi PASS',
      'Pengamanan dan pemulihan siap',
      'Persetujuan eksplisit Iwan',
    ],
  },
  {
    title: 'FASE G — Monitoring 30 Hari',
    description: 'Catat setiap jadwal dan hasil posting berdasarkan bukti nyata.',
    status: 'BLOCKED',
    statusClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    borderClass: 'border-yellow-500/20 bg-yellow-500/5',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
    steps: [
      'Catat waktu eksekusi dan slot',
      'Catat commit SHA dan status run',
      'Catat artikel yang dipilih dan URL',
      'Catat hasil validasi',
      'Catat status publikasi',
      'Catat alasan skip atau gagal',
      'Hitung berdasarkan bukti posting nyata',
    ],
  },
];

const acceptanceCriteria = [
  'Pengambilan berita stabil dan dapat diverifikasi',
  'Ketiga kategori diuji',
  'Konten dan gambar divalidasi',
  'Duplikasi ditangani',
  'Dry run end-to-end PASS',
  'Publikasi uji berhasil dan terverifikasi',
  'Pengamanan publikasi berfungsi',
  'Jadwal dan zona waktu terverifikasi',
  'Iwan menyetujui aktivasi otomatis',
];
