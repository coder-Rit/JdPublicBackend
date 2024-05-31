const asynchandler = require("express-async-handler");
const productuploadDetails = require("../models/SchoolActivitiesModel");

const GalleryDataUpload = asynchandler(async (req, res) => {
  const { productDetails } = req.body;

  const productImage = req.file.path;

  if (!productDetails || !productImage) {
    res.status(400);
    throw new Error("Please enter all the product  details");
  }

  const ProductData = await productuploadDetails.create({
    productDetails,

    productImage,
  });

  if (ProductData) {
    res.status(201).json({
      _id: ProductData._id,
      productDetails: ProductData.Details,
      productImage: ProductData.Image,
    });
    console.log("Done ");
  } else {
    res.status(400);
    console.log("Unable to to make");
    throw new Error("Failed to upload the product");
  }
});

const FetchGalleryData = asynchandler(async (req, res) => {
  try {
    const productData = await productuploadDetails.find();
    res.status(200).json({ ProductData: productData });
    console.log("Here is the product data", productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = { GalleryDataUpload, FetchGalleryData };