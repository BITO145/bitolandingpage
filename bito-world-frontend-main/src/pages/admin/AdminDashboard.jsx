import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('appointments');
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [lotus,setlotus]= useState([])

  const statusStyle = (status) => {
    const map = {
      pending:    { background: '#fff3cd', color: '#856404' },
      unread:     { background: '#fff3cd', color: '#856404' },
      confirmed:  { background: '#d1ecf1', color: '#0c5460' },
      read:       { background: '#d1ecf1', color: '#0c5460' },
      cancelled:  { background: '#f8d7da', color: '#721c24' },
      completed:  { background: '#d4edda', color: '#155724' },
      replied:    { background: '#d4edda', color: '#155724' },
      approved:   { background: '#d4edda', color: '#155724' },
      rejected:   { background: '#f8d7da', color: '#721c24' },
    };
    return map[status] || { background: '#fff3cd', color: '#856404' };
  };

  const navigate = useNavigate();

  const envBase = import.meta.env.VITE_API_BASE_URL || '';
  const API_BASE_URL = envBase;

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
      const lotusResponse = await fetch(`${API_BASE_URL}/forms`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
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
        endpoint = `${API_BASE_URL}/forms/${id}`;
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
      <div className="min-h-screen bg-[#f5f5f5] p-[20px] max-[768px]:p-[10px]">
        <div className="text-center py-[40px] text-[#666] text-[18px]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-[20px] max-[768px]:p-[10px]">
      <header className="flex justify-between items-center bg-white p-[20px] rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] mb-[20px] max-[768px]:flex-col max-[768px]:gap-[15px] max-[768px]:text-center">
        <h1>Admin Dashboard</h1>
        <button onClick={logout} className="bg-[#dc3545] text-white border-none py-[10px] px-[20px] rounded-[5px] cursor-pointer text-[14px] hover:bg-[#c82333]">Logout</button>
      </header>

      <div className="flex gap-[10px] mb-[20px] max-[768px]:flex-col">
        <button 
          className='${activeTab==="appointments" ? "bg-[#007bff] text-white border-2 border-[#007bff] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]" : "bg-white border-2 border-[#e0e0e0] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]"}'
          onClick={() => setActiveTab('appointments')}
        >
          Appointments ({appointments.length})
        </button>
        <button 
          className='${activeTab==="contacts" ? "bg-[#007bff] text-white border-2 border-[#007bff] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]" : "bg-white border-2 border-[#e0e0e0] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]"}'
          onClick={() => setActiveTab('contacts')}
        >
          Contact Forms ({contacts.length})
        </button>
        <button 
          className='${activeTab==="memberships" ? "bg-[#007bff] text-white border-2 border-[#007bff] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]" : "bg-white border-2 border-[#e0e0e0] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]"}'
          onClick={() => setActiveTab('memberships')}
        >
          Memberships ({memberships.length})
        </button>
        <button 
          className='${activeTab==="lotus" ? "bg-[#007bff] text-white border-2 border-[#007bff] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]" : "bg-white border-2 border-[#e0e0e0] py-[12px] px-[24px] rounded-[8px] cursor-pointer text-[16px] font-medium transition-all duration-300 ease-[ease] hover:bg-[#f8f9fa] hover:border-[#007bff]"}'
          onClick={() => setActiveTab('lotus')}
        >
          Lotus Registartion ({lotus.length})
        </button>
      </div>

      <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        {activeTab === 'appointments' && (
          <div className="appointments-section">
            <h2>Appointment Requests</h2>
            {appointments.length === 0 ? (
              <p className="text-center text-[#666] italic py-[40px]">No appointment requests found.</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[20px] max-[768px]:grid-cols-1">
                {appointments.map((appointment) => (
                  <div key={appointment._id} className="border border-[#e0e0e0] rounded-[8px] p-[20px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-shadow duration-300 ease-[ease] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-[15px] pb-[10px] border-b border-[#f0f0f0]">
                      <h3>{appointment.name}</h3>
                      <span style={{...statusStyle(appointment.status)}} className="py-[4px] px-[12px] rounded-[20px] text-[12px] font-medium uppercase">
                        {appointment.status}
                      </span>
                    </div>
                    <div className="my-[8px] text-[#666] text-[14px] leading-[1.4]">
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
                    <div className="flex gap-[10px] mt-[15px] pt-[15px] border-t border-[#f0f0f0] max-[768px]:flex-col">
                      <select 
                        value={appointment.status}
                        onChange={(e) => updateStatus('appointment', appointment._id, e.target.value)}
                        className="flex-1 py-[8px] px-[12px] border border-[#ddd] rounded-[5px] text-[14px] bg-white max-[768px]:mb-[10px]"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button 
                        onClick={() => deleteItem('appointment', appointment._id)}
                        className="bg-[#dc3545] text-white border-none py-[8px] px-[16px] rounded-[5px] cursor-pointer text-[14px] hover:bg-[#c82333]"
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
              <p className="text-center text-[#666] italic py-[40px]">No contact form submissions found.</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[20px] max-[768px]:grid-cols-1">
                {contacts.map((contact) => (
                  <div key={contact._id} className="border border-[#e0e0e0] rounded-[8px] p-[20px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-shadow duration-300 ease-[ease] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-[15px] pb-[10px] border-b border-[#f0f0f0]">
                      <h3>{contact.name}</h3>
                      <span style={{...statusStyle(contact.status)}} className="py-[4px] px-[12px] rounded-[20px] text-[12px] font-medium uppercase">
                        {contact.status}
                      </span>
                    </div>
                    <div className="my-[8px] text-[#666] text-[14px] leading-[1.4]">
                      <p><strong>Email:</strong> {contact.email}</p>
                      <p><strong>Message:</strong> {contact.message}</p>
                      {contact.adminNotes && (
                        <p><strong>Admin Notes:</strong> {contact.adminNotes}</p>
                      )}
                      <p><strong>Submitted:</strong> {formatDate(contact.createdAt)}</p>
                    </div>
                    <div className="flex gap-[10px] mt-[15px] pt-[15px] border-t border-[#f0f0f0] max-[768px]:flex-col">
                      <select 
                        value={contact.status}
                        onChange={(e) => updateStatus('contact', contact._id, e.target.value)}
                        className="flex-1 py-[8px] px-[12px] border border-[#ddd] rounded-[5px] text-[14px] bg-white max-[768px]:mb-[10px]"
                      >
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                      </select>
                      <button 
                        onClick={() => deleteItem('contact', contact._id)}
                        className="bg-[#dc3545] text-white border-none py-[8px] px-[16px] rounded-[5px] cursor-pointer text-[14px] hover:bg-[#c82333]"
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
              <p className="text-center text-[#666] italic py-[40px]">No membership applications found.</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[20px] max-[768px]:grid-cols-1">
                {memberships.map((membership) => (
                  <div key={membership._id} className="border border-[#e0e0e0] rounded-[8px] p-[20px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-shadow duration-300 ease-[ease] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-[15px] pb-[10px] border-b border-[#f0f0f0]">
                      <h3>{membership.name}</h3>
                      <span style={{...statusStyle(membership.status)}} className="py-[4px] px-[12px] rounded-[20px] text-[12px] font-medium uppercase">
                        {membership.status}
                      </span>
                    </div>
                    <div className="my-[8px] text-[#666] text-[14px] leading-[1.4]">
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
                    <div className="flex gap-[10px] mt-[15px] pt-[15px] border-t border-[#f0f0f0] max-[768px]:flex-col">
                      <select 
                        value={membership.status}
                        onChange={(e) => updateStatus('membership', membership._id, e.target.value)}
                        className="flex-1 py-[8px] px-[12px] border border-[#ddd] rounded-[5px] text-[14px] bg-white max-[768px]:mb-[10px]"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button 
                        onClick={() => deleteItem('membership', membership._id)}
                        className="bg-[#dc3545] text-white border-none py-[8px] px-[16px] rounded-[5px] cursor-pointer text-[14px] hover:bg-[#c82333]"
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
              <p className="text-center text-[#666] italic py-[40px]">No membership applications found.</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[20px] max-[768px]:grid-cols-1">
                {lotus.map((lotusItem) => (
                  <div key={lotus._id} className="border border-[#e0e0e0] rounded-[8px] p-[20px] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-shadow duration-300 ease-[ease] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-[15px] pb-[10px] border-b border-[#f0f0f0]">
                      <h3>{lotusItem.name}</h3>
                      <span style={{...statusStyle(lotusItem.status)}} className="py-[4px] px-[12px] rounded-[20px] text-[12px] font-medium uppercase">
                        {lotusItem.status}
                      </span>
                    </div>
                    <div className="my-[8px] text-[#666] text-[14px] leading-[1.4]">
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