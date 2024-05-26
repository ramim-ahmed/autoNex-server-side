const Product = require("./product.model");

const createNewProduct = async (data) => {
  const result = await Product.create(data);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find({})
    .populate("category")
    .sort({ createdAt: "desc" });

  return result;
};

const getSingleProduct = async (id) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const updateProduct = async (id, data) => {
  const result = await Product.updateOne({ _id: id }, data);
  return result;
};

const deleteProduct = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

module.exports.productService = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
