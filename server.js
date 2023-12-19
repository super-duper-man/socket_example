const server = require("http").createServer();
const io = require("socket.io")(server, { origins: "*:*" });

const PORT = 3000;

let readyPlayerCount = 0;

io.on("connection", (socket) => {
  console.log("User connected as " + socket.id);

  socket.on("ready", () => {
    console.log("Player ready", socket.id);
    console.log(":::::::::::::::::::::::::::::::");
    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      io.emit("startGame", socket.id);
    }
  });

  socket.on("paddleMove", (paddleData) => {
    socket.broadcast.emit("paddleMove", paddleData);
  });
});

server.listen(PORT, () => {
  console.log(`server is listening to ${PORT}...`);
});
