import React, { useState } from 'react';
import socket from './socket';

function App() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLogin = () => {
    if (!username) return;
    socket.emit('login', username);

    socket.on('loginSuccess', (msg) => {
      setWelcomeMessage(msg);
      setLoggedIn(true);
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Caregiving Forum Login</h1>

      {!loggedIn ? (
        <>
          <input
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <h2>{welcomeMessage}</h2>
      )}
    </div>
  );
}

export default App;
// This is a simple React app that connects to a Socket.IO server for user login.