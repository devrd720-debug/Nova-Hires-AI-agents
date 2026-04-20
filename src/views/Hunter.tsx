import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Filter, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Job } from '../types';

export default function Hunter() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters and Sort State
  const [filterLocation, setFilterLocation] = useState('All');
  const [sortBy, setSortBy] = useState('matchScore');

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobs
    .filter(j => filterLocation === 'All' || j.location === filterLocation)
    .sort((a, b) => {
      if (sortBy === 'matchScore') return b.matchScore - a.matchScore;
      if (sortBy === 'postedAt') return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      return 0;
    });

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900">Hunter Agent</h1>
          <p className="text-slate-500">Autonomous discovery of MNC and high-growth opportunities.</p>
        </div>
      </header>

      {/* Controls */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-slate-400" />
          <select 
            value={filterLocation} 
            onChange={(e) => setFilterLocation(e.target.value)}
            className="text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl px-4 py-2 border border-slate-200 outline-none"
          >
            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-slate-500 font-medium">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl px-4 py-2 border border-slate-200 outline-none"
          >
            <option value="matchScore">Match Score</option>
            <option value="postedAt">Newest</option>
          </select>
        </div>
      </div>

      {/* Auto-Search Config */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
            <Briefcase size={24} />
          </div>
          <div>
            <div className="font-bold text-indigo-900">Auto-Apply is Enabled</div>
            <p className="text-sm text-indigo-700/80 max-w-md">
              Hunter is currently scanning FAANG and Grade-A MNC portals every 4 hours for matches &gt; 85%.
            </p>
          </div>
        </div>
        <button className="px-6 py-2.5 bg-white border border-indigo-200 text-indigo-600 rounded-xl text-sm font-semibold hover:bg-white/80 transition-colors shadow-sm">
          Agent Settings
        </button>
      </div>

      <div className="grid gap-6">
        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
          </div>
        ) : (
          filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white border border-slate-100 p-6 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl font-bold border border-slate-100 text-slate-700">
                  {job.company[0]}
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                        <span className="font-semibold text-slate-900">{job.company}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="uppercase tracking-wide font-semibold text-[10px] py-0.5 px-2 bg-slate-100 rounded-md">{job.tier}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{job.matchScore}% Match</div>
                      <div className="text-xs text-slate-400 font-mono">{job.salary}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Discovered {new Date(job.postedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                        Dismiss
                      </button>
                      <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2">
                        Apply <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

    </div>
  );
}
