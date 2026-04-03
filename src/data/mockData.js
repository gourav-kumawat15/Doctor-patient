export const mockPatients = [
  { id: 1, name: "Emily Chen", age: 34, gender: "Female", condition: "Asthma", lastVisit: "2023-11-15", status: "Stable" },
  { id: 2, name: "Marcus Johnson", age: 52, gender: "Male", condition: "Hypertension", lastVisit: "2023-10-22", status: "Needs Review" },
  { id: 3, name: "Sarah Williams", age: 28, gender: "Female", condition: "Type 1 Diabetes", lastVisit: "2023-12-01", status: "Stable" },
  { id: 4, name: "James Taylor", age: 61, gender: "Male", condition: "Osteoarthritis", lastVisit: "2023-11-28", status: "Stable" },
  { id: 5, name: "Olivia Brown", age: 45, gender: "Female", condition: "Migraine", lastVisit: "2023-09-14", status: "Critical" },
  { id: 6, name: "William Davis", age: 70, gender: "Male", condition: "Coronary Artery", lastVisit: "2023-11-05", status: "Needs Review" },
];

export const mockAppointments = [
  { id: 101, patientId: 2, patientName: "Marcus Johnson", date: "Today", time: "09:00 AM", type: "Follow-up", status: "Completed" },
  { id: 102, patientId: 5, patientName: "Olivia Brown", date: "Today", time: "11:30 AM", type: "Consultation", status: "Upcoming" },
  { id: 103, patientId: 1, patientName: "Emily Chen", date: "Today", time: "02:15 PM", type: "Routine Check", status: "Upcoming" },
  { id: 104, patientId: 4, patientName: "James Taylor", date: "Tomorrow", time: "10:00 AM", type: "Therapy", status: "Scheduled" },
];

export const mockStats = {
  totalPatients: 1248,
  todayAppointments: 12,
  pendingReports: 5,
  activeStaff: 8
};
