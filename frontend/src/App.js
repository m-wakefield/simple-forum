
import React, { useEffect, useState } from 'react';
import { fetchPosts, createPost, registerUser, loginUser } from './api';

function App() {
  const [user, setUser] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [regForm, setRegForm] = useState({ name: '', email: '' });
  const [form, setForm] = useState({ category: 'Hygiene', question: '' });
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await fetchPosts();
    setPosts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to ask a question');
      return;
    }
    await createPost({ ...form, userName: user.name, userId: user._id });
    setForm({ category: 'Hygiene', question: '' });
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {!user ? (
        <>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <button onClick={async () => {
            try {
              const { data } = await loginUser(emailInput);
              setUser(data);
              setEmailInput('');
              alert(`Welcome back, ${data.name}!`);
            } catch (err) {
              alert(err.response?.data?.message || 'Login failed');
            }
          }}>Login</button>
          <hr />
          <h3>Register</h3>
          <input
            type="text"
            placeholder="Name"
            value={regForm.name}
            onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
          /><br />
          <input
            type="email"
            placeholder="Email"
            value={regForm.email}
            onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
          /><br />
          <button onClick={async () => {
            try {
              const { data } = await registerUser(regForm);
              setUser(data);
              alert('User registered!');
            } catch (err) {
              alert(err.response?.data?.message || 'Registration failed');
            }
          }}>Register</button>
        </>
      ) : (
        <>
          <p><strong>Logged in as:</strong> {user.name}</p>
          <form onSubmit={handleSubmit}>
            <label>Category:</label><br />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="Hygiene">Hygiene</option>
              <option value="Medication">Medication</option>
              <option value="Behavior">Behavior</option>
            </select><br /><br />
            <textarea
              placeholder="Enter your question"
              value={form.question}
              onChange={(e) => setForm({ ...form, question: e.target.value })}
            /><br />
            <button type="submit">Post Question</button>
          </form>
        </>
      )}
      <hr />
      <h3>Submitted Questions:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <strong>{post.category}</strong>: {post.question} <br />
            <em>— {post.userName}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
