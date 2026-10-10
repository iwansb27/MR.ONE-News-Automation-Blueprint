import { useState } from 'react';
import Header from './components/Header';
import StatusOverview from './components/StatusOverview';
import AuditTable from './components/AuditTable';
import SchedulePanel from './components/SchedulePanel';
import PhaseTracker from './components/PhaseTracker';
import TestingHistory from './components/TestingHistory';
import SafetyPanel from './components/SafetyPanel';
import InfraPanel from './components/InfraPanel';

type Tab = 'overview' | 'audit' | 'schedule' | 'phases' | 'history' | 'safety' | 'infra';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Ringkasan', icon: 'fa-chart-line' },
    { id: 'audit', label: 'Status Audit', icon: 'fa-clipboard-check' },
    { id: 'schedule', label: 'Jadwal', icon: 'fa-clock' },
    { id: 'phases', label: 'Fase Kerja', icon: 'fa-list-check' },
    { id: 'history', label: 'Riwayat', icon: 'fa-history' },
    { id: 'safety', label: 'Pengaman', icon: 'fa-shield-halved' },
    { id: 'infra', label: 'Infrastruktur', icon: 'fa-server' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <i className={`fas ${tab.icon} text-xs`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && <StatusOverview />}
        {activeTab === 'audit' && <AuditTable />}
        {activeTab === 'schedule' && <SchedulePanel />}
        {activeTab === 'phases' && <PhaseTracker />}
        {activeTab === 'history' && <TestingHistory />}
        {activeTab === 'safety' && <SafetyPanel />}
        {activeTab === 'infra' && <InfraPanel />}
      </main>

      <footer className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        <p>MR.ONE News Automation — Master Handoff Document</p>
        <p className="text-xs mt-1">Pemilik: Iwan | Periode Uji Coba: 10 Okt 2026 – 9 Nov 2026</p>
      </footer>
    </div>
  );
}
