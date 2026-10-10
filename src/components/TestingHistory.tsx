export default function TestingHistory() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-history text-blue-400"></i>
          Riwayat Pengujian yang Diketahui
        </h2>

        <div className="space-y-4">
          {/* Test 1 */}
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <i className="fas fa-check text-green-400 text-sm"></i>
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">Bukti Publikasi Langsung melalui Zernio</h3>
                <span className="text-xs text-green-400 font-medium">PASS — 1 pengujian historis</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoRow label="ID Posting" value="6aca595cc4ee309e55cfb65b" />
              <InfoRow label="URL Facebook" value="facebook.com/1224309507435139_122124283563425398" />
              <InfoRow label="Sumber Artikel" value="motogp.com — Sprint Mandalika Marc Marquez" />
            </div>
            <div className="mt-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
              <p className="text-xs text-yellow-300 flex items-center gap-2">
                <i className="fas fa-exclamation-triangle"></i>
                Bukti ini hanya menunjukkan keberhasilan publikasi langsung melalui konektor. Bukan bukti bahwa GitHub Actions sudah berhasil menjalankan seluruh proses.
              </p>
            </div>
          </div>

          {/* Test 2 */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <i className="fas fa-times text-red-400 text-sm"></i>
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">Run GitHub Actions yang Gagal</h3>
                <span className="text-xs text-red-400 font-medium">FAIL — HTTP 500</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoRow label="Run" value="38066224761" />
              <InfoRow label="Commit SHA" value="869df1747fa1e07f0c35a79ae5a668a3c90432ee" />
              <InfoRow label="Mode" value="dry_run" />
              <InfoRow label="Slot" value="motogp" />
              <InfoRow label="Error" value="HTTP 500 setelah 3 percobaan" />
            </div>
            <div className="mt-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-xs text-gray-400">
                Injeksi kredensial berhasil. Endpoint /v1/news memberikan HTTP 500 setelah tiga kali percobaan.
                Workflow berhenti sebelum proses pemilihan artikel, validasi gambar, dan penyelesaian dry run.
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                Migrasi ubuntu-latest bukan penyebab yang telah terbukti untuk HTTP 500 tersebut.
              </p>
            </div>
          </div>

          {/* Test 3 */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/30 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <i className="fas fa-code-commit text-gray-400 text-sm"></i>
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">Perubahan Kode Terbaru pada Checkpoint</h3>
                <span className="text-xs text-gray-400 font-medium">UNTESTED — Keberhasilan belum terbukti</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoRow label="Commit" value="49e607a22b1065fd391998b4790a06583ea275dc" />
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-xs text-gray-400">Perubahan yang diketahui:</p>
              <div className="flex items-start gap-2">
                <i className="fas fa-plus text-green-400 text-xs mt-0.5"></i>
                <span className="text-xs text-gray-300">Menambahkan variasi query alternatif ketika FreeNews gagal atau tidak mengembalikan hasil</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fas fa-plus text-green-400 text-xs mt-0.5"></i>
                <span className="text-xs text-gray-300">Menambahkan mekanisme fail-stop yang aman</span>
              </div>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
              <p className="text-xs text-yellow-300 flex items-center gap-2">
                <i className="fas fa-exclamation-triangle"></i>
                Pada checkpoint ini belum ada bukti yang mengonfirmasi bahwa run pada commit tersebut berhasil.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-link text-blue-400"></i>
          Tautan Penting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <LinkCard
            title="Repository"
            url="https://github.com/iwansb27/mr-one-news-automation-"
            icon="fa-code-branch"
          />
          <LinkCard
            title="Workflow"
            url=".github/workflows/news-schedule.yml"
            icon="fa-gear"
          />
          <LinkCard
            title="GitHub Actions"
            url="https://github.com/iwansb27/mr-one-news-automation-/actions"
            icon="fa-bolt"
          />
          <LinkCard
            title="Secrets"
            url="https://github.com/iwansb27/mr-one-news-automation-/settings/secrets/actions"
            icon="fa-key"
          />
          <LinkCard
            title="FreeNews API Docs"
            url="https://www.freenewsapi.io/docs/"
            icon="fa-book"
          />
          <LinkCard
            title="Posting Facebook"
            url="https://www.facebook.com/1224309507435139_122124283563425398"
            icon="fa-facebook"
          />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-2 rounded bg-gray-800/50">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xs text-gray-200 font-mono break-all">{value}</p>
    </div>
  );
}

function LinkCard({ title, url, icon }: { title: string; url: string; icon: string }) {
  return (
    <a
      href={url.startsWith('http') ? url : `https://github.com/iwansb27/mr-one-news-automation-/blob/main/${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 hover:bg-blue-500/5 transition group"
    >
      <i className={`fas ${icon} text-blue-400`}></i>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white group-hover:text-blue-300 transition">{title}</p>
        <p className="text-xs text-gray-500 truncate">{url}</p>
      </div>
      <i className="fas fa-external-link-alt text-gray-600 text-xs group-hover:text-blue-400 transition"></i>
    </a>
  );
}
