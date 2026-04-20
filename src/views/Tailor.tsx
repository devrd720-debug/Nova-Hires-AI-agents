import React from 'react';
import { FileText, Download, Edit3, CheckCircle, AlertCircle, Sparkles, Layout } from 'lucide-react';
import { motion } from 'motion/react';

export default function Tailor() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Tailor Agent</h1>
        <p className="text-[#86868B]">ATS-optimized resume generation and application management.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Resume Canvas */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-[#F2F2F2] rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50">
            <div className="bg-[#1D1D1F] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-xs ring-4 ring-orange-500/20">
                  T
                </div>
                <div className="text-white">
                  <div className="text-xs font-bold leading-tight">Master_Resume_V4.pdf</div>
                  <div className="text-[10px] text-gray-400">Ready for tailoring</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Edit3 size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </div>

            <div className="p-12 space-y-10 aspect-[1/1.414] bg-white text-[#1D1D1F]">
              <div className="text-center space-y-2">
                <h2 className="text-4xl font-extrabold tracking-tighter">SHIMA DUTTA</h2>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#86868B]">
                  Senior Software Engineer • Bangalore • +91 98765 43210
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black border-b-2 border-[#1D1D1F] pb-1 uppercase tracking-tighter">Experience</h3>
                {[
                  { company: 'Tech Corp', role: 'Staff Engineer', period: '2021 - Present', desc: 'Leading frontend architecture for multi-tenant high-scale platforms using React and micro-frontends.' },
                  { company: 'Innovate AI', role: 'Backend Dev', period: '2019 - 2021', desc: 'Built robust data pipelines for large-scale training of LLM models using Python and Kafka.' },
                ].map((exp, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <div className="font-bold text-sm italic">{exp.role}</div>
                      <div className="text-[10px] text-[#86868B] font-medium">{exp.period}</div>
                    </div>
                    <div className="text-[11px] font-bold text-orange-600 uppercase tracking-tight">{exp.company}</div>
                    <p className="text-xs leading-relaxed text-[#3a3a3c]">{exp.desc}</p>
                    <div className="pt-2 flex flex-wrap gap-1">
                      {['React', 'Next.js', 'Typescript'].map(sk => (
                        <span key={sk} className="text-[9px] bg-[#F5F5F7] px-1.5 py-0.5 rounded font-bold uppercase">{sk}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tailoring Sidebar */}
        <div className="space-y-6">
          <section className="bg-white border border-[#F2F2F2] rounded-3xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6 flex items-center gap-2">
              <Sparkles size={16} className="text-orange-500" />
              Tailoring Insights
            </h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold">ATS Compatibility</span>
                  <span className="text-xs font-bold text-green-500">92%</span>
                </div>
                <div className="h-1.5 bg-[#F5F5F7] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-bold text-[#86868B]">Missing Keywords:</div>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Native', 'GraphQL', 'Kubernetes'].map(kw => (
                    <span key={kw} className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-md flex items-center gap-1">
                      <AlertCircle size={10} /> {kw}
                    </span>
                  ))}
                </div>
                <button className="w-full py-2 bg-orange-50 text-orange-600 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-orange-100 transition-colors">
                  Auto-Apply Missing Skills
                </button>
              </div>

              <div className="space-y-4 border-t border-[#F2F2F2] pt-6">
                <div className="text-xs font-bold text-[#86868B]">Generated Variations:</div>
                {[
                  { name: 'Google_Tailored_V2', date: '2h ago', score: 94 },
                  { name: 'Stripe_Tailored_V1', date: '1d ago', score: 88 },
                ].map((v) => (
                  <div key={v.name} className="flex items-center justify-between p-3 bg-[#FDFDFC] border border-[#F2F2F2] rounded-xl hover:border-orange-200 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-[#86868B]" />
                      <div className="text-[10px] font-bold truncate max-w-[100px]">{v.name}</div>
                    </div>
                    <div className="text-[10px] font-bold text-orange-500">{v.score}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="bg-[#1D1D1F] text-white rounded-3xl p-6">
            <h4 className="text-xs font-bold uppercase mb-4 opacity-50">Agent Goal</h4>
            <p className="text-[11px] leading-relaxed mb-6 italic text-gray-400">
              "My mission is to ensure every resume you send passes the ATS gatekeeper with a score above 85%."
            </p>
            <button className="w-full py-3 bg-white text-[#1D1D1F] rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors">
              Tailor for Job #120
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
