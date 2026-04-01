import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import CreatorCard from './components/CreatorCard.jsx';
import InsightPanel from './components/InsightPanel.jsx';
import ReportList from './components/ReportList.jsx';
import AuthCard from './components/AuthCard.jsx';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function App() {
  const [creators, setCreators] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    if (!brand) return;
    async function fetchData() {
      try {
        const [creatorRes, reportRes] = await Promise.all([
          axios.get(`${API_BASE}/creators`),
          axios.get(`${API_BASE}/reports`)
        ]);
        setCreators(creatorRes.data);
        setFiltered(creatorRes.data);
        setSelected(creatorRes.data[0]);
        setReports(reportRes.data);
      } catch (err) {
        console.error('API error', err);
      }
    }
    fetchData();
  }, [brand]);

  const topCreators = useMemo(() => filtered.slice(0, 5), [filtered]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (!value) {
      setFiltered(creators);
    } else {
      const term = value.toLowerCase();
      setFiltered(creators.filter((creator) => creator.name.toLowerCase().includes(term)));
    }
  };

  if (!brand) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-50 flex items-center justify-center px-6">
        <AuthCard onAuth={setBrand} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-50 text-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <header className="bg-white/80 rounded-3xl border border-purple-100 p-6 shadow-lg shadow-purple-100/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-purple-500 font-semibold">CreatorLens Dashboard</p>
              <h1 className="text-3xl font-semibold text-slate-800">Analyze Influencers Across All Platforms</h1>
              <p className="text-sm text-slate-500 mt-2">
                Tap AI-powered recommendations to identify authentic creators, compare performance, and generate concise reports.
              </p>
            </div>
            <SearchBar placeholder="Search creator..." onChange={handleSearch} className="md:w-80" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-800">Top Creators</h2>
              <p className="text-sm text-slate-400">{searchTerm ? 'Filtered results' : 'Trending pick list'}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {topCreators.map((creator) => (
                <CreatorCard key={creator._id} creator={creator} onSelect={setSelected} />
              ))}
            </div>
          </div>

          <InsightPanel creator={selected} />
        </section>

        <ReportList reports={reports} />
      </main>
    </div>
  );
}
