const server = require("http").createServer();
const io = require("socket.io")(server, { origins: "*:*" });

const PORT = 3000;

io.on("connection", (socket) => {
  console.log("User connected as " + socket.id);
});

server.listen(PORT, () => {
  console.log(`server is listening to ${PORT}...`);
});
