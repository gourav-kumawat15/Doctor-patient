import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PatientsList from './components/PatientsList';
import Appointments from './components/Appointments';
import Analytics from './components/Analytics';
import NewAppointmentModal from './components/NewAppointmentModal';
import { Menu } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} onNewAppointment={() => setShowModal(true)} />;
      case 'patients':
        return <PatientsList />;
      case 'appointments':
        return <Appointments onNewAppointment={() => setShowModal(true)} />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard setCurrentView={setCurrentView} onNewAppointment={() => setShowModal(true)} />;
    }
  };

  return (
    <div className={`app-container ${sidebarOpen ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      {/* Hamburger toggle button */}
      <button
        className="sidebar-toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <Menu size={22} />
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        currentView={currentView}
        setCurrentView={(view) => {
          setCurrentView(view);
          // On small screens, close sidebar after nav
          if (window.innerWidth < 768) setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        {renderContent()}
      </main>

      {showModal && (
        <NewAppointmentModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
