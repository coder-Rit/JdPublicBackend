const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    pdfDetails: { type: String, required: true },
    pdfFile: { type: String, required: true },
  },
  { timestamps: true } // this adds created and update time timestamps is mongoose reserved keyword
);

ProductSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
    console.log("Gallery details are  saved");
  }
  console.log("save pta nahi");
});

//====================================================  Upload  ===========================================================

const productuploadDetails = mongoose.model("MandatoryDisclosure", ProductSchema);
module.exports = productuploadDetails;
