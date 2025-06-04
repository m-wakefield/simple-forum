import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://caregiving-forum-api.onrender.com/api/test')
      .then(res => setMessage(res.data))
      .catch(err => {
        console.error("❌ API Error:", err);
        if (err.response) {
          setMessage("❌ " + err.response.data.message);
        } else {
          setMessage("❌ API failed");
        }
      });
  }, []); // 👈 THIS was likely missing!

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React + API Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
