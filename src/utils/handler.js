const { SuccessModel, ErrorModel } = require("../model/responseModel");

const handler = (res, msg, data) => {
  if (data) {
    return res.send(new SuccessModel(msg, data));
  } else {
    return res.send(new ErrorModel(msg, data));
  }
};

module.exports = handler;
