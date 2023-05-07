const path = require("path");

const { router, static } = require("../utils/express");

const getImg = require("../controllers/getImg");
const handleUpload = require("../controllers/handleUpload");

// 查看图片接口
router.use("/public", static(path.resolve(__dirname, "../../static")));
router.use("/api", static(path.resolve(__dirname, "../../static/img")));

// 上传图片接口
router.post("/upload", (req, res) => {
  handleUpload(req, res);
});

// 随机返回图片
router.get("/api", (req, res) => {
  getImg(res);
});

module.exports = router;
