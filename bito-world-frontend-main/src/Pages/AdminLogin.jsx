import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
      console.log('Attempting login to:', `${apiUrl}/auth/admin/login`);
      
      const res = await fetch(`${apiUrl}/auth/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: 'Network error' }));
        throw new Error(errorData.message || `HTTP ${res.status}: Login failed`);
      }
      
      const data = await res.json();
      console.log('Login successful:', data);
      
      localStorage.setItem('adminToken', data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div style={{ 
      maxWidth: 400, 
      margin: '60px auto', 
      padding: 30, 
      border: '1px solid #e0e0e0', 
      borderRadius: 10,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30, color: '#333' }}>🔐 Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#555' }}>
            Email
          </label>
          <input
            type="email"
            placeholder="admin@bitoworld.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: 12, 
              border: '1px solid #ddd',
              borderRadius: 5,
              fontSize: 16
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', marginBottom: 5, fontWeight: 'bold', color: '#555' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: 12, 
              border: '1px solid #ddd',
              borderRadius: 5,
              fontSize: 16
            }}
          />
        </div>
        {error && (
          <div style={{ 
            color: '#dc3545', 
            marginBottom: 20, 
            padding: 10,
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: 5
          }}>
            ❌ {error}
          </div>
        )}
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: 12, 
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 5,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
      
      <div style={{ 
        marginTop: 20, 
        padding: 15, 
        backgroundColor: '#e7f3ff', 
        borderRadius: 5,
        fontSize: 14,
        color: '#0c5460'
      }}>
        <strong>Test Credentials:</strong><br/>
        Email: admin@bitoworld.com<br/>
        Password: admin123
      </div>
    </div>
  );
};

export default AdminLogin; 