import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, LogIn, AlertCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = login(username, password);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-3xl bg-emerald-900/10 dark:bg-amber-400/15 text-emerald-900 dark:text-amber-400 flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white">
            Admin Portal Access
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sign in to manage courses, student enquiries, and media archives.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 shadow-2xl space-y-6">
          
          {/* Demo Credentials Notice */}
          <div className="p-3.5 rounded-2xl bg-emerald-900/5 dark:bg-amber-400/10 border border-emerald-800/15 dark:border-amber-400/20 flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-800 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">Demo Credentials:</span>
              <br />
              Username: <code className="font-bold text-emerald-900 dark:text-amber-300">admin</code> | Password: <code className="font-bold text-emerald-900 dark:text-amber-300">admin123</code>
            </div>
          </div>

          {error && (
            <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-base pt-3"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In to Dashboard</span>
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
