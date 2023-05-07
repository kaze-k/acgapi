const http = require("http");

const app = require("./app");

// 端口
const port = process.env.PORT;

// IP
const host = "127.0.0.1";

// 创建服务
const server = http.createServer(app);

// 请求时间超时
server.timeout = 5000;

server.listen(port, () => {
  console.log(`server in http://${host}:${port}`);
});
