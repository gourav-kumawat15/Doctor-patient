import React from 'react';
import { mockAppointments } from '../data/mockData';
import { Clock, Calendar } from 'lucide-react';

export default function Appointments({ onNewAppointment }) {
  const grouped = mockAppointments.reduce((acc, app) => {
    if (!acc[app.date]) acc[app.date] = [];
    acc[app.date].push(app);
    return acc;
  }, {});

  return (
    <div className="appointments-view">
      <header className="page-header flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl">Appointments</h1>
          <p className="text-muted">Manage scheduled visits and consultations</p>
        </div>
        <button className="btn btn-primary" onClick={onNewAppointment}>+ New Appointment</button>
      </header>

      {Object.entries(grouped).map(([date, apps]) => (
        <div key={date} className="appointment-group mb-6">
          <div className="appointment-date-label flex items-center gap-2 mb-3">
            <Calendar size={16} color="var(--color-primary)" />
            <span className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>{date}</span>
          </div>
          <div className="glass-surface">
            {apps.map((app, idx) => (
              <div
                key={app.id}
                className={`appointment-row flex justify-between items-center px-4 py-3 ${idx < apps.length - 1 ? 'border-b' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="avatar">{app.patientName.charAt(0)}</div>
                  <div>
                    <h4 className="font-medium">{app.patientName}</h4>
                    <p className="text-xs text-muted">{app.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted">
                    <Clock size={14} />
                    {app.time}
                  </div>
                  <span className={`badge badge-${app.status === 'Completed' ? 'success' : app.status === 'Upcoming' ? 'primary' : 'warning'}`}>
                    {app.status}
                  </span>
                  <button
                    className="btn btn-ghost text-xs"
                    onClick={() => alert(`Viewing details for ${app.patientName}'s ${app.type} appointment.`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
