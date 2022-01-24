const express = require("express");
const app = express();
const cors = require("cors");
const { Server } = require("socket.io");
const port = 3000;
app.use(cors());
app.use(express.json());
const http = require("http").Server(app);
const requests = {};
const responseObjects = {};
const crypto = require("crypto");
const os = require("os");

const uniqueId = () => {
  return crypto.randomBytes(16).toString("hex");
};

// Initialize socket connection

const io = new Server(http, {
  cors: {
    origin: "*",
  },
});

let socketInstance = null;

io.on("connection", (socket) => {
  socketInstance = socket;
  console.log(socket.id);

  socketInstance.emit("pendingRequest", requests);

  socket.on("response", (data) => {
    console.log(data);
    if (data && data.id && requests[data.id] && responseObjects[data.id]) {
      try {
        data.response = JSON.parse(data.response);
      } catch (error) {}
      responseObjects[data.id].send(data.response);
      setTimeout(() => {
        delete responseObjects[data.id];
        delete requests[data.id];
      }, 3000);
      socketInstance.emit("delete", data.id);
    }
  });
});

const html = __dirname + '/frontend/dist/response-sender-client';

app.use("/api/*", (req, res) => {
  console.log('Got new request..')
  const obj = {
    path: req.baseUrl,
    requestMethod: req.method,
    hostname: req.hostname,
    body: req.body,
    query: req.query,
    headers: req.headers,
  };
  if (socketInstance) {
  console.log('Got new request..')

    const id = uniqueId();

    const requestObj = {
      id,
      requestObj: obj,
    };

    responseObjects[id] = res;

    requests[id] = { ...requestObj };
    socketInstance.emit("request", requestObj);
  }
});


// Static content
app.use(express.static(html))
// Default route
app.use('/', function(req, res) {
  res.sendFile(html + '/index.html');
})


http.listen(port, () => {
  console.log(`response sender app listening on port ${port}`);
  console.log(os.hostname());
});
