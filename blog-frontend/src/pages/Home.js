import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get('https://blog-platform-hqxg.onrender.com')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Blog Platform</h2>
        <div>
          {user ? (
            <>
              <button onClick={() => navigate('/create')}
                style={{ marginRight: '10px', padding: '8px', background: 'green', color: 'white' }}>
                Write Blog
              </button>
              <button onClick={handleLogout}
                style={{ padding: '8px', background: 'red', color: 'white' }}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate('/login')}
              style={{ padding: '8px', background: 'blue', color: 'white' }}>
              Login
            </button>
          )}
        </div>
      </div>
      {blogs.map(blog => (
        <div key={blog._id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <small>By: {blog.author?.username}</small>
        </div>
      ))}
    </div>
  );
}

export default Home;