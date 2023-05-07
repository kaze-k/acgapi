const express = require("express");

const app = new express();
const router = express.Router();
const static = express.static;

module.exports = {
  app,
  router,
  static,
};
