import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // change this if you deploy backend

export default socket;
// This code initializes a Socket.IO client that connects to the backend server.