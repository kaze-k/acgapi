const path = require("path");
const multer = require("multer");

const MulterError = multer.MulterError;

const SIZELIMIT = 5 * 1024 * 1024;
const dir = path.resolve(__dirname, "../../static/img");
const filetypes = ["jpg", "jpeg", "png", "gif"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // cb(null, Date.now() + "-" + file.originalname);
    cb(null, Date.now() + "." + file.originalname.split(".").pop());
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: SIZELIMIT,
  },
  fileFilter: (req, file, cb) => {
    if (filetypes.indexOf(file.originalname.split(".").pop()) < 0) {
      return cb(
        `Only filetypes allowed are ${filetypes
          .toString()
          .replaceAll(",", ", ")}`,
        false
      );
    }
    cb(null, true);
  },
});

module.exports = {
  MulterError,
  upload,
};
