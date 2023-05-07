const handler = require("../utils/handler");
const { upload, MulterError } = require("../utils/multer");

const fieldname = "img";
const uploadImg = upload.single(fieldname);

const handleUpload = (req, res) => {
  uploadImg(req, res, (err) => {
    if (err instanceof MulterError) {
      if (err.field !== fieldname) {
        let msg = `Field should be ${fieldname}`;
        return handler(res, msg);
      }
      return handler(res, err.message);
    } else if (err) {
      return handler(res, err);
    }

    // NOTE: 输出调试信息
    // console.log(req.file);

    if (req.file === undefined) {
      let msg = `No ${fieldname} uploaded`;
      return handler(res, msg);
    }

    const { size, mimetype, filename, originalname } = req.file;

    const main =
      process.env.NODE_ENV === "development"
        ? req.headers.host
        : process.env.DOMAIN;

    const url = "/public/img/" + filename;

    const data = {
      url: `${req.protocol}://${main}${url}`,
      filename: originalname,
      size: (size / 1024 / 1024).toFixed(2) + "MB",
      mimetype: mimetype,
    };
    let msg = "upload success";

    return handler(res, msg, data);
  });
};

module.exports = handleUpload;
