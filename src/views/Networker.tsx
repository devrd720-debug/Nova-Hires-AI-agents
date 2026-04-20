import React from 'react';
import { 
  Users, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Networker() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900">Networker Agent</h1>
          <p className="text-slate-500">Automated outreach, referral discovery, and conversation management.</p>
        </div>
        <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-bold flex items-center gap-2">
          <Linkedin size={16} />
          82 Connection Invites Remaining
        </div>
      </header>

      {/* Network Pipeline Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: 'Outreach Sent', count: 18, color: 'bg-slate-300' },
          { label: 'Connected', count: 54, color: 'bg-indigo-500' },
          { label: 'Replied', count: 12, color: 'bg-indigo-600' },
          { label: 'Referred', count: 4, color: 'bg-emerald-500' },
        ].map((column, i) => (
          <div key={column.label} className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${column.color}`} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{column.label}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full">{column.count}</span>
            </div>
            
            <div className="space-y-4">
              {i === 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-indigo-200 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">John Doe</div>
                      <div className="text-[9px] text-slate-500">Recruiter @ Google</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-600 line-clamp-2 italic mb-3">
                    "Thanks for the connect Shima! I saw your profile..."
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">High Intent</span>
                    <Clock size={10} className="text-slate-300" />
                  </div>
                </motion.div>
              )}


              {i === 2 && (
                <div className="bg-white border border-orange-100 p-4 rounded-2xl shadow-sm border-l-4 border-l-orange-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Replied 12m ago</span>
                    <MoreHorizontal size={14} className="text-[#D2D2D7]" />
                  </div>
                  <div className="text-xs font-bold mb-1">Sarah Jenkins</div>
                  <div className="text-[9px] text-[#86868B] mb-3">SWE @ Stripe</div>
                  <button className="w-full py-2 bg-orange-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
                    Draft Reply
                  </button>
                </div>
              )}

              <div className="h-32 bg-[#F5F5F7]/30 border-2 border-dashed border-[#F2F2F2] rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                <Users size={20} className="text-[#D2D2D7] mb-2" />
                <div className="text-[9px] font-bold text-[#86868B]">Drag contacts here to advance</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white border border-[#F2F2F2] rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Outreach Effectiveness</h3>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#86868B]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                LinkedIn
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                Email
              </div>
            </div>
          </div>
          
          <div className="h-48 flex items-end justify-between gap-2">
            {[65, 45, 85, 30, 95, 75, 40].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
                <div className="w-full flex gap-1 items-end h-full">
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h}%` }}
                    className="flex-1 bg-blue-500 rounded-t-sm group-hover:bg-blue-600 transition-colors"
                  />
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h * 0.6}%` }}
                    className="flex-1 bg-orange-500 rounded-t-sm group-hover:bg-orange-600 transition-colors"
                  />
                </div>
                <span className="text-[8px] font-bold text-[#86868B] uppercase">Day {i+1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1D1D1F] text-white rounded-3xl p-8 overflow-hidden relative">
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-white/10 p-3 rounded-2xl">
                <MessageSquare className="text-orange-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#86868B]">Auto-Pilot Active</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Referral Engine</h3>
            <p className="text-sm text-gray-400 mb-auto leading-relaxed">
              "I've identified 3 alumni from your university at Google. I'm waiting for your 'Applied' status to send the referral request message."
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1D1D1F] bg-gray-600" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#1D1D1F] bg-[#1D1D1F] flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
              <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-400 hover:text-orange-300 transition-colors">
                View Contacts <ChevronRight size={14} />
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
        </section>
      </div>
    </div>
  );
}
