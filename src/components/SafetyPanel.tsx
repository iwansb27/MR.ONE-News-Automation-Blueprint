export default function SafetyPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-xl border border-red-500/20 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
            <i className="fas fa-shield-halved text-red-400"></i>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Pengaman Publikasi</h2>
            <p className="text-sm text-red-300">Status: AKTIF — Publikasi otomatis TIDAK diizinkan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
            <p className="text-xs text-red-300 font-medium mb-1">Variabel Pengaman</p>
            <p className="text-lg font-mono font-bold text-white">MRONE_PUBLISH_ENABLED</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-sm text-red-300">false (direncanakan)</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-xs text-gray-400 font-medium mb-1">Parameter Workflow Manual</p>
            <div className="space-y-1.5 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">mode</span>
                <span className="text-xs font-mono text-white bg-gray-700 px-2 py-0.5 rounded">dry_run</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">slot</span>
                <span className="text-xs font-mono text-white bg-gray-700 px-2 py-0.5 rounded">auto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-ban text-red-400"></i>
          Aturan Keselamatan Publikasi
        </h2>
        <div className="space-y-3">
          {safetyRules.map((rule, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
              <i className="fas fa-stop-circle text-red-400 text-sm mt-0.5"></i>
              <span className="text-sm text-gray-300">{rule}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-key text-yellow-400"></i>
          Keamanan Secret
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400 font-medium mb-2">Secret yang Diketahui:</p>
            <div className="space-y-2">
              <SecretItem name="FREE_NEWS_API_KEY" desc="Autentikasi FreeNews API (header: x-api-key)" />
              <SecretItem name="ZERNIO_API_KEY" desc="Autentikasi Zernio API (Bearer token)" />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium mb-2">Variabel yang Diketahui:</p>
            <div className="space-y-2">
              <SecretItem name="MRONE_PUBLISH_ENABLED" desc="Pengaman publikasi (default: false)" />
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
          <p className="text-xs text-yellow-300 font-medium mb-2">Aturan Keamanan:</p>
          <div className="space-y-1.5">
            {secretRules.map((rule, i) => (
              <div key={i} className="flex items-start gap-2">
                <i className="fas fa-lock text-yellow-400 text-xs mt-0.5"></i>
                <span className="text-xs text-gray-400">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-gavel text-purple-400"></i>
          Persyaratan Sebelum Aktivasi
        </h2>
        <div className="space-y-2">
          {activationRequirements.map((req, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
              <i className="fas fa-square text-gray-600 text-xs"></i>
              <span className="text-sm text-gray-300">{req}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecretItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="p-2 rounded bg-gray-800/50 border border-gray-700/50">
      <p className="text-xs font-mono text-blue-300">{name}</p>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  );
}

const safetyRules = [
  'Jangan mengaktifkan publikasi otomatis hanya karena satu posting manual berhasil.',
  'Jangan mengubah variabel produksi tanpa persetujuan eksplisit Iwan.',
  'Jangan menjalankan pengujian publish yang dapat membuat posting publik tanpa izin.',
  'Utamakan dry run dan validasi.',
  'Jika hasil validasi tidak lengkap, hentikan proses.',
  'Jika terjadi ketidakpastian, periksa status sebelum mencoba ulang.',
  'Jangan mencetak token, API key, atau nilai secret di log.',
  'Jangan menghapus atau mengganti secret tanpa alasan teknis dan persetujuan.',
];

const secretRules = [
  'Jangan meminta Iwan mengirim API key melalui chat.',
  'Jangan menuliskan nilai secret di log.',
  'Jangan menyertakan token dalam URL atau laporan.',
  'Jangan menyimpan kredensial di kode sumber.',
  'Gunakan GitHub Secrets untuk kredensial.',
  'Jika log berpotensi membocorkan kredensial, hentikan penyebaran dan lakukan penanganan keamanan.',
];

const activationRequirements = [
  'Dry run end-to-end PASS',
  'Tiga slot sudah diuji (MotoGP, Viral, Nasional)',
  'Validasi konten PASS',
  'Pengujian publikasi PASS dengan persetujuan',
  'Pengamanan dan prosedur pemulihan siap',
  'Iwan memberikan persetujuan eksplisit untuk aktivasi otomatis',
];
