import React, { useState, useEffect } from 'react';
import { User, CreditCard, Save, Briefcase } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

export default function Profile() {
  const [profile, setProfile] = useState({ name: '', email: '', expLevel: 'Fresher' });
  const [isEditing, setIsEditing] = useState(false);
  const [jobHistory, setJobHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        // Fetch Profile
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data() as any);
        } else {
          setProfile({ name: auth.currentUser.displayName || '', email: auth.currentUser.email || '', expLevel: 'Fresher' });
        }

        // Fetch Job History
        const q = query(collection(db, 'applications'), where('userId', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const history = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJobHistory(history);
      }
    };
    fetchData();
  }, []);

  const saveProfile = async () => {
    if (auth.currentUser) {
      await setDoc(doc(db, 'users', auth.currentUser.uid), profile, { merge: true });
      setIsEditing(false);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tighter text-slate-900">Profile</h1>
        <p className="text-slate-500">Manage your background and professional details.</p>
      </header>

      <section className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
        {/* ... (profile edit form remains the same) ... */}
        <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-3xl font-bold">
            {profile.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{profile.name}</h2>
            <p className="text-slate-500 text-sm">{profile.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
          />

          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Experience Level</label>
          <select
            value={profile.expLevel}
            onChange={(e) => setProfile({...profile, expLevel: e.target.value})}
            disabled={!isEditing}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
          >
            <option value="Fresher">Fresher</option>
            <option value="Experience">Experience</option>
          </select>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            {isEditing ? <><Save size={16} /> Save Changes</> : 'Edit Profile'}
          </button>
        </div>
      </section>

      <section className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Briefcase className="text-indigo-600" size={20} />
          Job History
        </h3>
        
        {jobHistory.length === 0 ? (
          <p className="text-slate-500 text-sm">No applications found.</p>
        ) : (
          <div className="space-y-4">
            {jobHistory.map((app: any) => (
              <div key={app.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900">{app.jobTitle}</div>
                  <div className="text-sm text-slate-500">{app.company}</div>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                  {app.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
