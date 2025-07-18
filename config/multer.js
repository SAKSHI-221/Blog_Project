const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "4.BlogProject",
    allowedFormats: ["jpg", "png"],
  },
});

const upload = multer({ storage });
module.exports = upload;
