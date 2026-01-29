import React, { useState } from 'react';
import './Login.css';

const Login = ({ user, setUser }) => {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(form);
    alert('Logged in successfully!');
  };

  const handleLogout = () => {
    setUser(null);
    setForm({ name: '', email: '' });
    alert('Logged out successfully!');
  };

  // 🔹 If user is logged in
  if (user) {
    return (
      <div className="login logged-in">
        <h2>Welcome, {user.name} 👋</h2>
        <p>{user.email}</p>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    );
  }

  // 🔹 Login form
  return (
    <form onSubmit={handleLogin} className="login">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
