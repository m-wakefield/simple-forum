import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // change this to your Render URL when deploying

export default socket;
