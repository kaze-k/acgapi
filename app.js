const dotenv = require("dotenv");

const { app } = require("./src/utils/express");
const routers = require("./src/routers");
const handler = require("./src/utils/handler");

dotenv.config();

// 根路由
app.all("/", (req, res) => {
  let msg = "Successful deployment";

  handler(res, msg, true);
});

// 路由处理
app.use("/", routers);

// 404处理
app.use((req, res) => {
  let msg = "Disallow access";

  res.status(404);
  handler(res, msg);
});

module.exports = app;
