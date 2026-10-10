import { useState } from 'react';

type Status = 'PASS' | 'FAIL' | 'UNTESTED' | 'BLOCKED';

interface AuditItem {
  component: string;
  status: Status;
  detail: string;
}

const statusColors: Record<Status, string> = {
  PASS: 'bg-green-500/20 text-green-300 border-green-500/30',
  FAIL: 'bg-red-500/20 text-red-300 border-red-500/30',
  UNTESTED: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  BLOCKED: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
};

const statusIcons: Record<Status, string> = {
  PASS: 'fa-check-circle text-green-400',
  FAIL: 'fa-times-circle text-red-400',
  UNTESTED: 'fa-question-circle text-gray-400',
  BLOCKED: 'fa-lock text-yellow-400',
};

const auditData: AuditItem[] = [
  {
    component: 'Publikasi langsung melalui konektor Zernio',
    status: 'PASS',
    detail: 'Berhasil menerbitkan 1 posting nyata. ID: 6aca595cc4ee309e55cfb65b. URL: facebook.com/1224309507435139_122124283563425398',
  },
  {
    component: 'Pengambilan berita FreeNews pada run 38066224761',
    status: 'FAIL',
    detail: 'Endpoint /v1/news memberikan HTTP 500 setelah tiga kali percobaan. Workflow berhenti sebelum pemilihan artikel.',
  },
  {
    component: 'Dry run end-to-end GitHub Actions',
    status: 'UNTESTED',
    detail: 'Belum terbukti selesai. Belum ada eksekusi dry run yang berhasil dari awal sampai akhir.',
  },
  {
    component: 'Pengambilan berita MotoGP melalui workflow',
    status: 'FAIL',
    detail: 'Gagal pada run historis 38066224761. FreeNews mengembalikan HTTP 500.',
  },
  {
    component: 'Pengambilan berita viral Indonesia',
    status: 'UNTESTED',
    detail: 'Belum ada pengujian yang dilakukan untuk slot ini.',
  },
  {
    component: 'Pengambilan berita nasional',
    status: 'UNTESTED',
    detail: 'Belum ada pengujian yang dilakukan untuk slot ini.',
  },
  {
    component: 'Validasi gambar end-to-end',
    status: 'UNTESTED',
    detail: 'Belum divalidasi dalam alur kerja lengkap.',
  },
  {
    component: 'Validasi URL artikel end-to-end',
    status: 'UNTESTED',
    detail: 'Belum divalidasi dalam alur kerja lengkap.',
  },
  {
    component: 'Pemeriksaan duplikasi end-to-end',
    status: 'UNTESTED',
    detail: 'Belum divalidasi dalam alur kerja lengkap.',
  },
  {
    component: 'Publikasi GitHub Actions → Zernio → Facebook',
    status: 'UNTESTED',
    detail: 'Pipeline lengkap dari GitHub Actions ke Facebook belum diuji.',
  },
  {
    component: 'Jadwal tiga kali sehari selama 30 hari',
    status: 'UNTESTED',
    detail: 'Belum dibuktikan dari konfigurasi dan eksekusi nyata.',
  },
  {
    component: 'Aktivasi produksi otomatis',
    status: 'BLOCKED',
    detail: 'Menunggu pengujian menyeluruh dan persetujuan eksplisit pemilik.',
  },
];

export default function AuditTable() {
  const [filter, setFilter] = useState<Status | 'ALL'>('ALL');

  const filtered = filter === 'ALL' ? auditData : auditData.filter((item) => item.status === filter);

  const counts = {
    PASS: auditData.filter((i) => i.status === 'PASS').length,
    FAIL: auditData.filter((i) => i.status === 'FAIL').length,
    UNTESTED: auditData.filter((i) => i.status === 'UNTESTED').length,
    BLOCKED: auditData.filter((i) => i.status === 'BLOCKED').length,
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-clipboard-check text-blue-400"></i>
          Status Audit Komponen
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Jangan mengubah status tanpa bukti. Gunakan PASS / FAIL / UNTESTED / BLOCKED secara konsisten.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
              filter === 'ALL' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
            }`}
          >
            Semua ({auditData.length})
          </button>
          {(['PASS', 'FAIL', 'UNTESTED', 'BLOCKED'] as Status[]).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                filter === s ? statusColors[s] : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              {s} ({counts[s]})
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <i className={`fas ${statusIcons[item.status]} mt-0.5`}></i>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">{item.component}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.detail}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${statusColors[item.status]}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h3 className="text-md font-bold text-white mb-3 flex items-center gap-2">
          <i className="fas fa-info-circle text-blue-400"></i>
          Arti Status
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
            <i className="fas fa-check-circle text-green-400"></i>
            <div>
              <p className="text-sm font-medium text-green-300">PASS</p>
              <p className="text-xs text-gray-400">Ada bukti hasil yang berhasil</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
            <i className="fas fa-times-circle text-red-400"></i>
            <div>
              <p className="text-sm font-medium text-red-300">FAIL</p>
              <p className="text-xs text-gray-400">Pengujian dijalankan dan gagal</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-500/5 border border-gray-500/20">
            <i className="fas fa-question-circle text-gray-400"></i>
            <div>
              <p className="text-sm font-medium text-gray-300">UNTESTED</p>
              <p className="text-xs text-gray-400">Belum ada bukti pengujian cukup</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
            <i className="fas fa-lock text-yellow-400"></i>
            <div>
              <p className="text-sm font-medium text-yellow-300">BLOCKED</p>
              <p className="text-xs text-gray-400">Prasyarat atau persetujuan belum tersedia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
