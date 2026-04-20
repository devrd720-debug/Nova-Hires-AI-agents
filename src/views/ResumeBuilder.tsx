import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Download, Zap, Sparkles } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { analyzeResume } from '../lib/gemini';
import { useNavigate } from 'react-router-dom';

export default function ResumeBuilder() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isPremium, setIsPremium] = useState(false); // In production, fetch from Firestore
  const [analysis, setAnalysis] = useState<{score: number, suggestions: string[]} | null>(null);
  const [resumeData, setResumeData] = useState({ name: '', email: '', experience: '', jd: '' });

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const runAIAnalysis = async () => {
    if (!isPremium) return navigate('/pricing');
    const result = await analyzeResume(JSON.stringify(resumeData), resumeData.jd);
    setAnalysis(result);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${resumeData.name}`, 10, 10);
    doc.text(`Email: ${resumeData.email}`, 10, 20);
    doc.save('resume.pdf');
  };

  return (
    <div className="grid grid-cols-2 gap-8 h-full">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Build your Resume - Step {step}</h2>
        <div className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleUpdate} className="w-full p-3 border rounded-xl" />
          <input name="email" placeholder="Email" onChange={handleUpdate} className="w-full p-3 border rounded-xl" />
          <textarea name="experience" placeholder="Experience" onChange={handleUpdate} className="w-full p-3 border rounded-xl h-32" />
          <textarea name="jd" placeholder="Job Description to target..." onChange={handleUpdate} className="w-full p-3 border rounded-xl h-32" />
        </div>
        <div className="mt-8 flex justify-between gap-2">
          <button onClick={() => setStep(s => Math.max(s - 1, 1))} className="p-2 border rounded-xl"><ChevronLeft /></button>
          <button 
            onClick={runAIAnalysis} 
            disabled={!isPremium}
            className={`px-6 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2 transition-all 
              ${isPremium 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200' 
                : 'bg-slate-200 text-slate-500 cursor-not-allowed'
              }`}
          >
            <Sparkles size={16} /> AI Analysis (Pro)
          </button>
          <button onClick={generatePDF} className="px-6 py-2 bg-green-600 text-white rounded-xl flex items-center gap-2"><Download size={16} /> PDF</button>
          <button onClick={() => setStep(s => Math.min(s + 1, 3))} className="p-2 border rounded-xl"><ChevronRight /></button>
        </div>
        {analysis && (
          <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
            <p className="font-bold">ATS Score: {analysis.score}</p>
            <ul className="text-sm list-disc pl-4">{analysis.suggestions.map((s,i) => <li key={i}>{s}</li>)}</ul>
          </div>
        )}
      </div>
      
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
         <h1 className="text-2xl font-bold">{resumeData.name || 'Your Name'}</h1>
      </div>
    </div>
  );
}
