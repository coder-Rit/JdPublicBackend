const asynchandler = require("express-async-handler");
const productuploadDetails = require("../models/YoutubeModel");

const YoutubeLinkUpload = asynchandler(async (req, res) => {
  const { YoutubeLink,YoutubeDetails } = req.body;

  if (!YoutubeLink || !YoutubeDetails) {
    res.status(400);
    throw new Error("Please enter all the product  details");
  }

  const ProductData = await productuploadDetails.create({
    YoutubeLink,
    YoutubeDetails,
  });

  if (ProductData) {
    res.status(201).json({
      _id: ProductData._id,
      YoutubeLink: ProductData.YoutubeLink,
      YoutubeDetails: ProductData.YoutubeDetails,
    });
    console.log("Done ");
  } else {
    res.status(400);
    console.log("Unable to to make");
    throw new Error("Failed to upload the product");
  }
});

const FetchYoutubeVideo = asynchandler(async (req, res) => {
  try {
    const productData = await productuploadDetails.find();
    res.status(200).json({ youtubeData: productData });
    console.log("Here is the product data", productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  YoutubeLinkUpload,
  FetchYoutubeVideo
};
