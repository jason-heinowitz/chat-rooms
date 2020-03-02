const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const moment = require('moment');

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

  socket.on('message out', (msg) => {
    console.log(`Message from ${user}: ${msg}`);
    const messageObj = {
      to: users[user].currentRoom,
      msg: {
        time: moment().format('MMMM Do YYYY, h:mm:ss a'), // March 2nd 2020, 8:51:52 am
        user: users[user].id,
        content: msg,
      },
    };
    console.log(messageObj);
    io.in(users[user].currentRoom).emit('message', messageObj);
  });

  socket.on('disconnect', () => {
    console.log(`Disconnected ${user}`);
    delete users[user];
    console.log(users);
  });
});

io.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
