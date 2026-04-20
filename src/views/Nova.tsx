import React from 'react';
import { 
  Sparkles, 
  Brain, 
  Video, 
  MessageCircle, 
  TrendingUp, 
  ShieldCheck,
  Calendar,
  ChevronRight,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Nova() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight -mb-1">Nova Agent</h1>
        <p className="text-[#86868B]">Your master career strategy copilot and interview coach.</p>
      </header>

      {/* AI Reasoning Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <section className="bg-white border border-[#F2F2F2] rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Strategic Priorities</h3>
                  <p className="text-xs text-[#86868B]">AI-derived focus for the next 48 hours</p>
                </div>
              </div>
              <span className="text-[10px] px-3 py-1 bg-green-50 text-green-600 rounded-full font-bold uppercase ring-1 ring-green-100">Optimal Mode</span>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Prepare for Google Technical', type: 'INTERVIEW', intensity: 'HIGH', desc: 'Focus on System Design patterns: Load Balancers and Caching strategies.' },
                { title: 'Update Skills Profile', type: 'OPTIMIZATION', intensity: 'MEDIUM', desc: 'Add "Kubernetes" and "Terraform" to increase FAANG match rate by 14%.' },
                { title: 'Network with Stripe team', type: 'OUTREACH', intensity: 'LOW', desc: 'Campaign target: Staff Engineers in the Payments Infra team.' },
              ].map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 bg-[#FDFDFC] border border-[#F2F2F2] rounded-2xl hover:border-orange-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold text-orange-600 uppercase tracking-widest">{p.type}</span>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded-sm font-black ${
                        p.intensity === 'HIGH' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                      }`}>{p.intensity} PRIORITY</span>
                    </div>
                    <ChevronRight size={16} className="text-[#D2D2D7] group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="font-bold text-[#1D1D1F] mb-1">{p.title}</h4>
                  <p className="text-xs text-[#86868B] leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/5 blur-[40px] rounded-full" />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1D1D1F] text-white rounded-3xl p-6 flex flex-col justify-between aspect-video">
              <Video className="text-orange-400 mb-4" />
              <div>
                <h4 className="font-bold mb-2">Simulated Interview</h4>
                <p className="text-xs text-gray-400 mb-4">Start a 1:1 voice-based mock interview with Nova.</p>
                <button className="w-full py-3 bg-white text-[#1D1D1F] rounded-xl text-xs font-bold hover:bg-gray-200 transition-colors">
                  Launch Session
                </button>
              </div>
            </div>
            <div className="bg-orange-500 text-white rounded-3xl p-6 flex flex-col justify-between aspect-video">
              <Zap className="text-white mb-4" />
              <div>
                <h4 className="font-bold mb-2">Skill Booster</h4>
                <p className="text-xs text-orange-100 mb-4">Learn "Distributed Systems" in 10 minutes with AI summaries.</p>
                <button className="w-full py-3 bg-[#1D1D1F] text-white rounded-xl text-xs font-bold hover:bg-[#1D1D1F]/90 transition-colors">
                  Open Learning Lab
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white border border-[#F2F2F2] rounded-3xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6 flex items-center gap-2">
              <Calendar size={16} className="text-[#1D1D1F]" />
              Auto-Scheduling
            </h3>
            
            <div className="space-y-6">
              <p className="text-xs text-[#3a3a3c] leading-relaxed">
                Connect your calendar to let Nova handle interview invites autonomously.
              </p>
              
              <div className="p-4 bg-[#F5F5F7] rounded-2xl border border-dashed border-[#D2D2D7]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-[#EBEBEB]">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm" />
                  </div>
                  <div className="text-[10px] font-bold">Google Calendar</div>
                </div>
                <button className="w-full py-2 bg-white border border-[#EBEBEB] text-[10px] font-bold rounded-lg hover:bg-gray-50">
                  Connect Account
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-bold text-[#86868B] uppercase tracking-widest">Recent Activity</div>
                {[
                  { text: 'Slots proposed to Apple', time: '10m ago' },
                  { text: 'Mock session analyzed', time: '2h ago' },
                ].map((act, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-[#1D1D1F]">{act.text}</span>
                    <span className="text-[9px] text-[#86868B]">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white border border-[#F2F2F2] rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="text-green-500" />
              <div className="text-xs font-bold uppercase tracking-widest text-[#86868B]">Career Momentum</div>
            </div>
            
            <div className="flex items-center justify-center p-8 bg-[#FDFDFC] border border-[#F2F2F2] rounded-3xl mb-4">
              <div className="relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="transparent" stroke="#F5F5F7" strokeWidth="8" />
                  <circle cx="64" cy="64" r="56" fill="transparent" stroke="#F97316" strokeWidth="8" strokeDasharray="351.8" strokeDashoffset="87.9" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-black">75%</div>
                  <div className="text-[8px] font-bold text-[#86868B] uppercase">Readiness</div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-center text-[#86868B] italic">
              "Your profile strength has increased by 12% this week due to project tailoring."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
