import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('https://blog-platform-hqxg.onrender.com', {
        username, email, password
      });
      alert('Registered Successfully! Please Login!');
      navigate('/login');
    } catch (err) {
      alert('Registration failed! Try again!');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      /><br />
      <button
        onClick={handleRegister}
        style={{ width: '100%', padding: '10px', background: 'green', color: 'white' }}
      >
        Register
      </button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Register;