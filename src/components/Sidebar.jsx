import React from 'react';
import { LayoutDashboard, Users, Calendar, Activity, Settings, LogOut, X } from 'lucide-react';

export default function Sidebar({ currentView, setCurrentView, isOpen, onClose }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: Activity },
  ];

  return (
    <aside className={`sidebar glass-surface ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <Activity size={28} color="var(--color-primary)" />
          <h2>MediCare</h2>
        </div>
        {/* Close button inside sidebar */}
        <button className="sidebar-close-btn" onClick={onClose} title="Close sidebar">
          <X size={20} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={`nav-btn ${currentView === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentView(item.id)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-btn" onClick={() => alert('Settings coming soon!')}>
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="nav-btn" onClick={() => alert('You have been logged out.')}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
