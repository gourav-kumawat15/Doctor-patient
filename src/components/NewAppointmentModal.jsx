import React, { useState } from 'react';
import { X } from 'lucide-react';
import { mockPatients } from '../data/mockData';

export default function NewAppointmentModal({ onClose }) {
  const [form, setForm] = useState({
    patient: '',
    date: '',
    time: '',
    type: 'Consultation',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.patient || !form.date || !form.time) {
      alert('Please fill in Patient, Date, and Time.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass-surface" onClick={e => e.stopPropagation()}>
        <div className="modal-header flex justify-between items-center">
          <h2 className="text-xl">New Appointment</h2>
          <button className="btn btn-ghost icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Appointment Booked!</h3>
            <p className="text-muted">The appointment for <strong>{form.patient}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong> has been scheduled.</p>
            <button className="btn btn-primary mt-auto" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Patient</label>
              <select name="patient" value={form.patient} onChange={handleChange} required>
                <option value="">— Select a patient —</option>
                {mockPatients.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Appointment Type</label>
              <select name="type" value={form.type} onChange={handleChange}>
                <option>Consultation</option>
                <option>Follow-up</option>
                <option>Routine Check</option>
                <option>Emergency</option>
                <option>Therapy</option>
              </select>
            </div>

            <div className="form-group">
              <label>Notes (optional)</label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Any special instructions or notes..."
                value={form.notes}
                onChange={handleChange}
              />
            </div>

            <div className="modal-actions flex gap-4">
              <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Book Appointment</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
