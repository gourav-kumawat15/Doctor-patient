import React from 'react';
import { mockStats, mockAppointments } from '../data/mockData';
import { Users, CalendarCheck, ClipboardList, Stethoscope } from 'lucide-react';

export default function Dashboard() {
  const statCards = [
    { label: 'Total Patients', value: mockStats.totalPatients, icon: Users, color: 'primary' },
    { label: "Today's Appointments", value: mockStats.todayAppointments, icon: CalendarCheck, color: 'success' },
    { label: 'Pending Reports', value: mockStats.pendingReports, icon: ClipboardList, color: 'warning' },
    { label: 'Active Staff', value: mockStats.activeStaff, icon: Stethoscope, color: 'danger' }
  ];

  return (
    <div className="dashboard-view">
      <header className="page-header flex justify-between items-center">
        <div>
          <h1 className="text-2xl">Overview</h1>
          <p className="text-muted">Welcome back, Dr. Smith</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">+ New Appointment</button>
        </div>
      </header>

      <div className="stats-grid">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="stat-card glass-surface">
              <div className={`stat-icon bg-${stat.color}`}>
                <Icon size={24} />
              </div>
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p className="text-muted">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-content grid flex gap-6 mt-6">
        <div className="upcoming-appointments glass-surface flex-col flex" style={{ flex: 2 }}>
          <div className="card-header flex justify-between items-center">
            <h2 className="text-xl">Upcoming Appointments</h2>
            <button className="btn btn-ghost text-sm">View All</button>
          </div>
          <div className="appointments-list">
            {mockAppointments.map(app => (
              <div key={app.id} className="appointment-item flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="avatar">{app.patientName.charAt(0)}</div>
                  <div>
                    <h4 className="font-medium">{app.patientName}</h4>
                    <p className="text-xs text-muted">{app.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{app.time}</div>
                  <div className={`badge badge-${app.status === 'Completed' ? 'success' : app.status === 'Upcoming' ? 'primary' : 'warning'}`}>
                    {app.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-activity glass-surface flex-col flex" style={{ flex: 1 }}>
           <div className="card-header">
            <h2 className="text-xl">Recent Activity</h2>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot success"></div>
              <p className="text-sm">Lab results for <strong>Emily Chen</strong> are ready.</p>
              <span className="text-xs text-muted">10 mins ago</span>
            </div>
            <div className="activity-item">
              <div className="activity-dot primary"></div>
              <p className="text-sm">New patient <strong>Mark Johnson</strong> registered.</p>
              <span className="text-xs text-muted">2 hours ago</span>
            </div>
            <div className="activity-item">
              <div className="activity-dot warning"></div>
              <p className="text-sm">Meeting with Dr. Adams rescheduled.</p>
              <span className="text-xs text-muted">Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
