import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Search, 
  FileText, 
  Users, 
  Sparkles, 
  Bell, 
  Settings, 
  User,
  LayoutDashboard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Search, label: 'Hunter', path: '/hunter' },
  { icon: FileText, label: 'Tailor', path: '/tailor' },
  { icon: FileText, label: 'Resume Builder', path: '/resume-builder' },
  { icon: Users, label: 'Networker', path: '/networker' },
  { icon: Sparkles, label: 'Nova AI', path: '/nova' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#1D1D1F] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-slate-200 bg-white hidden lg:flex flex-col">
        <div className="p-8 pb-10">
          <div className="p-8 pb-10">
          <div className="flex items-center gap-3 group cursor-pointer">
          <img src="/assets/logo.svg" alt="NovaHire" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight uppercase text-slate-900">NovaHire</span>
          </div>
        </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                }
              `}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="active-pill"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"
                />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                <Sparkles size={16} className="text-indigo-500" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-900">Pro Plan</div>
                <div className="text-[10px] text-slate-500">12 days left</div>
              </div>
            </div>
            <button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors shadow-sm text-slate-900">
              Upgrade Account
            </button>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-6 border-t border-slate-100">
            <div className="w-9 h-9 rounded-full bg-indigo-500" />
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-semibold text-slate-900 truncate">Shima Dutta</div>
              <div className="text-xs text-slate-500 truncate">shimadutta62@gmail.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Platform</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold capitalize">
              {location.pathname.split('/')[1]}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors relative text-slate-500">
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-500">
              <Settings size={18} />
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
