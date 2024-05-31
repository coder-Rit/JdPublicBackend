const express = require("express")
const{YoutubeLinkUpload,FetchYoutubeVideo} = require("../controllers/YoutubeController");

const router = express.Router();

router.route("/link").post(YoutubeLinkUpload).get(FetchYoutubeVideo)
module.exports=router;