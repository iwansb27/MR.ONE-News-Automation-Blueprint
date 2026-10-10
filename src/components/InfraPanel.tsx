export default function InfraPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-server text-blue-400"></i>
          Infrastruktur Proyek
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GitHub */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                <i className="fab fa-github text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">GitHub Repository</h3>
                <p className="text-xs text-gray-400">Source code & CI/CD</p>
              </div>
            </div>
            <div className="space-y-2">
              <InfraRow label="Repository" value="iwansb27/mr-one-news-automation-" />
              <InfraRow label="Workflow" value=".github/workflows/news-schedule.yml" />
              <InfraRow label="Commit Terakhir Diketahui" value="49e607a22b1065fd391998b4790a06583ea275dc" />
            </div>
          </div>

          {/* FreeNews API */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <i className="fas fa-newspaper text-blue-400 text-lg"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">FreeNews API</h3>
                <p className="text-xs text-gray-400">Sumber berita</p>
              </div>
            </div>
            <div className="space-y-2">
              <InfraRow label="Base URL" value="https://api.freenewsapi.io/v1" />
              <InfraRow label="Endpoint Berita" value="GET /v1/news" />
              <InfraRow label="Endpoint Detail" value="GET /v1/details?uuid=..." />
              <InfraRow label="Auth" value="Header: x-api-key" />
              <InfraRow label="Secret" value="FREE_NEWS_API_KEY" />
            </div>
            <div className="mt-3 p-2 rounded bg-red-500/5 border border-red-500/20">
              <p className="text-xs text-red-300">Status: FAIL — HTTP 500 pada run terakhir</p>
            </div>
          </div>

          {/* Zernio */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <i className="fas fa-plug text-purple-400 text-lg"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Zernio</h3>
                <p className="text-xs text-gray-400">Konektor Facebook</p>
              </div>
            </div>
            <div className="space-y-2">
              <InfraRow label="Base URL" value="https://zernio.com/api/v1" />
              <InfraRow label="Cek Akun" value="GET /v1/accounts" />
              <InfraRow label="Buat Posting" value="POST /v1/posts" />
              <InfraRow label="Auth" value="Bearer token" />
              <InfraRow label="Secret" value="ZERNIO_API_KEY" />
              <InfraRow label="Account ID" value="6ac6fd96c7848d04140e8bf6" />
            </div>
            <div className="mt-3 p-2 rounded bg-green-500/5 border border-green-500/20">
              <p className="text-xs text-green-300">Status: PASS — 1 posting berhasil (historis)</p>
            </div>
          </div>

          {/* Facebook */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <i className="fab fa-facebook text-blue-400 text-lg"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Facebook</h3>
                <p className="text-xs text-gray-400">Tujuan publikasi akhir</p>
              </div>
            </div>
            <div className="space-y-2">
              <InfraRow label="Tujuan" value="Halaman Facebook MR.ONE" />
              <InfraRow label="Via" value="Zernio connector" />
              <InfraRow label="Posting Uji" value="6aca595cc4ee309e55cfb65b" />
            </div>
            <div className="mt-3 p-2 rounded bg-yellow-500/5 border border-yellow-500/20">
              <p className="text-xs text-yellow-300">Status: UNTESTED — Pipeline lengkap belum diuji</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-search text-yellow-400"></i>
          Parameter Pencarian FreeNews
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Parameter yang pernah digunakan — harus diverifikasi terhadap dokumentasi dan respons API terbaru.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
            <p className="text-xs text-blue-300 font-medium mb-2">Slot MotoGP</p>
            <div className="space-y-1 font-mono text-xs text-gray-300">
              <p>country=ID</p>
              <p>language=id</p>
              <p>order_by=recent</p>
              <p>offset=0</p>
              <p>in_title=motogp</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
            <p className="text-xs text-purple-300 font-medium mb-2">Slot Viral Indonesia</p>
            <div className="space-y-1 font-mono text-xs text-gray-300">
              <p>country=ID</p>
              <p>language=id</p>
              <p>order_by=recent</p>
              <p><span className="text-gray-500"># parameter belum ditentukan</span></p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
            <p className="text-xs text-green-300 font-medium mb-2">Slot Nasional</p>
            <div className="space-y-1 font-mono text-xs text-gray-300">
              <p>country=ID</p>
              <p>language=id</p>
              <p>order_by=recent</p>
              <p><span className="text-gray-500"># parameter belum ditentukan</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-diagram-project text-green-400"></i>
          Alur Sistem
        </h2>
        <div className="flex flex-wrap items-center gap-2 justify-center py-4">
          {flowSteps.map((step, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className={`px-3 py-2 rounded-lg text-xs font-medium border ${step.color}`}>
                <i className={`fas ${step.icon} mr-1.5`}></i>
                {step.label}
              </span>
              {i < flowSteps.length - 1 && (
                <i className="fas fa-arrow-right text-gray-600 text-xs"></i>
              )}
            </span>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
          <p className="text-xs text-gray-400 text-center">
            Jika salah satu langkah gagal → sistem melewati publikasi dan mencatat alasan (fail-safe)
          </p>
        </div>
      </div>
    </div>
  );
}

function InfraRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-xs font-mono text-gray-200 truncate max-w-[200px]">{value}</span>
    </div>
  );
}

const flowSteps = [
  { label: 'GitHub Actions', icon: 'fa-bolt', color: 'bg-gray-700 border-gray-600 text-gray-200' },
  { label: 'Konfigurasi', icon: 'fa-gear', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
  { label: 'Ambil Berita', icon: 'fa-newspaper', color: 'bg-blue-500/20 border-blue-500/30 text-blue-300' },
  { label: 'Pilih Artikel', icon: 'fa-filter', color: 'bg-purple-500/20 border-purple-500/30 text-purple-300' },
  { label: 'Validasi', icon: 'fa-check-double', color: 'bg-green-500/20 border-green-500/30 text-green-300' },
  { label: 'Susun Konten', icon: 'fa-pen', color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300' },
  { label: 'Cek Duplikat', icon: 'fa-copy', color: 'bg-orange-500/20 border-orange-500/30 text-orange-300' },
  { label: 'Zernio', icon: 'fa-plug', color: 'bg-purple-500/20 border-purple-500/30 text-purple-300' },
  { label: 'Facebook', icon: 'fa-facebook', color: 'bg-blue-600/20 border-blue-600/30 text-blue-300' },
];
