const httpStatus = require("http-status");
const { userService } = require("./user.service");

const getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();
    res.status(httpStatus.OK).json({
      success: true,
      message: "User all fetch successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User all fetch failed!!",
      error,
    });
  }
};
const createUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await userService.createUser(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "User created successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User created failed!!",
      error,
    });
  }
};

const makeAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.makeAdmin(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "User ADMIN included successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User ADMIN included failed!!",
      error,
    });
  }
};

module.exports.userController = {
  getAllUsers,
  createUser,
  makeAdmin,
};
