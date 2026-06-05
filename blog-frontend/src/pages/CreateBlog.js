import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/blogs', 
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Blog Created Successfully!');
      navigate('/');
    } catch (err) {
      alert('Failed to create blog! Please login first!');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h2>Write a Blog</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      /><br />
      <textarea
        placeholder="Write your blog content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', height: '200px' }}
      /><br />
      <button
        onClick={handleCreate}
        style={{ width: '100%', padding: '10px', background: 'green', color: 'white' }}
      >
        Publish Blog
      </button>
      <button
        onClick={() => navigate('/')}
        style={{ width: '100%', padding: '10px', background: 'gray', color: 'white', marginTop: '10px' }}
      >
        Cancel
      </button>
    </div>
  );
}

export default CreateBlog;