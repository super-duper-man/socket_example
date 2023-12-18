const server = require("http").createServer();
const io = require("socket.io")(server);

const PORT = 3000;

io.on("connection", (socket) => {
  console.log("User connected");
});

server.listen(PORT, () => {
  console.log(`server is listening to ${PORT}...`);
});
