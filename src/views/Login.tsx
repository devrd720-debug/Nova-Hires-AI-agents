import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = async (provider: any) => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-sm space-y-8 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center gap-2">
          <img src="/logo.png" alt="NovaHire" className="h-16 w-auto" />
          <h1 className="text-2xl font-bold text-white tracking-tighter">NovaHire</h1>
        </div>
        
        <div className="space-y-3">
          <button 
            onClick={() => handleSignIn(googleProvider)}
            className="w-full py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            Sign in with Google
          </button>
          <button 
            onClick={() => handleSignIn(facebookProvider)}
            className="w-full py-3 bg-[#1877F2] text-white rounded-xl font-semibold hover:bg-[#166fe5] transition-colors flex items-center justify-center gap-2"
          >
            Sign in with Facebook
          </button>
        </div>
        
        <p className="text-center text-xs text-slate-500">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
