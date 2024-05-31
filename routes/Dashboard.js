const express = require("express")
const{GalleryDataUpload,FetchGalleryData} = require("../controllers/DashboardController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./GalleryImages");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.route("/GalleryDataUpload").post(upload.single("productImage"),GalleryDataUpload).get(FetchGalleryData)
module.exports=router;