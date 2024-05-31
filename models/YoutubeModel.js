const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    YoutubeLink: { type: String, required: true },
    YoutubeDetails: { type: String, required: true },
  },
  { timestamps: true } 
);

ProductSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
    console.log("Gallery details are  saved");
  }
  console.log("save pta nahi");
});

//====================================================  Upload  ===========================================================

const productuploadDetails = mongoose.model("Youtube", ProductSchema);
module.exports = productuploadDetails;
