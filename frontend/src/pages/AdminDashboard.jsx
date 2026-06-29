import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Mail, LogOut, Shield, LayoutDashboard, Users, Award, Sparkles } from 'lucide-react';
import CourseManagementTable from '../components/admin/CourseManagementTable';
import EnquiryLeadsTable from '../components/admin/EnquiryLeadsTable';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-between bg-slate-500/5 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-8">
        
        {/* Dashboard Top Header */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-8 border-l-emerald-800 dark:border-l-amber-400 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Control Panel</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
              Academy Management Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Logged in as <span className="font-semibold text-slate-900 dark:text-white">{user?.username || 'Admin'}</span> ({user?.role || 'Super Admin'})
            </p>
          </div>

          <button
            onClick={logout}
            className="px-5 py-2.5 glass-button rounded-xl text-xs font-semibold flex items-center space-x-2 text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Overview Stat Widgets */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-5 space-y-1">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">Total Offerings</div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">6 Programs</div>
          </div>
          <div className="glass-card rounded-2xl p-5 space-y-1">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">New Enquiries</div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-700 dark:text-amber-400">3 Pending</div>
          </div>
          <div className="glass-card rounded-2xl p-5 space-y-1">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">Enrolled Disciples</div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white">1,500+</div>
          </div>
          <div className="glass-card rounded-2xl p-5 space-y-1">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">System Status</div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-800 dark:text-emerald-400 flex items-center space-x-1">
              <Sparkles className="w-5 h-5" />
              <span>Operational</span>
            </div>
          </div>
        </div>

        {/* Module Navigation Tabs */}
        <div className="flex space-x-3 border-b border-slate-200 dark:border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-2xl font-display font-bold text-sm flex items-center space-x-2 transition-all ${
              activeTab === 'courses'
                ? 'bg-emerald-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-lg'
                : 'glass-button'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Course Catalog Management</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`px-6 py-3 rounded-2xl font-display font-bold text-sm flex items-center space-x-2 transition-all ${
              activeTab === 'leads'
                ? 'bg-emerald-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-lg'
                : 'glass-button'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Admission Leads</span>
          </button>
        </div>

        {/* Active Tab View */}
        <div className="pt-2">
          {activeTab === 'courses' ? <CourseManagementTable /> : <EnquiryLeadsTable />}
        </div>

      </div>
    </div>
  );
}
