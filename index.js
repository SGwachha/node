const http = require("http");
const host = "localhost";
const PORT = 3000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My First Server");
};

const server = http.createServer(requestListener);

server.listen(PORT, host, () => {
  console.log("server is listening from", host, PORT);
});

// console.log(host, PORT)
