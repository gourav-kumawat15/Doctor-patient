import React from 'react';
import { mockStats } from '../data/mockData';

const barData = [
  { day: 'Mon', patients: 18 },
  { day: 'Tue', patients: 24 },
  { day: 'Wed', patients: 15 },
  { day: 'Thu', patients: 30 },
  { day: 'Fri', patients: 22 },
  { day: 'Sat', patients: 8 },
  { day: 'Sun', patients: 5 },
];

const topDiagnoses = [
  { name: 'Hypertension', count: 312, pct: 25 },
  { name: 'Diabetes (Type 2)', count: 244, pct: 20 },
  { name: 'Asthma', count: 186, pct: 15 },
  { name: 'Osteoarthritis', count: 155, pct: 12 },
  { name: 'Migraine', count: 110, pct: 9 },
];

const maxPatients = Math.max(...barData.map(d => d.patients));

export default function Analytics() {
  return (
    <div className="analytics-view">
      <header className="page-header">
        <h1 className="text-2xl">Analytics</h1>
        <p className="text-muted">Health system performance at a glance</p>
      </header>

      {/* KPI Cards */}
      <div className="stats-grid mb-6">
        {[
          { label: 'Total Patients', value: mockStats.totalPatients, sub: '+12% this month' },
          { label: 'Avg. Wait Time', value: '14 min', sub: '-3 min vs last month' },
          { label: 'Recovery Rate', value: '94.2%', sub: 'Above target (90%)' },
          { label: 'Patient Satisfaction', value: '4.8/5', sub: 'Based on 240 reviews' },
        ].map((kpi, idx) => (
          <div key={idx} className="stat-card glass-surface flex-col" style={{ alignItems: 'flex-start', gap: '0.5rem' }}>
            <p className="text-muted text-sm">{kpi.label}</p>
            <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>{kpi.value}</h3>
            <span className="badge badge-success">{kpi.sub}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-6">
        {/* Bar Chart */}
        <div className="glass-surface flex-col" style={{ flex: 2, padding: '1.5rem' }}>
          <h2 className="text-xl mb-3">Weekly Patient Visits</h2>
          <div className="bar-chart">
            {barData.map((d, i) => (
              <div key={i} className="bar-col">
                <div
                  className="bar-fill"
                  style={{ height: `${(d.patients / maxPatients) * 100}%` }}
                  title={`${d.patients} patients`}
                />
                <span className="bar-label">{d.day}</span>
                <span className="bar-value">{d.patients}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Diagnoses */}
        <div className="glass-surface flex-col" style={{ flex: 1, padding: '1.5rem' }}>
          <h2 className="text-xl mb-3">Top Diagnoses</h2>
          <div className="diagnoses-list">
            {topDiagnoses.map((d, i) => (
              <div key={i} className="diagnosis-row">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{d.name}</span>
                  <span className="text-muted">{d.count}</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: `${d.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
