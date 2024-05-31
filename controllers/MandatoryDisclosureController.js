const asynchandler = require("express-async-handler");
const productuploadDetails = require("../models/MandatoryDisclosureModel");

const MandatoryDisclosurePdfDataUpload = asynchandler(async (req, res) => {
  const { pdfDetails } = req.body;

  const pdfFile = req.file.path;

  if (!pdfDetails || !pdfFile) {
    res.status(400);
    throw new Error("Please enter all the product  details");
  }

  const ProductData = await productuploadDetails.create({
    pdfDetails,
    pdfFile,
  });

  if (ProductData) {
    res.status(201).json({
      _id: ProductData._id,
      pdfDetails: ProductData.pdfDetails,
      pdfFile: ProductData.pdfFile,
    });
    console.log("Done ");
  } else {
    res.status(400);
    console.log("Unable to to make");
    throw new Error("Failed to upload the product");
  }
});

const FetchMandatoryDisclosurePdfData = asynchandler(async (req, res) => {
  try {
    const productData = await productuploadDetails.find();
    res.status(200).json({ PdfDataMandatory: productData });
    console.log("Here is the product data", productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = { MandatoryDisclosurePdfDataUpload, FetchMandatoryDisclosurePdfData };
