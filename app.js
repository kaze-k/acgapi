const dotenv = require("dotenv");

const { app } = require("./src/utils/express");
const routers = require("./src/routers");
const handler = require("./src/utils/handler");

dotenv.config();

app.use("/", routers);

app.all("*", (req, res) => {
  const data = {
    status: "Successful deployment",
  };
  let msg = "No response";

  res.status(200);
  return handler(res, msg, data);
});

module.exports = app;
