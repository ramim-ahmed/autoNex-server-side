const httpStatus = require("http-status");
const { categoryService } = require("./category.service");

const createNew = async (req, res) => {
  try {
    const data = req.body;
    const result = await categoryService.createNew(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category created successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category created failed!!",
      error,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await categoryService.getAllCategories();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category all fetch successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category all fetch failed!!",
      error,
    });
  }
};

const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await categoryService.getSingleCategory(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category fetch successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category fetch failed!!",
      error,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await categoryService.updateCategory(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category update successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category update failed!!",
      error,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await categoryService.deleteCategory(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Category deleted successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Category deleted failed!!",
      error,
    });
  }
};

module.exports.categoryController = {
  createNew,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
