import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, CheckCircle, Clock, Filter } from 'lucide-react';
import { buildDynamicWhatsAppLink } from '../../utils/whatsapp';

const MOCK_LEADS = [
  {
    id: 101,
    full_name: 'Priya Sundaram',
    email: 'priya.s@example.com',
    phone_number: '+91 98450 12345',
    course_interested: 'Bharatanatyam Foundation Program',
    message: 'Interested in weekend morning batches for beginners.',
    status: 'New',
    created_at: '2026-06-28'
  },
  {
    id: 102,
    full_name: 'Anand Kumar',
    email: 'anand.k@example.com',
    phone_number: '+91 97310 67890',
    course_interested: 'Carnatic Vocal Primer',
    message: 'Looking for advanced raga training details.',
    status: 'Contacted',
    created_at: '2026-06-25'
  },
  {
    id: 103,
    full_name: 'Deepa Rao',
    email: 'deepa.rao@example.com',
    phone_number: '+91 99001 22334',
    course_interested: 'Classical Veena Mastery',
    message: 'Inquiring about instrumental rental options during class.',
    status: 'Closed',
    created_at: '2026-06-20'
  }
];

export default function EnquiryLeadsTable() {
  const [leads, setLeads] = useState(MOCK_LEADS);
  const [statusFilter, setStatusFilter] = useState('All');

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
    );
  };

  const filteredLeads = statusFilter === 'All'
    ? leads
    : leads.filter((l) => l.status === statusFilter);

  const openWhatsApp = (lead) => {
    const msg = `Hello ${lead.full_name}, this is Mayura Academy responding to your enquiry about "${lead.course_interested}".`;
    const url = buildDynamicWhatsAppLink(lead.phone_number, msg);
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      
      {/* Table Header & Status Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Mail className="w-5 h-5 text-emerald-800 dark:text-amber-400" />
            <span>Admission Lead Enquiries ({leads.length})</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Track student leads and initiate WhatsApp communication.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-1 glass-card p-1 rounded-xl text-xs font-semibold">
          {['All', 'New', 'Contacted', 'Closed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                statusFilter === st
                  ? 'bg-emerald-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="glass-card rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-100/80 dark:bg-slate-800/80 uppercase text-[11px] font-bold tracking-wider text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Applicant</th>
                <th className="px-6 py-4">Program</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                      {lead.full_name}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center space-x-2 mt-0.5">
                      <span>{lead.email}</span>
                      <span>•</span>
                      <span>{lead.phone_number}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {lead.course_interested}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold outline-none border cursor-pointer ${
                        lead.status === 'New'
                          ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:bg-emerald-400/20 dark:text-emerald-300'
                          : lead.status === 'Contacted'
                          ? 'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:bg-amber-400/20 dark:text-amber-300'
                          : 'bg-slate-500/10 text-slate-600 border-slate-500/30 dark:bg-slate-700/30 dark:text-slate-400'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                    {lead.created_at}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => openWhatsApp(lead)}
                      className="inline-flex items-center space-x-1 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-[11px] font-semibold shadow transition-colors"
                      title="Initiate WhatsApp Chat"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
