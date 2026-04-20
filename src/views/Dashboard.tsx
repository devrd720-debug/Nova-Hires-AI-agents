import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Clock, 
  MapPin, 
  Briefcase, 
  Trophy,
  CheckCircle2,
  TrendingUp,
  Target,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const [agents, setAgents] = useState({
    Hunter: true,
    Tailor: true,
    Networker: false,
    Nova: true
  });

  const toggleAgent = (name: string) => {
    setAgents(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900 -mb-1">Hello, Shima</h1>
        <p className="text-slate-500">Overview of your managed agent operations.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'New Matches', value: '12', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Applications', value: '48', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Network Points', value: '1,240', icon: Trophy, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Avg. Match', value: '88%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon size={20} />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">Today's Priority Matches</h2>
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View all</button>
            </div>
            
            <div className="grid gap-4">
              {[
                { company: 'Google', role: 'Senior Frontend Engineer', score: 95, tier: 'FAANG', loc: 'Mountain View' },
                { company: 'Stripe', role: 'Staff Product Engineer', score: 92, tier: 'Unicorn', loc: 'Remote' },
                { company: 'NVIDIA', role: 'Systems Architect', score: 88, tier: 'Grade-A', loc: 'Santa Clara' },
              ].map((job, i) => (
                <div key={i} className="group bg-white border border-slate-100 p-5 rounded-2xl hover:border-indigo-200 transition-colors shadow-sm relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-lg font-bold text-slate-700">
                        {job.company[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{job.role}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-3">
                          <span>{job.company}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-200" />
                          <span className="flex items-center gap-1"><MapPin size={12} /> {job.loc}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">{job.score}% Match</div>
                      <div className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-semibold uppercase">{job.tier}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Agents Status */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
              <Zap size={16} className="text-indigo-500" />
              Agent Controls
            </h3>
            <div className="space-y-4">
              {Object.entries(agents).map(([name, active]) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900">{name}</span>
                  <button 
                    onClick={() => toggleAgent(name)}
                    className={`w-12 h-6 rounded-full transition-colors flex items-center px-1 ${active ? 'bg-indigo-600' : 'bg-slate-200'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

