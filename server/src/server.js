const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 25565;
const users = {};

io.on('connection', (socket) => {
  const { address, port } = socket.request.connection._peername;
  const user = `${address}:${port}`;
  const socketID = socket.id;
  console.log(`Connected [${user}][${socketID}]`);
  users[user] = { id: socketID, currentRoom: 'Global' };
  console.log(users);

  socket.join(users[user].currentRoom);

  socket.on('disconnect', () => {
    console.log(`Disconnected ${user}`);
    delete users[user];
  });
});

io.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
