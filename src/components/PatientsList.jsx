import React from 'react';
import { mockPatients } from '../data/mockData';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

export default function PatientsList() {
  return (
    <div className="patients-view">
      <header className="page-header flex justify-between items-center mb-6">
        <h1 className="text-2xl">Patients Directory</h1>
        <div className="header-actions flex gap-4">
          <div className="search-bar flex items-center glass-surface px-3 py-2 rounded-md">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Search patients..." className="border-none bg-transparent outline-none ml-2" />
          </div>
          <button className="btn btn-ghost glass-surface"><Filter size={18} /> Filter</button>
          <button className="btn btn-primary">+ Add Patient</button>
        </div>
      </header>

      <div className="table-container glass-surface">
        <table className="patients-table w-full text-left border-collapse">
          <thead>
            <tr className="text-muted text-sm border-b">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Age/Gender</th>
              <th className="py-3 px-4">Condition</th>
              <th className="py-3 px-4">Last Visit</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockPatients.map(patient => (
              <tr key={patient.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 font-medium flex items-center gap-3">
                  <div className="avatar text-xs">{patient.name.charAt(0)}</div>
                  {patient.name}
                </td>
                <td className="py-3 px-4 text-sm text-muted">{patient.age} / {patient.gender}</td>
                <td className="py-3 px-4 text-sm">{patient.condition}</td>
                <td className="py-3 px-4 text-sm text-muted">{patient.lastVisit}</td>
                <td className="py-3 px-4">
                  <span className={`badge badge-${patient.status === 'Stable' ? 'success' : patient.status === 'Critical' ? 'danger' : 'warning'}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="btn btn-ghost p-1"><MoreHorizontal size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
