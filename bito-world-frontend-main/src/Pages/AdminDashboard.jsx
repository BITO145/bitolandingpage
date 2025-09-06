import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('appointments');
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [lotus,setlotus]= useState([])
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_MEMBERSHIP_BACKEND_URL;


  const API_BASE_URL = 'https://bitolandingpage-iyhj.vercel.app/api';

  useEffect(() => {
    if (!token) {
      navigate('/admin-login');
      return;
    }
    fetchData();
  }, [token, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch appointments
      const appointmentsResponse = await fetch(`${API_BASE_URL}/appointment/admin/all`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      // Fetch contacts
      const contactsResponse = await fetch(`${API_BASE_URL}/contact/admin/all`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Fetch memberships
      const membershipsResponse = await fetch(`${API_BASE_URL}/membership/admin/all`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const lotusResponse = await fetch(`${BACKEND_URL}/api/forms`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (appointmentsResponse.ok) {
        const appointmentsData = await appointmentsResponse.json();
        setAppointments(appointmentsData.data?.appointments || []);
      }

      if (contactsResponse.ok) {
        const contactsData = await contactsResponse.json();
        setContacts(contactsData.data?.contacts || []);
      }

      if (membershipsResponse.ok) {
        const membershipsData = await membershipsResponse.json();
        setMemberships(membershipsData.data?.memberships || []);
      }
      if(lotusResponse.ok){
        const lotusData = await lotusResponse.json();
        setlotus(lotusData || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (type, id, status, notes = '') => {
    try {
      let endpoint;
      if (type === 'appointment') {
        endpoint = `${API_BASE_URL}/appointment/admin/${id}/status`;
      } else if (type === 'contact') {
        endpoint = `${API_BASE_URL}/contact/admin/${id}/status`;
      } else if (type === 'membership') {
        endpoint = `${API_BASE_URL}/membership/admin/${id}/status`;
      }

      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status, adminNotes: notes })
      });

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteItem = async (type, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      let endpoint;
      if (type === 'appointment') {
        endpoint = `${API_BASE_URL}/appointment/admin/${id}`;
      } else if (type === 'contact') {
        endpoint = `${API_BASE_URL}/contact/admin/${id}`;
      } else if (type === 'membership') {
        endpoint = `${API_BASE_URL}/membership/admin/${id}`;
      } else if(type==='lotus'){
        endpoint = `${BACKEND_URL}/api/forms/${id}`;
      }

      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={logout} className="logout-btn">Logout</button>
      </header>

      <div className="tab-container">
        <button 
          className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
          onClick={() => setActiveTab('appointments')}
        >
          Appointments ({appointments.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
          onClick={() => setActiveTab('contacts')}
        >
          Contact Forms ({contacts.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'memberships' ? 'active' : ''}`}
          onClick={() => setActiveTab('memberships')}
        >
          Memberships ({memberships.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'lotus' ? 'active' : ''}`}
          onClick={() => setActiveTab('lotus')}
        >
          Lotus Registartion ({lotus.length})
        </button>
      </div>

      <div className="content-area">
        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <h2>Appointment Requests</h2>
            {appointments.length === 0 ? (
              <p className="no-data">No appointment requests found.</p>
            ) : (
              <div className="data-grid">
                {appointments.map((appointment) => (
                  <div key={appointment._id} className="data-card">
                    <div className="card-header">
                      <h3>{appointment.name}</h3>
                      <span className={`status ${appointment.status}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="card-content">
                      <p><strong>Email:</strong> {appointment.email}</p>
                      <p><strong>Phone:</strong> {appointment.phone}</p>
                      <p><strong>Leader:</strong> {appointment.leaderName} ({appointment.leaderRole})</p>
                      <p><strong>Date:</strong> {formatDate(appointment.date)}</p>
                      <p><strong>Time:</strong> {appointment.time}</p>
                      <p><strong>Purpose:</strong> {appointment.purpose}</p>
                      {appointment.customPurpose && (
                        <p><strong>Custom Purpose:</strong> {appointment.customPurpose}</p>
                      )}
                      {appointment.message && (
                        <p><strong>Message:</strong> {appointment.message}</p>
                      )}
                      {appointment.adminNotes && (
                        <p><strong>Admin Notes:</strong> {appointment.adminNotes}</p>
                      )}
                      <p><strong>Submitted:</strong> {formatDate(appointment.createdAt)}</p>
                    </div>
                    <div className="card-actions">
                      <select 
                        value={appointment.status}
                        onChange={(e) => updateStatus('appointment', appointment._id, e.target.value)}
                        className="status-select"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button 
                        onClick={() => deleteItem('appointment', appointment._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="contacts-section">
            <h2>Contact Form Submissions</h2>
            {contacts.length === 0 ? (
              <p className="no-data">No contact form submissions found.</p>
            ) : (
              <div className="data-grid">
                {contacts.map((contact) => (
                  <div key={contact._id} className="data-card">
                    <div className="card-header">
                      <h3>{contact.name}</h3>
                      <span className={`status ${contact.status}`}>
                        {contact.status}
                      </span>
                    </div>
                    <div className="card-content">
                      <p><strong>Email:</strong> {contact.email}</p>
                      <p><strong>Message:</strong> {contact.message}</p>
                      {contact.adminNotes && (
                        <p><strong>Admin Notes:</strong> {contact.adminNotes}</p>
                      )}
                      <p><strong>Submitted:</strong> {formatDate(contact.createdAt)}</p>
                    </div>
                    <div className="card-actions">
                      <select 
                        value={contact.status}
                        onChange={(e) => updateStatus('contact', contact._id, e.target.value)}
                        className="status-select"
                      >
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                      </select>
                      <button 
                        onClick={() => deleteItem('contact', contact._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'memberships' && (
          <div className="memberships-section">
            <h2>Membership Applications</h2>
            {memberships.length === 0 ? (
              <p className="no-data">No membership applications found.</p>
            ) : (
              <div className="data-grid">
                {memberships.map((membership) => (
                  <div key={membership._id} className="data-card">
                    <div className="card-header">
                      <h3>{membership.name}</h3>
                      <span className={`status ${membership.status}`}>
                        {membership.status}
                      </span>
                    </div>
                    <div className="card-content">
                      <p><strong>Email:</strong> {membership.email}</p>
                      <p><strong>Phone:</strong> {membership.phone}</p>
                      <p><strong>Organization:</strong> {membership.organization || 'N/A'}</p>
                      <p><strong>Membership Type:</strong> {membership.membershipType}</p>
                      {membership.message && (
                        <p><strong>Message:</strong> {membership.message}</p>
                      )}
                      {membership.adminNotes && (
                        <p><strong>Admin Notes:</strong> {membership.adminNotes}</p>
                      )}
                      <p><strong>Submitted:</strong> {formatDate(membership.createdAt)}</p>
                    </div>
                    <div className="card-actions">
                      <select 
                        value={membership.status}
                        onChange={(e) => updateStatus('membership', membership._id, e.target.value)}
                        className="status-select"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button 
                        onClick={() => deleteItem('membership', membership._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {/* LOTUS REGISTARTION */}
        {activeTab === 'lotus' && (
          <div className="lotusregstration-section">
            <h2>Lotus Registration</h2>
            {lotus.length === 0 ? (
              <p className="no-data">No membership applications found.</p>
            ) : (
              <div className="data-grid">
                {lotus.map((lotusItem) => (
                  <div key={lotus._id} className="data-card">
                    <div className="card-header">
                      <h3>{lotusItem.name}</h3>
                      <span className={`status ${lotusItem.status}`}>
                        {lotusItem.status}
                      </span>
                    </div>
                    <div className="card-content">
                      <p><strong>Form Type:</strong> {lotusItem.formType}</p>
                      <p><strong>Email:</strong> {lotusItem.email}</p>
                      <p><strong>Phone:</strong> {lotusItem.phone}</p>
                      <p><strong>Company:</strong> {lotusItem.company || 'N/A'}</p>
                      <p><strong>Country:</strong> {lotusItem.country}</p>
                      <p><strong>City:</strong> {lotusItem.city}</p>
                      <p><strong>Designation:</strong> {lotusItem.designation}</p>
                      <p><strong>Purpose:</strong> {lotusItem.designation}</p>
                      <p><strong>Additional Info:</strong> {lotusItem.additionalInfo}</p>
                      <p><strong>Submitted:</strong> {formatDate(lotusItem.createdAt)}</p>
                    </div>
                    <button className='delete-btn' onClick={() => deleteItem('lotus', lotusItem._id)}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 