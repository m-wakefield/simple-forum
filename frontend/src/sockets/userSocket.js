function registerUserSocket(socket) {
  socket.on('login', (username) => {
    console.log(`👤 ${username} logged in`);
    socket.emit('loginSuccess', `Welcome ${username}`);
  });

  socket.on('disconnect', () => {
    console.log('🔴 Client disconnected:', socket.id);
  });
}

module.exports = registerUserSocket;
