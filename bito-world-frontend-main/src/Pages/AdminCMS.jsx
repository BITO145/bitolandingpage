import React, { useEffect, useState } from 'react';

const AdminCMS = () => {
  const [cmsList, setCmsList] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const token = localStorage.getItem('adminToken');

  const fetchCMS = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/cms`);
    const data = await res.json();
    setCmsList(data);
  };

  useEffect(() => { fetchCMS(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${import.meta.env.VITE_API_URL}/cms/${editingId}` : `${import.meta.env.VITE_API_URL}/cms`;
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
      });
      if (!res.ok) throw new Error('Failed to save');
      setTitle(''); setContent(''); setEditingId(null);
      fetchCMS();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (cms) => {
    setTitle(cms.title);
    setContent(cms.content);
    setEditingId(cms._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this entry?')) return;
    await fetch(`${import.meta.env.VITE_API_URL}/cms/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCMS();
  };

  return (
    <div style={{ maxWidth: 700, margin: '60px auto', padding: 24 }}>
      <h2>CMS Management</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setTitle(''); setContent(''); }} style={{ marginLeft: 8 }}>Cancel</button>}
      </form>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Title</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Content</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cmsList.map(cms => (
            <tr key={cms._id}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{cms.title}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{cms.content}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <button onClick={() => handleEdit(cms)}>Edit</button>
                <button onClick={() => handleDelete(cms._id)} style={{ marginLeft: 8 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCMS; 