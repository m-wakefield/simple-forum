const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: '*',
}));
app.use(express.json());

// Basic root
app.get('/', (req, res) => {
  res.send('✅ API is running');
});

// Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: '*', // frontend URL here later
    methods: ['GET', 'POST'],
  }
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('🟢 New client connected:', socket.id);

  socket.on('login', (username) => {
    console.log(`👤 ${username} logged in`);
    // You can emit back to client if needed
    socket.emit('loginSuccess', `Welcome ${username}`);
  });

  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
// Connect to MongoDB