import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };
  return (
    <div style={{ maxWidth: 600, margin: '60px auto', padding: 24 }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      <button onClick={handleLogout} style={{ marginTop: 20 }}>Logout</button>
    </div>
  );
};

export default AdminDashboard; 