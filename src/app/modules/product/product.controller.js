const httpStatus = require("http-status");
const { productService } = require("./product.service");

const createNew = async (req, res) => {
  try {
    const data = req.body;
    const result = await productService.createNewProduct(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product created successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product created failed!!",
      error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await productService.getAllProducts();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product all fetch successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product all fetch failed!!",
      error,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.getSingleProduct(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product fetch successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product fetch failed!!",
      error,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await productService.updateProduct(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product updated successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product updated failed!!",
      error,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.deleteProduct(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Product deleted successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Product deleted failed!!",
      error,
    });
  }
};

module.exports.productController = {
  createNew,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
