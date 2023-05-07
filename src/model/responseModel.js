class BaseModel {
  constructor(msg, data) {
    if (msg && typeof msg === "string") {
      this.msg = msg;
    } else {
      this.msg = "Unknown error";
    }

    if (data && data instanceof Object) {
      this.data = data;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(msg, data) {
    super(msg, data);
    this.error = 0;
    return this;
  }
}

class ErrorModel extends BaseModel {
  constructor(msg, data) {
    super(msg, data);
    this.error = -1;
    return this;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
