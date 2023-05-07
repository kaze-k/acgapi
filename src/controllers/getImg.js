const path = require("path");
const fs = require("fs");

const handler = require("../utils/handler");

const getImg = (res) => {
  const dir = path.resolve(__dirname, "../../static/img/");

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return handler(res, err);
    }

    const file = files[Math.floor(Math.random() * files.length)];

    res.redirect(`./${file}`);
  });
};

module.exports = getImg;
