import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PatientsList from './components/PatientsList';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientsList />;
      case 'appointments':
        return (
          <div className="glass-surface p-6 flex items-center justify-center h-64 mt-8">
            <h2 className="text-xl text-muted">Appointments View Coming Soon</h2>
          </div>
        );
      case 'analytics':
        return (
          <div className="glass-surface p-6 flex items-center justify-center h-64 mt-8">
            <h2 className="text-xl text-muted">Analytics Dashboard Coming Soon</h2>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
